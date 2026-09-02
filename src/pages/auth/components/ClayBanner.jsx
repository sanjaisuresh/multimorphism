import React from 'react'

const ClayBanner = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full object-cover"
      viewBox="0 0 800 1200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Soft Drop Shadows for Clay Effect */}
        <filter id="clay-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="15" dy="15" stdDeviation="20" floodColor="#b3c6ff" floodOpacity="0.8" />
          <feDropShadow dx="-10" dy="-10" stdDeviation="15" floodColor="#ffffff" floodOpacity="0.9" />
        </filter>

        {/* Inner shadow for that 3D inset look */}
        <filter id="clay-inner-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feOffset dx="-8" dy="-8" />
          <feComposite operator="out" in2="SourceAlpha" />
          <feComposite operator="in" in2="SourceGraphic" />
          <feBlend mode="multiply" in2="SourceGraphic" />
        </filter>

        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0e8ff" />
          <stop offset="100%" stopColor="#f0f4ff" />
        </linearGradient>

        <linearGradient id="blob1-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb3c6" />
          <stop offset="100%" stopColor="#ff85a1" />
        </linearGradient>

        <linearGradient id="blob2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b3e5fc" />
          <stop offset="100%" stopColor="#81d4fa" />
        </linearGradient>
        
        <linearGradient id="blob3-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d1c4e9" />
          <stop offset="100%" stopColor="#b39ddb" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="url(#bg-grad)" />

      {/* Decorative Blobs */}
      <g filter="url(#clay-shadow)">
        {/* Blob 1 */}
        <path
          d="M 600, 200 C 750, 220 850, 400 700, 550 C 550, 700 400, 600 350, 400 C 300, 200 450, 180 600, 200 Z"
          fill="url(#blob1-grad)"
          filter="url(#clay-inner-shadow)"
        >
          <animateTransform attributeName="transform" type="translate" values="0,0; -20,30; 0,0" dur="10s" repeatCount="indefinite" />
        </path>

        {/* Blob 2 */}
        <path
          d="M 150, 800 C 300, 750 450, 850 400, 1000 C 350, 1150 150, 1250 50, 1100 C -50, 950 0, 850 150, 800 Z"
          fill="url(#blob2-grad)"
          filter="url(#clay-inner-shadow)"
        >
          <animateTransform attributeName="transform" type="translate" values="0,0; 30,-20; 0,0" dur="12s" repeatCount="indefinite" />
        </path>
        
        {/* Blob 3 */}
        <path
          d="M 200, 100 C 300, 50 450, 150 400, 250 C 350, 350 200, 350 100, 250 C 0, 150 100, 150 200, 100 Z"
          fill="url(#blob3-grad)"
          filter="url(#clay-inner-shadow)"
        >
          <animateTransform attributeName="transform" type="translate" values="0,0; -15,-15; 0,0" dur="8s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  )
}

export default ClayBanner
