import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Container } from './components/lib/Container'
import { Summary } from './components/Summary'
import { Header } from './components/Header'

const MainContainer = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
`

export const Home = () => {
  const selectionsDone = useSelector((store) => store.selections.selectionsDone)

  return (
    <>
      <MainContainer>
        <Header />
        {!selectionsDone
          ? <Container />
          : <Summary />}
      </MainContainer>
    </>
  )
}