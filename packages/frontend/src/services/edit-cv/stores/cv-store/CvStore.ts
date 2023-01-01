/* eslint-disable max-lines */
import {
  AtomReturn,
  Ctx,
  CtxSpy,
  parseAtoms,
  plain,
  reatomAsync,
  withAbort,
  withDataAtom,
  withErrorAtom,
  withRetry,
} from '@reatom/framework'
import cvApi from 'shared/api/cv/api'
import debounce from 'shared/lib/debounce'
import reorder from 'shared/lib/reorder'
import { Experience, Education, Contact, Language, Metadata } from './model'
import {
  createMetadataAtom,
  createContentAtom,
  createExperienceAtom,
  createEducationAtom,
  createContactAtom,
  createLanguageAtom,
} from './utils'

class CvStore {
  private _fetchAction
  private _updateAction

  constructor(private id: string) {
    this._fetchAction = this.createFetchAction()
    this._updateAction = this.createUpdateAction()
  }

  public get pendingAtom() {
    return this._fetchAction.pendingAtom
  }

  public get retriesAtom() {
    return this._fetchAction.retriesAtom
  }

  public get dataAtom() {
    return this._fetchAction.dataAtom
  }

  public get errorAtom() {
    return this._fetchAction.errorAtom
  }

  public get fetchAction() {
    return this._fetchAction.pipe(plain)
  }

  public get updateAction() {
    return this._updateAction.pipe(plain)
  }

  public spyStoreState = (ctx: CtxSpy) => {
    return {
      isLoading: ctx.spy(this.pendingAtom) + ctx.spy(this.retriesAtom) > 0,
      data: parseAtoms(ctx, ctx.spy(this.dataAtom)),
      dataAtom: this.dataAtom,
      error: ctx.spy(this.errorAtom),
    }
  }

  public isFetchNeeded = (ctx: Ctx) => {
    return (
      ctx.get(this.dataAtom) === undefined &&
      ctx.get(this.pendingAtom) + ctx.get(this.retriesAtom) === 0
    )
  }

  public spyMetadata = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(cv.metadata)
  })
  public updateMetadata = this.runIfCvIsDefined(
    (ctx: Ctx, cv, metadata: Metadata | ((metadata: Metadata) => Metadata)) => {
      cv.metadata(ctx, metadata)
    }
  )

  public spyFullName = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).fullName)
  })
  public updateFullName = this.runIfCvIsDefined((ctx, cv, fullName: string) => {
    ctx.get(cv.content).fullName(ctx, fullName)
    this.startUpdateCv(ctx)
  })

  public spyPosition = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).position)
  })
  public updatePosition = this.runIfCvIsDefined((ctx, cv, position: string) => {
    ctx.get(cv.content).position(ctx, position)
    this.startUpdateCv(ctx)
  })

  public spyAvatar = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).avatar)
  })
  public updateAvatar = this.runIfCvIsDefined(
    (ctx, cv, avatar: string | null) => {
      ctx.get(cv.content).avatar(ctx, avatar)
      this.startUpdateCv(ctx)
    }
  )

  public spyAboutMe = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).aboutMe)
  })
  public updateAboutMe = this.runIfCvIsDefined((ctx, cv, aboutMe: string) => {
    ctx.get(cv.content).aboutMe(ctx, aboutMe)
    this.startUpdateCv(ctx)
  })

  public spyExperiences = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return parseAtoms(ctx, ctx.spy(ctx.get(cv.content).experiences)).map(
      ({ id }) => id
    )
  })
  public reorderExperiences = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx: Ctx, cv, startIndex: number, endIndex: number) => {
      ctx.get(cv.content).experiences(ctx, (experiences) => {
        return reorder(experiences, startIndex, endIndex)
      })
      this.startUpdateCv(ctx)
    }
  )
  public spyExperience = this.runIfCvIsDefined(
    (ctx: CtxSpy, cv, id: string) => {
      const experience = ctx
        .get(ctx.get(cv.content).experiences)
        .find((experience) => ctx.get(experience).id === id)

      if (!experience) {
        return
      }

      return ctx.spy(experience)
    }
  )
  public addExperience = this.runIfCvIsDefined(
    (ctx, cv, experience?: Partial<Experience>) => {
      ctx
        .get(cv.content)
        .experiences(ctx, (experiences) => [
          ...experiences,
          createExperienceAtom(experience),
        ])
      this.startUpdateCv(ctx)
    }
  )
  public updateExperience = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx, cv, id: string, experience: Omit<Experience, 'id'>) => {
      ctx
        .get(ctx.get(cv.content).experiences)
        .find((experience) => ctx.get(experience).id === id)?.(ctx, {
        ...experience,
        id,
      })
      this.startUpdateCv(ctx)
    }
  )
  public deleteExperience = this.runIfCvIsDefined((ctx, cv, id: string) => {
    const experiencesAtom = ctx.get(cv.content).experiences
    experiencesAtom(
      ctx,
      ctx
        .get(experiencesAtom)
        .filter((experience) => ctx.get(experience).id !== id)
    )
    this.startUpdateCv(ctx)
  })

  public spyEducations = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return parseAtoms(ctx, ctx.spy(ctx.get(cv.content).educations)).map(
      ({ id }) => id
    )
  })
  public updateEducations = this.runIfCvIsDefined(
    (ctx, cv, educations: Array<Education>) => {
      ctx.get(cv.content).educations(ctx, educations.map(createEducationAtom))
      this.startUpdateCv(ctx)
    }
  )
  public reorderEducations = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx: Ctx, cv, startIndex: number, endIndex: number) => {
      ctx.get(cv.content).educations(ctx, (educations) => {
        return reorder(educations, startIndex, endIndex)
      })
      this.startUpdateCv(ctx)
    }
  )
  public spyEducation = this.runIfCvIsDefined((ctx: CtxSpy, cv, id: string) => {
    const education = ctx
      .get(ctx.get(cv.content).educations)
      .find((education) => ctx.get(education).id === id)

    if (!education) {
      return
    }

    return ctx.spy(education)
  })
  public addEducation = this.runIfCvIsDefined(
    (ctx, cv, education?: Partial<Education>) => {
      ctx
        .get(cv.content)
        .educations(ctx, (educations) => [
          ...educations,
          createEducationAtom(education),
        ])
      this.startUpdateCv(ctx)
    }
  )
  public updateEducation = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx, cv, id: string, education: Omit<Education, 'id'>) => {
      ctx
        .get(ctx.get(cv.content).educations)
        .find((education) => ctx.get(education).id === id)?.(ctx, {
        ...education,
        id,
      })
      this.startUpdateCv(ctx)
    }
  )
  public deleteEducation = this.runIfCvIsDefined((ctx, cv, id: string) => {
    const educationsAtom = ctx.get(cv.content).educations
    educationsAtom(
      ctx,
      ctx
        .get(educationsAtom)
        .filter((education) => ctx.get(education).id !== id)
    )
    this.startUpdateCv(ctx)
  })

  public spyContacts = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).contacts)
  })
  public updateContacts = this.runIfCvIsDefined(
    (ctx, cv, contacts: Array<Contact>) => {
      ctx.get(cv.content).contacts(ctx, contacts.map(createContactAtom))
      this.startUpdateCv(ctx)
    }
  )
  public spyContact = this.runIfCvIsDefined((ctx: CtxSpy, cv, id: string) => {
    const contact = ctx
      .get(ctx.get(cv.content).contacts)
      .find((contact) => ctx.get(contact).id === id)

    if (!contact) {
      return
    }

    return ctx.spy(contact)
  })
  public updateContact = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx, cv, id: string, contact: Omit<Contact, 'id'>) => {
      ctx
        .get(ctx.get(cv.content).contacts)
        .find((contact) => ctx.get(contact).id === id)?.(ctx, {
        ...contact,
        id,
      })
      this.startUpdateCv(ctx)
    }
  )

  public spyTechnologies = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).technologies)
  })
  public updateTechnologies = this.runIfCvIsDefined(
    (ctx, cv, technologies: string) => {
      ctx.get(cv.content).technologies(ctx, technologies)
      this.startUpdateCv(ctx)
    }
  )

  public spyLanguages = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return parseAtoms(ctx, ctx.spy(ctx.get(cv.content).languages)).map(
      ({ id }) => id
    )
  })
  public spyLanguage = this.runIfCvIsDefined((ctx: CtxSpy, cv, id: string) => {
    const language = ctx
      .get(ctx.get(cv.content).languages)
      .find((language) => ctx.get(language).id === id)

    if (!language) {
      return
    }

    return ctx.spy(language)
  })
  public addLanguage = this.runIfCvIsDefined(
    (ctx, cv, language?: Partial<Language>) => {
      ctx
        .get(cv.content)
        .languages(ctx, (langs) => [...langs, createLanguageAtom(language)])
      this.startUpdateCv(ctx)
    }
  )
  public updateLanguage = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx, cv, id: string, language: Omit<Language, 'id'>) => {
      ctx
        .get(ctx.get(cv.content).languages)
        .find((language) => ctx.get(language).id === id)?.(ctx, {
        ...language,
        id,
      })
      this.startUpdateCv(ctx)
    }
  )
  public deleteLanguage = this.runIfCvIsDefined((ctx, cv, id: string) => {
    const languagesAtom = ctx.get(cv.content).languages
    languagesAtom(
      ctx,
      ctx.get(languagesAtom).filter((language) => ctx.get(language).id !== id)
    )
    this.startUpdateCv(ctx)
  })

  private createFetchAction = () => {
    return reatomAsync(async (ctx) => {
      const cv = await cvApi.load(this.id, ctx.controller)

      if (!cv) {
        return
      }

      const { metadata, content } = cv

      return {
        metadata: createMetadataAtom({
          ...metadata,
          isNew: false,
          isSaved: true,
        }),
        content: createContentAtom(content),
      }
    }, `cv:${this.id}`).pipe(
      withDataAtom(undefined),
      withErrorAtom(),
      withAbort({ strategy: 'last-in-win' }),
      withRetry({
        onReject: (_ctx, _error, retries) => {
          // eslint-disable-next-line no-mixed-operators
          return retries < 4 ? Math.min(500, 100 * retries ** 2) : -1
        },
      })
    )
  }

  private createUpdateAction = () => {
    return reatomAsync(async (ctx) => {
      const cv = parseAtoms(ctx, this.dataAtom)

      if (!cv) {
        return
      }

      const {
        metadata: { publicId, name, number, allowShare },
        content,
      } = cv

      if (!publicId) {
        return
      }

      const metadata = await cvApi.update({
        publicId,
        name,
        number,
        allowShare,
        cv: content,
      })

      return metadata
    }).pipe(withAbort({ strategy: 'last-in-win' }))
  }

  private runIfCvIsDefined<
    C extends Ctx | CtxSpy,
    R,
    Args extends Array<unknown>
  >(
    callback: (
      ctx: C,
      cv: NonNullable<AtomReturn<typeof this.dataAtom>>,
      ...args: Args
    ) => R
  ): (ctx: C, ...args: Args) => R | undefined {
    return (ctx, ...args) => {
      const cv = (ctx.spy || ctx.get)(this.dataAtom)

      if (!cv) {
        return
      }

      return callback(ctx, cv, ...args)
    }
  }

  private startUpdateCv = (ctx: Ctx) => {
    this.updateMetadata(ctx, (metadata) => ({
      ...metadata,
      isSaved: false,
      savedAt: null,
    }))

    this.debouncedUpdateCv(ctx)
  }

  private debouncedUpdateCv = debounce(async (ctx: Ctx) => {
    const metadata = await this.updateAction(ctx)

    if (!metadata) {
      return
    }

    this.updateMetadata(ctx, {
      ...metadata,
      isNew: false,
      isSaved: true,
    })
  }, 1_000)
}

export { CvStore }
