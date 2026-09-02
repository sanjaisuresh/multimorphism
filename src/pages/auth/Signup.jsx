import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { useStore } from '@/store'

const Signup = () => {
  const { authStore } = useStore()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  
  const handleSignup = (e) => {
    e.preventDefault()
    setError('')
    
    // Frontend validation
    if (!name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    // Mock Authentication Logic via AuthStore
    try {
      authStore.signup(name, email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="w-full border-none shadow-xl bg-bgbase/80 backdrop-blur-md">
        <CardHeader className="space-y-3 pb-6">
          <CardTitle className="text-3xl font-bold">Create an account</CardTitle>
          <CardDescription className="text-base">
            Enter your details to get started with Multimorphism.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-4"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-4"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-4 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full h-11 text-base font-semibold mt-2 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Sign Up <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pt-2 pb-8">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Signup
