import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from '../../reducers/selections'
import { Selections } from '../Selections'

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  width: 100%;
  padding-top: 5rem;
`

export const ImageWrapper = styled.div`
  width: 65%;
  height: 100%;
  margin: 0;
`

export const Image = styled.div`
  background-image: url('https://res.cloudinary.com/dgg9enyjv/images/c_fill,ar_101:65,q_auto:best,w_1800/v1586159544/Marbodal/Gallery/Fager%C3%B6%20Tall/111918_marbodal-fagero-tall-gron-kokso/Temp');
  background-repeat: no-repeat;
  background-position: center;
  width: 65%;
  height: 100%;
  position: fixed;
`

const SelectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 60%;
`

const NextButton = styled.button`
  border: none;
  cursor: pointer;
  background: #9d8aa8;
  width: 50%;
  color: #FFFFFF;
`

export const Container = () => {
  const dispatch = useDispatch()
  const answerArray = useSelector((store) => store.selections.answers)
  const nrOfSelections = answerArray.length

  const handleGoToNext = () => {
    dispatch(selections.actions.setSelectionsDone(true))
  }

  return (
    <ContentWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <SelectionsWrapper>
        <Selections />
        <NextButton disabled={answerArray.length > 5} onClick={handleGoToNext}>Next</NextButton>
      </SelectionsWrapper>
    </ContentWrapper>
  )
}


/* <ButtonWrapper>
<span>{nrOfSelections}/5</span>
<NextButton disabled={answerArray.length > 5} onClick={handleGoToNext}>Next</NextButton>
</ButtonWrapper> */