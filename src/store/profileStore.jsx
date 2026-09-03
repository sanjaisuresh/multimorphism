import { makeAutoObservable } from 'mobx'

class ProfileStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  user = {
    name: "Sanjai Suresh",
    role: "Software Engineer",
    avatar: "SS",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    about: "Passionate about building beautiful, interactive user interfaces with modern web technologies. Exploring Multimorphism and 18-in-1 UI architectures.",
    location: "India, Coimbatore",
    email: "sanjaisuresh1062@gmail.com",
    website: "https://example.com",
    socials: {
      github: "https://github.com/sanjaisuresh",
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/sanjai-suresh-03548b248"
    }
  }

  connections = [
    { id: 1, name: "David Chen", role: "UX Researcher", avatar: "DC", following: true },
    { id: 2, name: "Sarah Lopez", role: "Frontend Lead", avatar: "SL", following: false },
    { id: 3, name: "Mike Taylor", role: "Backend Architect", avatar: "MT", following: true },
    { id: 4, name: "Jessica Wong", role: "Product Designer", avatar: "JW", following: false },
  ]

  projects = [
    { id: 1, title: "Multimorphism Dashboard", desc: "A modern React dashboard with 18 dynamic UI effects.", progress: 100, team: ["DC", "SL"] },
    { id: 2, flow: "Data Pipeline", desc: "Analytics dashboard for the new sales flow.", progress: 75, team: ["AD", "JW"] },
    { id: 3, title: "E-Commerce Theme", desc: "Building a beautiful storefront template.", progress: 40, team: ["SL"] },
  ]
}

export default ProfileStore
