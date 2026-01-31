import React, { Children } from 'react'

export default function Layout({children, className = ''}) {
  return (
    <div className={`md:px-23 md:py-15 px-8 py-10 ${className}`}>
        {children}
    </div>
  )
}
