import { join } from 'path'

const getProjectPath = (project: 'frontend' | 'backend') => {
  return join(process.cwd(), 'projects', project)
}

export default getProjectPath
