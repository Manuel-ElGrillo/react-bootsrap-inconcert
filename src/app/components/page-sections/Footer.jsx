import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer 
      style={{backgroundColor: "#F2F4F7"}}
      className='p-4'>

      <div className='container d-flex flex-column flex-md-row justify-content-between align-items-center'>

      <span className='py-3 order-3 order-sm-1'>
        © 2022 inConcert
      </span>

      <div className='d-flex flex-column text-md-center flex-md-row justify-content-center align-items-center order-2 order-sm-2'>
          <Link 
            href={"#"}
            className='text-decoration-none fw-light fs-6 px-md-5 py-3'
            style={{color: "black"}}>
              Aviso Legal</Link>
          <Link 
            href={"#"}
            className='text-decoration-none fw-light fs-6 px-md-5 py-3'
            style={{color: "black"}}>
              Política de Privacidad</Link>
          <Link 
            href={"#"}
            className='text-decoration-none fw-light fs-6 px-md-5 py-3'
            style={{color: "black"}}>
              Política de cookies</Link>
      </div>

      <div className='order-1 order-sm-3'></div>

      </div>
      
    </footer>
  )
}

export default Footer
