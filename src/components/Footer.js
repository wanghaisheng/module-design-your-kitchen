import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from '../reducers/selections'

const AppFooter = styled.footer`
  width: 100%;
  background: transparent;
  position: fixed;
  display: flex;
  background: #C2A471;
  color: #FFFFFF;
  bottom: 0;
  height: 4rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (min-width: 768px) {
    display: none;
  }
`

const TotalPrice = styled.div`
  margin: 1.2rem;
  p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
  }
`

export const Footer = () => {
  const selectedProducts = useSelector((store) => store.selections.answers)

  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  return (
    <AppFooter>
      <TotalPrice>
        <p>Pris: {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
      </TotalPrice>
    </AppFooter>
  )
}