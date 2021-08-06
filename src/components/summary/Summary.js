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
  max-width: 1600px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 1rem;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  @media (min-width: 768px) {
    width: 55%;
  }
`

const FinalAnswers = styled.ol`
  width: 100%;
  list-style-type: none;
  padding: 55vh 1.5rem 0;
  margin-top: 0;

  @media (min-width: 768px) {
    padding: 2rem 0 0 2.5rem;
    width: 45%;
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
  position: absolute;
  top: 0;
  left: 0;
  height: 50vh;
  width: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 60vh;
  }
`

export const Summary = () => {
  const kitchenResultImg = useSelector((store) => store.selections.activeDesktopImg)
  const mobileResultImg = useSelector((store) => store.selections.activeMobileImg)
  const worktopLayer = useSelector((store) => store.selections.worktopLayer)
  const tapLayer = useSelector((store) => store.selections.tapLayer)
  const selectedProducts = useSelector((store) => store.selections.answers)
  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  const monthlyPayment = totalPrice / 36

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Fade bottom>
      <SummaryWrapper>
        <SummaryContent>
          <ImageWrapper>
            <Image src={mobileResultImg === '' ? kitchenResultImg : mobileResultImg} alt="" />
            <Image src={kitchenResultImg} alt="" />
            <Image src={worktopLayer} alt="" />
            <Image src={tapLayer} alt="" />
          </ImageWrapper>
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
        <Fade bottom>
          <ShareResult />
        </Fade>
      </SummaryWrapper>
    </Fade>
  )
}