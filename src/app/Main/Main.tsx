import React from 'react'
import Fylo from './Fylo'
import Storage from './Storage'

const Main = () => {
  return (
    <div className='h-screen bg-mobile md:bg-desktop bg-no-repeat bg-center bg-cover 
    flex flex-col lg:flex-row items-center justify-center gap-4
    lg:px-20 xl:px-72'>
      <Fylo />
      <Storage />
    </div>
  )
}

export default Main
