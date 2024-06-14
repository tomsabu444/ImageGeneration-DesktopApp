import React from 'react'
import ImageGeneration from './ImageGeneration'

function Layout({children}) {
  return (
    <main>
    {children}
    <ImageGeneration/>
    </main>
  )
}

export default Layout