import { makeAutoObservable } from 'mobx'

class AuthStore {
  token = localStorage.getItem('token') || null
  user = JSON.parse(localStorage.getItem('user')) || null

  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  get isAuthenticated() {
    return !!this.token
  }

  login(email, password) {
    // Hardcoded validation as requested
    if (email === 'admin@multimorphism.com' && password === 'Admin@123') {
      const mockToken = 'mock-jwt-token-12345'
      const mockUser = { name: 'Admin User', email }

      this.token = mockToken
      this.user = mockUser

      localStorage.setItem('token', mockToken)
      localStorage.setItem('user', JSON.stringify(mockUser))
      return true
    } else {
      throw new Error('Invalid email or password.')
    }
  }

  signup(name, email, password) {
    // Mock signup success
    const mockToken = 'mock-jwt-token-67890'
    const mockUser = { name, email }

    this.token = mockToken
    this.user = mockUser

    localStorage.setItem('token', mockToken)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return true
  }

  logout() {
    this.token = null
    this.user = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}

export default AuthStore
