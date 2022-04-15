type Translation = {
  signIn: {
    greeting: string
    google: {
      title: string
    }
    facebook: {
      title: string
    }
    github: {
      title: string
    }
    skip: {
      title: string
      description: string
    }
  }
  errorBoundaryModal: {
    title: string
    description: string
    reset: string
  }
  panel: {
    preview: string
    edit: string
    savedAt: string
    notSaved: string
    noSave: string
  }
  versions: {
    title: string
    menu: {
      edit: string
      makeCopy: string
      delete: string
      confirmDelete: string
    }
    editCvMetadataModal: {
      title: string
      name: {
        placeholder: string
        required: string
      }
      allowShare: {
        title: string
      }
      submit: string
    }
    updateCvMetadataModal: {
      title: string
      savingStatus: string
      save: string
      notifications: {
        saveResult: {
          success: string
          error: string
        }
      }
    }
    makeCopyModal: {
      title: string
      makeCopy: string
    }
    saveCvOfUnsignedInUserNotification: {
      description: string
      save: string
    }
    saveCvOfUnsignedInUserModal: {
      title: string
      save: string
    }
    addModal: {
      title: string
      add: string
    }
    add: string
  }
  toolbar: {
    download: {
      title: string
      pdf: string
      json: string
    }
    share: {
      title: string
      copyLink: string
      notifications: {
        linkCopyingResult: {
          success: string
          error: string
        }
      }
    }
    language: {
      title: string
    }
    signIn: string
    signOut: string
  }
  share: {
    error: string
  }
  fullName: {
    placeholder: string
  }
  position: {
    placeholder: string
  }
  aboutMe: {
    placeholder: string
  }
  avatarPicker: {
    img: {
      alt: string
    }
    confirmDelete: string
  }
  experience: {
    title: string
    position: {
      placeholder: string
    }
    company: {
      placeholder: string
    }
    duration: {
      placeholder: string
    }
    description: {
      placeholder: string
    }
    add: string
  }
  education: {
    title: string
    degree: {
      placeholder: string
    }
    university: {
      placeholder: string
    }
    duration: {
      placeholder: string
    }
    add: string
  }
  contacts: {
    title: string
    text: {
      placeholder: string
    }
    reference: {
      placeholder: string
    }
    add: string
  }
  technologies: {
    title: string
    placeholder: string
  }
  languages: {
    title: string
    placeholder: string
    add: string
  }
}

export { Translation }
