import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from '../reducers/selections'

const AppFooter = styled.footer`
  width: 65%;
  background: transparent;
  height: 5rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
`

const Button = styled.button`
  background: #9d8aa8;
  width: 20%;
  color: #FFFFFF;
`

export const Footer = () => {

  return (
    <AppFooter>
      <div>Price: price</div>
    </AppFooter>
  )
}