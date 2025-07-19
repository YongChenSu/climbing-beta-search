export interface Gym {
  id: string
  name: string
  address?: string
  city: string
  createdAt: Date
  updatedAt: Date
  sections?: Section[]
}

export interface Section {
  id: string
  name: string
  description?: string
  gymId: string
  createdAt: Date
  updatedAt: Date
  gym?: Gym
  routes?: Route[]
}

export interface Route {
  id: string
  grade: string
  color?: string
  setterName?: string
  setDate?: Date
  status: string
  sectionId: string
  createdAt: Date
  updatedAt: Date
  section?: Section
  betaVideos?: BetaVideo[]
}

export interface BetaVideo {
  id: string
  instagramUrl: string
  instagramUser: string
  videoUrl?: string
  description?: string
  postDate?: Date
  verified: boolean
  routeId: string
  createdAt: Date
  updatedAt: Date
  route?: Route
}