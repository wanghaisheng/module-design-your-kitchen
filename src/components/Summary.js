import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { NextStep } from './lib/NextStep'

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  width: 100%;
  padding-top: 7rem;

  h2, h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  h2 {
    width: 100%;
    margin-left: 1rem;
  }
`

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

const FinalAnswers = styled.ol`
  list-style-type: none;
  padding: 2rem 0 0 2.5rem;
  margin-top: 0;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 0 0 2.5rem;
  }

  li {
    display: flex;
    align-items: baseline;
    h4 {
      font-weight: normal;
      color: rgba(0,0,0, 0.3);
    }
    h4, p {
      margin: 0 0 0.9rem 0;
      width: 50%;
      white-space: nowrap;
    }
  }
`

const TotalCost = styled.div`
  margin: 1.5rem 0 0 0;
  p {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }
  span {
    color: rgba(0,0,0, 0.3);
  }
`
const Image = styled.img`
  min-height: 50vh;
  width: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 60vh;
    width: 60%;
  }
`

const ShareResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 0 0;
  padding: 0 1rem 5.5em 1rem;

  @media (min-width: 768px) {
    margin: 3rem 0 0 0;
  }

  h3 {
    margin-bottom: 0;
    text-align: center;
  }
`

const NextStepContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Summary = () => {
  const imageChange = useSelector((store) => store.selections.backgroundImgChange)
  const currentImage = useSelector((store) => store.selections.currentBackgroundImg)
  const secondBackgroundImage = useSelector((store) => store.selections.secondBackgroundImage)
  const selectedProducts = useSelector((store) => store.selections.answers)
  console.log(currentImage, secondBackgroundImage, imageChange)
  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  const monthlyPayment = totalPrice / 36

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <SummaryWrapper>
      <Fade bottom>
        <SummaryContent>
          <Image src={imageChange ? currentImage : secondBackgroundImage} alt="" />
          <FinalAnswers>
            {selectedProducts.map((product) => (
              <li key={product.name}>
                <h4>{product.category}</h4>
                <p>{product.name}</p>
              </li>
            ))}
            <li>
              <h4>Delivery</h4>
              <p>Less than 2 weeks</p>
            </li>
            <li>
              <TotalCost>
                <p>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
                <span>{Math.ceil(monthlyPayment)} kr/mån</span>
              </TotalCost>
            </li>
          </FinalAnswers>
        </SummaryContent>
      </Fade>
      <Fade bottom>
        <ShareResult>
          <h3>Select your preferd way forward</h3>
          <p>It&apos;s all for free!</p>
          <NextStepContainer>
            <NextStep title="Get a free 3D drawing" text="A kitchen designer will create a drawing and send it to you" />
            <NextStep title="Continue in 3D tool" text="Be creative on your own, draw doors, windows and plumbing" />
            <NextStep
              url="https://www.marbodal.se/boka-mote/" 
              title="Book an online meeting"
              text="Get help from a kitchen expert to finalize your kitchen design" />
          </NextStepContainer>
        </ShareResult>
      </Fade>
    </SummaryWrapper>
  )
}