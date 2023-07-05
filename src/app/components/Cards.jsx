import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cards = ({card}) => {
  return (
    <div className="card p-3 mx-md-3 my-3 mx-auto" style={{width: "20rem"}}>
      <Image src={card.img} className="card-img-top" alt="..." width={150} height={150}/>
        <div className="card-body d-flex flex-column justify-content-between">
          <h4 className='text-center text-md-start'>{card.title}</h4>
          <p className="card-text text-center text-md-start">{card.text}</p>
          <Link 
            href={card.link}
            className='text-primary text-decoration-none text-center text-lg-start'>
              {card.linkText}
          </Link>
        </div>
    </div>
  )
}

export default Cards
