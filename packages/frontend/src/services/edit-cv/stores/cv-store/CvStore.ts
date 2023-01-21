/* eslint-disable max-lines */
import {
  atom,
  AtomReturn,
  Ctx,
  CtxSpy,
  parseAtoms,
  plain,
  reatomAsync,
  withAbort,
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
  private isLoaded = false

  private _dataAtom

  private _loadCvAction
  private _updateCvAction

  constructor(private publicId: string | null, private id: string) {
    this._dataAtom = this.createDataAtom()
    this._loadCvAction = this.createLoadCvAction()
    this._updateCvAction = this.createUpdateCvAction()
  }

  public get pendingAtom() {
    return this._loadCvAction.pendingAtom
  }

  public get retriesAtom() {
    return this._loadCvAction.retriesAtom
  }

  public get dataAtom() {
    return this._dataAtom
  }

  public get errorAtom() {
    return this._loadCvAction.errorAtom
  }

  private get loadCvAction() {
    return this._loadCvAction.pipe(plain)
  }

  private get updateCvAction() {
    return this._updateCvAction.pipe(plain)
  }

  public isLoadNeeded = (ctx: Ctx) => {
    return (
      this.publicId &&
      !this.isLoaded &&
      ctx.get(this.pendingAtom) + ctx.get(this.retriesAtom) === 0
    )
  }

  public loadCv = (ctx: Ctx) => {
    return this.loadCvAction(ctx)
  }

  public spyIsLoading = (ctx: CtxSpy) => {
    return (
      ctx.spy(this._loadCvAction.pendingAtom) +
        ctx.spy(this._loadCvAction.retriesAtom) >
      0
    )
  }

  public spyCv = (ctx: CtxSpy) => {
    return parseAtoms(ctx, ctx.spy(this.dataAtom))
  }

  public spyLoadingError = (ctx: CtxSpy) => {
    return ctx.spy(this._loadCvAction.errorAtom)
  }

  public updateCv = (ctx: Ctx) => {
    return this.updateCvAction(ctx)
  }

  public spyIsUpdating = (ctx: CtxSpy) => {
    return ctx.spy(this._updateCvAction.pendingAtom) > 0
  }

  public spyUpdatingError = (ctx: CtxSpy) => {
    return ctx.spy(this._updateCvAction.errorAtom)
  }

  public spyMetadata = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(cv.metadata)
  })
  public updateMetadata = this.runIfCvIsDefined(
    (ctx: Ctx, cv, metadata: Partial<Metadata>) => {
      cv.metadata(ctx, (prevMetadata) => ({
        ...prevMetadata,
        ...metadata,
      }))
    }
  )

  public spyFullName = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).fullName)
  })
  public updateFullName = this.runIfCvIsDefined((ctx, cv, fullName: string) => {
    ctx.get(cv.content).fullName(ctx, fullName)
    this.startSaveCv(ctx)
  })

  public spyPosition = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).position)
  })
  public updatePosition = this.runIfCvIsDefined((ctx, cv, position: string) => {
    ctx.get(cv.content).position(ctx, position)
    this.startSaveCv(ctx)
  })

  public spyAvatar = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).avatar)
  })
  public updateAvatar = this.runIfCvIsDefined(
    (ctx, cv, avatar: string | null) => {
      ctx.get(cv.content).avatar(ctx, avatar)
      this.startSaveCv(ctx)
    }
  )

  public spyAboutMe = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).aboutMe)
  })
  public updateAboutMe = this.runIfCvIsDefined((ctx, cv, aboutMe: string) => {
    ctx.get(cv.content).aboutMe(ctx, aboutMe)
    this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
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
    this.startSaveCv(ctx)
  })

  public spyEducations = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return parseAtoms(ctx, ctx.spy(ctx.get(cv.content).educations)).map(
      ({ id }) => id
    )
  })
  public updateEducations = this.runIfCvIsDefined(
    (ctx, cv, educations: Array<Education>) => {
      ctx.get(cv.content).educations(ctx, educations.map(createEducationAtom))
      this.startSaveCv(ctx)
    }
  )
  public reorderEducations = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx: Ctx, cv, startIndex: number, endIndex: number) => {
      ctx.get(cv.content).educations(ctx, (educations) => {
        return reorder(educations, startIndex, endIndex)
      })
      this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
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
    this.startSaveCv(ctx)
  })

  public spyContacts = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return parseAtoms(ctx, ctx.spy(ctx.get(cv.content).contacts)).map(
      ({ id }) => id
    )
  })
  public updateContacts = this.runIfCvIsDefined(
    (ctx, cv, contacts: Array<Contact>) => {
      ctx.get(cv.content).contacts(ctx, contacts.map(createContactAtom))
      this.startSaveCv(ctx)
    }
  )
  public reorderContacts = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx: Ctx, cv, startIndex: number, endIndex: number) => {
      ctx.get(cv.content).contacts(ctx, (contacts) => {
        return reorder(contacts, startIndex, endIndex)
      })
      this.startSaveCv(ctx)
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
  public addContact = this.runIfCvIsDefined(
    (ctx, cv, contact?: Partial<Contact>) => {
      ctx
        .get(cv.content)
        .contacts(ctx, (contacts) => [...contacts, createContactAtom(contact)])
      this.startSaveCv(ctx)
    }
  )
  public updateContact = this.runIfCvIsDefined(
    // eslint-disable-next-line max-params
    (ctx, cv, id: string, contact: Omit<Contact, 'id'>) => {
      ctx
        .get(ctx.get(cv.content).contacts)
        .find((contact) => ctx.get(contact).id === id)?.(ctx, {
        ...contact,
        id,
      })
      this.startSaveCv(ctx)
    }
  )
  public deleteContact = this.runIfCvIsDefined((ctx, cv, id: string) => {
    const contactsAtom = ctx.get(cv.content).contacts
    contactsAtom(
      ctx,
      ctx.get(contactsAtom).filter((contact) => ctx.get(contact).id !== id)
    )
    this.startSaveCv(ctx)
  })

  public spyTechnologies = this.runIfCvIsDefined((ctx: CtxSpy, cv) => {
    return ctx.spy(ctx.get(cv.content).technologies)
  })
  public updateTechnologies = this.runIfCvIsDefined(
    (ctx, cv, technologies: string) => {
      ctx.get(cv.content).technologies(ctx, technologies)
      this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
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
      this.startSaveCv(ctx)
    }
  )
  public deleteLanguage = this.runIfCvIsDefined((ctx, cv, id: string) => {
    const languagesAtom = ctx.get(cv.content).languages
    languagesAtom(
      ctx,
      ctx.get(languagesAtom).filter((language) => ctx.get(language).id !== id)
    )
    this.startSaveCv(ctx)
  })

  private createDataAtom = () => {
    return atom(
      {
        metadata: createMetadataAtom({
          publicId: undefined,
          id: '1',
          name: 'New',
          number: 1,
          isNew: false,
          isSaved: false,
          savedAt: null,
          allowShare: false,
        }),
        content: createContentAtom({
          fullName: '',
          position: '',
          aboutMe: '',
          avatar: null,
          experiences: [{}],
          educations: [{}],
          contacts: [{}],
          technologies: '',
          languages: [{}],
        }),
      },
      `cv:${this.id}`
    )
  }

  private createLoadCvAction = () => {
    return reatomAsync(
      async (ctx) => {
        if (!this.publicId) {
          return
        }

        const cv = await cvApi.load(this.publicId, ctx.controller)

        return cv
      },
      {
        name: `loadCv:${this.id}`,
        onFulfill: (ctx, cv) => {
          if (!cv) {
            return
          }

          const { metadata, content } = cv

          this.isLoaded = true

          this.dataAtom(ctx, {
            metadata: createMetadataAtom({
              ...metadata,
              isNew: false,
              isSaved: true,
            }),
            content: createContentAtom(content),
          })
        },
      }
    ).pipe(
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

  private createUpdateCvAction = () => {
    // eslint-disable-next-line max-statements
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
        const metadata = await cvApi.add({
          name,
          number,
          allowShare,
          cv: content,
        })

        return metadata
      }

      const metadata = await cvApi.update({
        publicId,
        name,
        number,
        allowShare,
        cv: content,
      })

      return metadata
    }, `updateCv:${this.id}`).pipe(withErrorAtom())
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

  private startSaveCv = (ctx: Ctx) => {
    this.updateMetadata(ctx, {
      isSaved: false,
      savedAt: null,
    })

    this.debouncedSaveCv(ctx)
  }

  private debouncedSaveCv = debounce(async (ctx: Ctx) => {
    const metadata = await this.updateCvAction(ctx)

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
