"use client"
import React from 'react'
import Image from 'next/image'
import CarouselSection from '../Carousel'
import CTA from '../CTA'
import contactImg from '../../../../public/img/ic-site-imagen-1@2x.png'
import styles from "../../../styles/ContactCenter.module.css"

const ContactCenter = () => {
  return (
    <section
      style={{ backgroundColor: "#FFFFFF" }}
      className={styles.contactCenter}>

      <div className='container d-flex flex-column flex-lg-row align-items-center justify-content-md-between'>

        <div className='p-3 container'>

          <h3
            style={{ color: "#1D2351" }}
            className='fw-bold fs-1 text-center text-md-start'>
            Transformamos <br />
            el Contact Center en
          </h3>

          <CarouselSection />

          <div className='mt-5 d-flex flex-column flex-md-row'>
            <CTA text={"Quiero una demo"} />
            <CTA text={"Más información"} variant="outline-primary"/>
          </div>

        </div>

        <div className='p-3'>
          <Image src={contactImg} alt='...' height={450} width={450}/>
        </div>

      </div>

    </section>
  )
}

export default ContactCenter
