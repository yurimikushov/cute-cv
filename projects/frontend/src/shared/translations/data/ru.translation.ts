import { Translation } from './translation'

const ru: Translation = {
  signIn: {
    greeting: 'Привет!',
    google: {
      title: 'Войти через Google',
    },
    facebook: {
      title: 'Войти через Facebook',
    },
    github: {
      title: 'Войти через GitHub',
    },
    skip: {
      title: 'Пропустить',
      description: 'чтобы просто попробовать',
    },
  },
  errorBoundaryModal: {
    title: 'Произошла ошибка',
    description: 'Пожалуйста, попробуйте снова по позже',
    reset: 'Попробовать еще раз',
  },
  panel: {
    preview: 'Посмотреть',
    edit: 'Редактировать',
    savedAt: 'Сохранено {{savedAt}} назад',
    notSaved: 'Не сохранено',
    noSave: 'Войдите, чтобы сохранить изменения',
  },
  versions: {
    title: 'Версии',
    menu: {
      edit: 'Изменить',
      makeCopy: 'Сделать копию',
      delete: 'Удалить',
      confirmDelete: 'Вы точно хотите удалить эту версию?',
    },
    editCvMetadataModal: {
      title: 'Изменить резюме',
      name: {
        placeholder: 'Название резюме',
        required: 'Это обязательное поле',
      },
      allowShare: {
        title: 'Разрешить доступ по ссылке',
      },
      submit: 'Сохранить',
    },
    updateCvMetadataModal: {
      title: 'Изменить резюме',
      savingStatus: 'Сохранение...',
      save: 'Сохранить',
    },
    makeCopyModal: {
      title: 'Сделать копию',
      makeCopy: 'Сделать копию',
    },
    saveCvOfUnsignedInUserNotification: {
      description:
        'Есть резюме, которое вы создали, когда еще не авторизовались. Сохранить его?',
      save: 'Да, сохранить',
    },
    saveCvOfUnsignedInUserModal: {
      title: 'Сохранить резюме',
      save: 'Сохранить',
    },
    addModal: {
      title: 'Добавить резюме',
      add: 'Добавить',
    },
    add: 'Добавить',
    notifications: {
      updateMetadataResult: {
        success: 'Резюме обновлено',
        error: 'Не удалось обновить резюме',
      },
      makeCopyResult: {
        success: 'Резюме скопировано',
        error: 'Не удалось скопировать резюме',
      },
      deleteResult: {
        success: 'Резюме удалено',
        error: 'Не удалось удалить резюме',
      },
      addResult: {
        success: 'Резюме создано',
        error: 'Не удалось создать резюме',
      },
      saveCvOfUnsignedInUserResult: {
        success: 'Резюме сохранено',
        error: 'Не удалось сохранить резюме',
      },
    },
  },
  toolbar: {
    download: {
      title: 'Скачать',
      pdf: 'PDF',
      json: 'JSON',
    },
    share: {
      title: 'Доступ',
      copyLink: 'Ссылка', // TODO: more successful and short label needed
      notifications: {
        linkCopyingResult: {
          success: 'Ссылка скопирована',
          error: 'Не удалось скопировать ссылку',
        },
      },
    },
    language: {
      title: 'Язык',
    },
    signIn: 'Войти',
    signOut: 'Выйти',
  },
  share: {
    error: 'Резюме не существует или его владелец не разрешил им делиться',
  },
  fullName: {
    placeholder: 'Полное имя',
  },
  position: {
    placeholder: 'Должность',
  },
  aboutMe: {
    placeholder: 'Расскажите о своих качествах, знаниях, увлечениях',
  },
  avatarPicker: {
    img: {
      alt: 'Аватар.',
    },
    confirmDelete: 'Вы точно хотите удалить фото?',
  },
  experience: {
    title: 'Опыт',
    position: {
      placeholder: 'Должность',
    },
    company: {
      placeholder: 'Компания',
    },
    duration: {
      placeholder: 'Длительность опыта',
    },
    description: {
      placeholder: 'Что вы делали на работе',
    },
    add: 'Добавить',
  },
  education: {
    title: 'Образование',
    degree: {
      placeholder: 'Специализация',
    },
    university: {
      placeholder: 'Университет',
    },
    duration: {
      placeholder: 'Длительность обучения',
    },
    add: 'Добавить',
  },
  contacts: {
    title: 'Контакты',
    text: {
      placeholder: 'Текст',
    },
    reference: {
      placeholder: 'Ссылка',
    },
    add: 'Добавить',
  },
  technologies: {
    title: 'Технологии',
    placeholder: 'Технологический стек',
  },
  languages: {
    title: 'Языки',
    placeholder: 'Язык',
    add: 'Добавить',
  },
}

export default ru
