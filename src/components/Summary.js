import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { ShareResult } from './ShareResult'

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

export const Summary = () => {
  const kitchenResultImg = useSelector((store) => store.selections.activeDesktopImg)
  const mobileResultImg = useSelector((store) => store.selections.activeMobileImg)
  const selectedProducts = useSelector((store) => store.selections.answers)
  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  const monthlyPayment = totalPrice / 36

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <SummaryWrapper>
      <Fade bottom>
        <SummaryContent>
          <Image src={mobileResultImg === '' ? kitchenResultImg : mobileResultImg} alt="" />
          <FinalAnswers>
            {selectedProducts.map((product) => (
              <li key={product.name}>
                <h4>{product.category}</h4>
                <p>{product.name}</p>
              </li>
            ))}
            <li>
              <TotalCost>
                <p>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
                <span>{Math.ceil(monthlyPayment).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr/mån</span>
              </TotalCost>
            </li>
          </FinalAnswers>
        </SummaryContent>
      </Fade>
      <Fade bottom>
        <ShareResult />
      </Fade>
    </SummaryWrapper>
  )
}