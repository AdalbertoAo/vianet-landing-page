import React, { Children } from 'react'

export default function Layout({children}) {
  return (
    <div className="px-23 py-15">
        {children}
    </div>
  )
}
