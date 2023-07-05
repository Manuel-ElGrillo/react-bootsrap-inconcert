"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/Carousel.module.css"


const CarouselSection = () => {
  return (
    <div>

      <Carousel controls={false} indicators={false}>
        <Carousel.Item >

          <div className='d-flex'>
            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className={"p-2 p-md-4 rounded mx-1"}
              src="/img/ic-site-carrousel-3@2x.png"
              alt="First slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-2 p-md-4 rounded mx-1"
              src="/img/ic-site-carrousel-2@2x.png"
              alt="Second slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-2 p-md-4 rounded mx-1"
              src="/img/ic-site-carrousel-1@2x.png"
              alt="Third slide"
            />
          </div>

          <div className='d-flex my-2'>
            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-2 p-md-4 rounded mx-1"
              src="/img/ic-site-carrousel-3@2x.png"
              alt="First slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-2 p-md-4 rounded mx-1"
              src="/img/ic-site-carrousel-2@2x.png"
              alt="Second slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-2 p-md-4 rounded mx-1"
              src="/img/ic-site-carrousel-1@2x.png"
              alt="Third slide"
            />
          </div>
        
        </Carousel.Item>
        <Carousel.Item>

        <div className='d-flex my-2'>
            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-4 rounded mx-1"
              src="/img/ic-site-carrousel-3@2x.png"
              alt="First slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-4 rounded mx-1"
              src="/img/ic-site-carrousel-2@2x.png"
              alt="Second slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-4 rounded mx-1"
              src="/img/ic-site-carrousel-1@2x.png"
              alt="Third slide"
            />
          </div>

        <div className='d-flex'>
            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className=" p-4 rounded mx-1"
              src="/img/ic-site-carrousel-3@2x.png"
              alt="First slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-4 rounded mx-1"
              src="/img/ic-site-carrousel-2@2x.png"
              alt="Second slide"
            />

            <img
              style={{ backgroundColor: "#E9E9E9", height: "70px", width: "170px" }}
              className="p-4 rounded mx-1"
              src="/img/ic-site-carrousel-1@2x.png"
              alt="Third slide"
            />
          </div>

        </Carousel.Item>
        
      </Carousel>

    </div>
  )
}

export default CarouselSection
