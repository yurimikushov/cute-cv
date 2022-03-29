import { Translation } from 'translation'

const en: Translation = {
  signIn: {
    greeting: 'Hello!',
    google: {
      title: 'Sign in Google',
    },
    facebook: {
      title: 'Sign in Facebook',
    },
    github: {
      title: 'Sign in GitHub',
    },
    skip: {
      title: 'Skip',
      description: 'to just try it',
    },
  },
  panel: {
    preview: 'Preview',
    edit: 'Edit',
    savedAt: 'Saved {{savedAt}} ago',
    notSaved: 'Not saved',
    noSave: 'Sign in, to save changes',
  },
  versions: {
    title: 'Versions',
    menu: {
      edit: 'Edit',
      makeCopy: 'Make copy',
      delete: 'Delete',
      confirmDelete: 'Are you sure you wanna delete this version?',
    },
    editCvMetadataModal: {
      title: 'Edit CV',
      name: {
        placeholder: 'CV name',
        required: `It's required field`,
      },
      allowShare: {
        title: 'Allow share by link',
      },
      submit: 'Сохранить',
    },
    updateCvMetadataModal: {
      title: 'Edit',
      savingStatus: 'Saving...',
      save: 'Save',
    },
    makeCopyModal: {
      title: 'Make copy',
      makeCopy: 'Make copy',
    },
    saveCvOfUnsignedInUserNotification: {
      description:
        'There is a cv that you created when you were not signed in yet. Save it?',
      save: 'Yes, save',
    },
    saveCvOfUnsignedInUserModal: {
      title: 'Save cv',
      save: 'Save',
    },
    addModal: {
      title: 'Add CV',
      add: 'Add',
    },
    add: 'Add',
  },
  toolbar: {
    download: {
      title: 'Download',
      pdf: 'PDF',
      json: 'JSON',
    },
    language: {
      title: 'Language',
    },
    signIn: 'Sign in',
    signOut: 'Sign out',
  },
  share: {
    error: `The CV doesn't exist or its owner hasn't allow to share it`,
  },
  fullName: {
    placeholder: 'Full name',
  },
  position: {
    placeholder: 'Position',
  },
  aboutMe: {
    placeholder: 'Tell about your qualities, knowledge and hobbies',
  },
  avatarPicker: {
    img: {
      alt: 'Avatar.',
    },
    confirmDelete: 'Are you sure you wanna delete the pic?',
  },
  experience: {
    title: 'Experience',
    position: {
      placeholder: 'Position',
    },
    company: {
      placeholder: 'Company',
    },
    duration: {
      placeholder: 'Experience duration',
    },
    description: {
      placeholder: 'Experience description',
    },
    add: 'Add',
  },
  education: {
    title: 'Education',
    degree: {
      placeholder: 'Degree',
    },
    university: {
      placeholder: 'University',
    },
    duration: {
      placeholder: 'Education duration',
    },
    add: 'Add',
  },
  contacts: {
    title: 'Contacts',
    text: {
      placeholder: 'Text',
    },
    reference: {
      placeholder: 'Reference',
    },
    add: 'Add',
  },
  technologies: {
    title: 'Technologies',
    placeholder: 'Your technology stack',
  },
  languages: {
    title: 'Languages',
    placeholder: 'Language',
    add: 'Add',
  },
}

export default en
