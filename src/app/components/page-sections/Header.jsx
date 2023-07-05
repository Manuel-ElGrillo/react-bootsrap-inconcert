import React from 'react'
import styles from '../../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.bg}>

      <div className='d-flex flex-column align-items-center justify-content-center h-100 text-light p-4'>
        <span 
          className='fs-4 fw-bold my-2' 
          style={{color: "#D2D3DC"}}>
            Productos
        </span>

        <h1 className='fs-1 fw-bolder text-center my-2'>
          Rentabiliza cada etapa <br />
          del ciclo de vida de tus clientes
        </h1>

        <p className='fw-semibold fs-5 text-justify text-lg-center my-2'>
          Desde el marketing digital y tradicional, pasando por el CRM, la resolución de casos y la cobranza. <br />
          Todos los puntos de contacto y todas las etapas del customer journey. All-in-one.
        </p>
      </div>



    </header>
  )
}

export default Header
