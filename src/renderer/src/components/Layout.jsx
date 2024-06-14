import React from 'react'
import ImageGeneration from './ImageGeneration'

function Layout({ children }) {
  return (
    <main>
      <div style={{ position: 'fixed' }}>{children}</div>
      <ImageGeneration />
    </main>
  )
}

export default Layout
