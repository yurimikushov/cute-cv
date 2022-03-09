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
      editName: string
      makeCopy: string
      delete: string
      confirmDelete: string
    }
    editCvModal: {
      title: string
      name: {
        placeholder: string
        required: string
      }
      submit: string
    }
    editNameModal: {
      title: string
      savingStatus: string
      save: string
    }
    makeCopyModal: {
      title: string
      makeCopy: string
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
    language: {
      title: string
    }
    signIn: string
    signOut: string
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
