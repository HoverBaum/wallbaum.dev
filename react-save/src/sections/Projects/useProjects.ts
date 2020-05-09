import { useState } from 'react'

export interface ProjectInterface {
  title: string
  description: string
  year: number
  imageUrl: string
  hostingUrl?: string
}

const projects: ProjectInterface[] = [
  {
    title: 'test one',
    year: 2020,
    description: 'something about the project will be writen here',
    imageUrl: '/logo.png',
  },
  {
    title: 'test one',
    year: 2020,
    description: 'something about the project will be writen here',
    imageUrl: '/logo.png',
  },
  {
    title: 'test one',
    year: 2020,
    description: 'something about the project will be writen here',
    imageUrl: '/logo.png',
  },
  {
    title: 'test one',
    year: 2020,
    description: 'something about the project will be writen here',
    imageUrl: '/logo.png',
  },
  {
    title: 'test one',
    year: 2020,
    description: 'something about the project will be writen here',
    imageUrl: '/logo.png',
  },
]

const useProjects = () => {
  const [state] = useState(projects)
  return state
}

export default useProjects
