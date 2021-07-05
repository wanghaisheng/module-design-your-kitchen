import React from 'react'

import { Container } from 'components/lib/Container'

export const Front = () => {
  const frontOptions = [
    {
      name: 'Shaker',
      img: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625479904/Ska%CC%88rmavbild_2021-07-05_kl._12.10.38_s2boxf.png',
      price: 5944
    },
    {
      name: 'Handleless',
      img: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625479904/Ska%CC%88rmavbild_2021-07-05_kl._12.10.45_a1bm3y.png',
      price: 6.513
    },
    {
      name: 'Slab',
      img: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625479904/Ska%CC%88rmavbild_2021-07-05_kl._12.10.57_iqbokn.png',
      price: 5.754
    }
  ]

  return (
    <Container
      title="Front and color" 
      paragraph="Please select the lorem ipsum"
      options={frontOptions} />
  )
}