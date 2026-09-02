import React from 'react'
import AppIcon from '@/assets/favicon.svg'
import { Link } from 'react-router-dom'

export const AppLogo = ({ className = '', iconClassName = '', textClassName = '', showText = true }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className={`w-9 h-9 bg-clay rounded-xl shadow-clay-btn flex items-center justify-center text-primary flex-shrink-0 overflow-hidden ${iconClassName}`}>
        <img src={AppIcon} alt="Logo" className="w-6 h-6 object-contain" />
      </div>
      {showText && (
        <h1 className={`text-xl font-bold tracking-tight text-dark whitespace-nowrap ${textClassName}`}>
          {import.meta.env.VITE_APP_NAME || 'Multimorphism'}
        </h1>
      )}
    </Link>
  )
}
