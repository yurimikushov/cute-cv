import { Translation } from 'translation'

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
      editName: 'Изменить название',
      makeCopy: 'Сделать копию',
      delete: 'Удалить',
      confirmDelete: 'Вы точно хотите удалить эту версию?',
    },
    editCvModal: {
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
    editNameModal: {
      title: 'Изменить название',
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
  },
  toolbar: {
    download: {
      title: 'Скачать',
      pdf: 'PDF',
      json: 'JSON',
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
