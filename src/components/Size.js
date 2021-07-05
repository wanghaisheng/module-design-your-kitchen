import React from 'react';

import { Container } from 'components/lib/Container'

export const Size = () => {
  const sizeOptions = [
    {
      name: 'Small',
      img: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625479086/Ska%CC%88rmavbild_2021-07-05_kl._11.56.28_cfe09i.png',
      price: 10000
    },
    {
      name: 'Medium',
      img: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625479086/Ska%CC%88rmavbild_2021-07-05_kl._11.56.36_ktkye7.png',
      price: 20000
    },
    {
      name: 'Large',
      img: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625479086/Ska%CC%88rmavbild_2021-07-05_kl._11.56.42_rqowig.png',
      price: 30000
    }
  ]
  return (
    <Container 
      title="Size" 
      paragraph="Please select the size of your kitchen"
      options={sizeOptions} />
  )
}