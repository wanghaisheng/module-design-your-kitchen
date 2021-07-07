import React from 'react'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { NextStep } from './lib/NextStep'

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  width: 80%;
  padding-top: 7rem;

  h2, h3 {
  font-size: 2rem;
  font-weight: 400;
}
`

const SummaryContent = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
`

const FinalAnswers = styled.ol`
  list-style-type: none;
  padding: 2rem 0 0 2.5rem;
  margin-top: 0;
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
  width: 60%;
  min-height: 50vh;
  object-fit: cover;
`

const ShareResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0 0 0;
  h3 {
    margin-bottom: 0;
  }
`

const NextStepContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`

export const Summary = () => {
  const selectedProducts = useSelector((store) => store.selections.answers)

  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  const monthlyPayment = totalPrice / 36

  return (
    <SummaryWrapper>
      <Fade bottom>
        <SummaryContent>
          <Image src="https://res.cloudinary.com/dgg9enyjv/images/c_fill,ar_101:65,q_auto:best,w_1800/v1586159544/Marbodal/Gallery/Fager%C3%B6%20Tall/111918_marbodal-fagero-tall-gron-kokso/Temp" alt="" />
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
            <NextStep title="Book an online meeting" text="Get help from a kitchen expert to finalize your kitchen design" />
          </NextStepContainer>
        </ShareResult>
      </Fade>
    </SummaryWrapper>
  )
}