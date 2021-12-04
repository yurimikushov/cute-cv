type TranslationT = {
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
  toolbar: {
    download: {
      title: string
      pdf: string
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
  }
  contacts: {
    title: string
    text: {
      placeholder: string
    }
    reference: {
      placeholder: string
    }
  }
  technologies: {
    title: string
    placeholder: string
  }
  languages: {
    title: string
    placeholder: string
  }
}

export { TranslationT }
