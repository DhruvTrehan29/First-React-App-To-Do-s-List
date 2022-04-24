import React from 'react'

export const Footer = () => {
  let FooterStyle={
    position:"absolute",
    top:"100vh",
    width:"100%"
  }
  return (
    <footer className='text-center text-light bg-dark py-3' style={FooterStyle}>

     <p className='text-center'>Footer Works!!</p>
    </footer>
  )
}


