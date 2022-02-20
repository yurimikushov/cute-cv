import { Version } from '../model'

const createDummyCv = (): Version => ({
  metadata: {
    id: 'BEVw1y4awdGV966i1vvd7',
    name: 'Dummy',
    isSaved: false,
    savedAt: null,
  },
  content: {
    fullName: '',
    position: '',
    aboutMe: '',
    avatar: null,
    experiences: {
      ids: ['YMBe7HUE6dRtaMMCefHiO'],
      byId: {
        YMBe7HUE6dRtaMMCefHiO: {
          id: 'YMBe7HUE6dRtaMMCefHiO',
          position: '',
          company: '',
          duration: '',
          description: '',
        },
      },
    },
    educations: {
      ids: ['r8_xAf7clY7az-CX5FkS8'],
      byId: {
        'r8_xAf7clY7az-CX5FkS8': {
          id: 'r8_xAf7clY7az-CX5FkS8',
          degree: '',
          university: '',
          duration: '',
        },
      },
    },
    contacts: {
      ids: ['euhfCXwqyvVULDSvAFIjd'],
      byId: {
        euhfCXwqyvVULDSvAFIjd: {
          id: 'euhfCXwqyvVULDSvAFIjd',
          text: '',
          href: '',
        },
      },
    },
    technologies: '',
    languages: {
      ids: ['YlgEDyb0C22jlsM7PVQ2V'],
      byId: {
        YlgEDyb0C22jlsM7PVQ2V: {
          id: 'YlgEDyb0C22jlsM7PVQ2V',
          language: '',
        },
      },
    },
  },
})

export default createDummyCv
