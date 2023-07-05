import React from 'react'
import Button from 'react-bootstrap/Button';

const CTA = ({text, variant}) => {
  return (
    <Button className="m-3 px-md-3 px-1" variant={variant}>  
      {text}
    </Button>
  )
}

export default CTA
