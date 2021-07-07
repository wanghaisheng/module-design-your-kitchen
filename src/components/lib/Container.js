import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal'
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
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  width: 65%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: flex-end;
`

const SelectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
`

const TotalPrice = styled.div`
  margin: 0 0 5rem 2.5rem;
  height: 7rem;
  color: #FFFFFF;
  p {
    margin: 0;
    font-size: 3rem;
    font-weight: normal;
    &:nth-child(2) {
      font-size: 0.85rem;
      text-decoration: underline;
    }
  }
`

const Price = styled.p`
  opacity: 1;
  transition: opacity 0.2;

`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 80%;

  span {
    padding-left: 3rem; 
  }
`

const NextButton = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  color: #444444;
  margin: 2rem 0;
  padding: 1.125rem 3.625rem 1.125rem 1.25rem;
  border: 1px solid rgba(164, 159, 158, 0.4);
  border-radius: 0.375rem;
  width: 65%;
  font-size: 1rem;
  line-height: 1.25;
  background-image: url("https://res.cloudinary.com/dgg9enyjv/image/upload/v1614242944/Norema/Toniton/icons/right-arrow.svg");
  background-color: white;
  background-repeat: no-repeat;
  background-position: calc(100% - 1.25rem) 50%;
  background-size: 1.375rem 1rem;
  -webkit-transition: background-color 0.325s ease, background-position 0.325s ease, border-color 0.325s ease;
  transition: background-color 0.325s ease, background-position 0.325s ease, border-color 0.325s ease;
  :hover {
    background-position: calc(100% - 0.625rem) 50%;
  }
  :disabled {
    color: rgba(68,68,68, 0.2);
    :hover{
      background-position: calc(100% - 1.25rem) 50%;
    }
  }
`

export const Container = () => {
  const dispatch = useDispatch()
  const backgroundImage = useSelector((store) => store.selections.currentBackgroundImg)
  const selectedProducts = useSelector((store) => store.selections.answers)
  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)
  const selectionsDone = selectedProducts.length

  const handleGoToNext = () => {
    dispatch(selections.actions.setSelectionsDone(true))
  }

  return (
    <ContentWrapper>
      <ImageWrapper>
        <Image backgroundImage={backgroundImage}>
          <TotalPrice>
            <Price>Price: {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</Price>
            <p>Vad är inkluderat i priset?</p>
          </TotalPrice>
        </Image>
      </ImageWrapper>
      <SelectionsWrapper>
        <Selections />
        <ButtonWrapper>
          <span>{selectionsDone}/5</span>
          <NextButton disabled={selectedProducts.length < 5} onClick={handleGoToNext}>Next</NextButton>
        </ButtonWrapper>
      </SelectionsWrapper>
    </ContentWrapper>
  )
}
