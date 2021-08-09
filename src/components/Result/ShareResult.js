import React from 'react'
import styled from 'styled-components'

import { NextStep } from './NextStep'

const ShareResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 0 0;
  padding: 0 1rem 5.5em 1rem;

  @media (min-width: 768px) {
    margin: 3rem 0 0 0;
    padding: 30vh 1rem 5.5rem 1rem;
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

export const ShareResult = () => {
  return (
    <ShareResultContent>
      <h3>Select your preferd way forward</h3>
      <p>It&apos;s all for free!</p>
      <NextStepContainer>
        <NextStep
          title="Get a free 3D drawing"
          text="A kitchen designer will create a drawing and send it to you" />
        <NextStep
          title="Continue in 3D tool"
          text="Be creative on your own, draw doors, windows and plumbing" />
        <NextStep
          url="https://www.marbodal.se/boka-mote/"
          title="Book an online meeting"
          text="Get help from a kitchen expert to finalize your kitchen design" />
      </NextStepContainer>
    </ShareResultContent>
  )
}