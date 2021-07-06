import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from '../reducers/selections'

const AppFooter = styled.footer`
  width: 65%;
  background: transparent;
  position: fixed;
  display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //align-items: center;
  color: #FFFFFF;
`

const TotalPrice = styled.div`
  margin: 0 0 5rem 2.5rem;
  height: 7rem;
  p {
    margin: 0;
    font-size: 3rem;
    font-weight: normal;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`

export const Footer = () => {
  const selectedProducts = useSelector((store) => store.selections.answers)

  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  return (
    <AppFooter>
      <TotalPrice>
        <p>Price: {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
        <p>Vad är inkluderat i priset?</p>
      </TotalPrice>
    </AppFooter>
  )
}