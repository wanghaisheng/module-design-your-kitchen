import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { ContentWrapper } from './lib/Container'

const SummaryWrapper = styled(ContentWrapper)`
  flex-direction: column;
  justify-content: flex-start;
`

const Title = styled.h2`
  text-align: center;
`

const SummaryContent = styled.div`
  display: flex;
  justify-content: center;
`

const FinalAnswers = styled.ol`
  list-style-type: none;
  padding: 0;
  li {
    display: flex;
    align-items: baseline;

    h4 {
      font-weight: normal;
      color: rgba(0,0,0, 0.5)
    }
  }
`

const TotalCost = styled.div`

`
const Image = styled.img`
  width: 40%;
  height: 50vh;
  object-fit: cover;
`

const ShareResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Summary = () => {
  const finalAnswers = useSelector((store) => store.selections.answers)

  return (
    <SummaryWrapper>
      <Title>Your design</Title>
      <SummaryContent>
        <Image src="https://res.cloudinary.com/dgg9enyjv/images/c_fill,ar_101:65,q_auto:best,w_1800/v1586159544/Marbodal/Gallery/Fager%C3%B6%20Tall/111918_marbodal-fagero-tall-gron-kokso/Temp" alt="" />
        <FinalAnswers>
          {finalAnswers.map((answer, index) => (
            <li>
              <h4>Category</h4>
              <p>{answer.name}</p>
            </li>
          ))}
          <li>
            <h4>Delivery</h4>
            <p>Less than 2 weeks</p>
          </li>
          <li>
            <TotalCost>
              <p>42340 kr</p>
              <span>513 kr/mån</span>
            </TotalCost>
          </li>
        </FinalAnswers>
      </SummaryContent>
      <ShareResult>
        <h3>Select your preferd way forward</h3>
      </ShareResult>
    </SummaryWrapper>
  )
}