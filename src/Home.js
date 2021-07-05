import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Size } from './components/Size'
import { Front } from './components/Front'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const MainContainer = styled.main`
  width: 100%;
  min-height: 90vh;
`

export const Home = () => {
  const answersArray = useSelector((store) => store.selections.answers)
  const answersArrayLength = answersArray.length
  console.log(answersArrayLength)
  return (
    <>
      <MainContainer>
        <Header />
        {answersArrayLength === 0 &&
        <Size />}
        {answersArrayLength === 1 && 
        <Front />}
        {answersArrayLength === 2 && 
        <Front />}
        {answersArrayLength === 3 && 
        <Front />}
      </MainContainer>
      <Footer />
    </>
  )
}