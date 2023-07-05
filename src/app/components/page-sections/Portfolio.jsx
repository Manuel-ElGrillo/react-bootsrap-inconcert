import React from 'react'
import Cards from '../Cards'
import { CardsData } from '@/app/data/cards'

const Portfolio = () => {
  return (
    <section
      style={{ backgroundColor: "#F2F4F7" }}>

      <div className='container py-5'>

        <h2
          className='text-center fs-2 fw-bolder'
          style={{ color: '#1D2351' }}>Descubre el portafolio de productos omnicanales <br />
          all-in-one más completo del mercado
        </h2>

        <p
          className='my-3 text-center' 
          style={{color: "#353535"}}>
          Súmale valor al viaje de tu cliente en cada punto de contacto a través del chat, mail, teléfono, WhatsApp <br /> y otros canales. Con inConcert vende más, brinda un mejor servicio y reduce costes operativos.
        </p>

        <p
          className='my-3 text-center'
          style={{color: "#353535"}}>
          Conoce los productos que componen nuestra plataforma omnicanal y modular diseñada para optimizar los <br /> contactos con tus clientes y los procesos de marketing, ventas, servicio y cobranza.
        </p>

        <div className='d-md-flex justify-content-between mt-5'>

        {
          CardsData.map( card => (
            <Cards card = { card }/>
          ) )
        }

        </div>

      </div>

    </section>
  )
}

export default Portfolio
