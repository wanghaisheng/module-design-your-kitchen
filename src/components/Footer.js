import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from '../reducers/selections'

const AppFooter = styled.footer`
  width: 100%;
  background: #FFFFFF;
  border-top: 2px solid grey;
  height: 5rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  background: #9d8aa8;
  width: 20%;
  color: #FFFFFF;
`

export const Footer = () => {
  const dispatch = useDispatch()
  const answer = useSelector((store) => store.selections.currentAnswer)
  const selectionDone = useSelector((store) => store.selections.selectionDone)
  console.log('current', answer)

  const handleGoToNext = () => {
    dispatch(selections.actions.addAnswer(answer))
    dispatch(selections.actions.setPageShown('front'))
    dispatch(selections.actions.setSelectionDone(false))
    dispatch(selections.actions.setCurrentAnswer(''))
  }

  return (
    <AppFooter>
      <div>Delivery: date</div>
      <div>Price: price</div>
      <Button type="submit" disabled={!selectionDone} onClick={handleGoToNext}>Next</Button>
    </AppFooter>
  )
}