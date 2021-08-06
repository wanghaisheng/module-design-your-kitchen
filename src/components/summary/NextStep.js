import React from 'react'
import styled from 'styled-components'

const NextStepItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 0.5rem;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 1.2rem;
    cursor: pointer;
    :visited {
      color: inherit;
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    color: rgba(0,0,0, 0.3);
    width: 90%;
    text-align: center;
    margin-top: 0;
  }
`

export const NextStep = ({ url, title, text }) => {
  return (
    <NextStepItem>
      <a href={url}>
        <h4>{title}</h4>
        <p>{text}</p>
      </a>
    </NextStepItem>
  )
}