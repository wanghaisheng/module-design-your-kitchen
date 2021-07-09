import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from '../../reducers/selections'
import { Selections } from '../Selections'

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5rem;
  justify-content: space-between;
  //height: 100vh;
`

export const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 65%;
    height: 100%;
    margin: 0;
  }
`

export const Image = styled.img`
  width: 65%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: flex-end;
  object-fit: cover;
  transition: opacity 0.8s ease;
  -webkit-transition: opacity 0.8s ease;
  -moz-transition: opacity 0.8s ease;
  -o-transition: opacity 0.8s ease;
`

const ImageChange = styled(Image)`
  transition: opacity 0.8s ease ;
  -webkit-transition: opacity 0.8s ease;
  -moz-transition: opacity 0.8s ease;
  -o-transition: opacity 0.8s ease;
`

const SelectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 5.5rem;
  @media (min-width: 768px) {
    width: 35%;
    padding-bottom: 1rem;
  }
`

const TotalPrice = styled.div`
  position: fixed;
  bottom: 5%;
  left: 5%;
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

const NextButton = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  color: #444444;
  margin: 2rem 0;
  padding: 1.125rem 3.625rem 1.125rem 1.25rem;
  border: 1px solid rgba(164, 159, 158, 0.4);
  border-radius: 0.375rem;
  width: 90%;
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

  @media (min-width: 1200px) {
    align-self: flex-start;
    width: 50%;
    margin-left: 1.5rem;
  }

  @media (min-width: 1440px) {
    margin-left: 2.2rem;
  }
`

export const Container = () => {
  const dispatch = useDispatch()
  const backgroundImage = useSelector((store) => store.selections.currentBackgroundImg)
  const secondBackgroundImage = useSelector((store) => store.selections.secondBackgroundImg)
  const imageChange = useSelector((store) => store.selections.backgroundImgChange)
  const selectedProducts = useSelector((store) => store.selections.answers)
  const totalPrice = selectedProducts.reduce((total, answer) => (total + answer.price), 0)

  const handleGoToNext = () => {
    dispatch(selections.actions.setSelectionsDone(true))
  }

  return (
    <ContentWrapper>
      <ImageWrapper>
        <ImageChange src={secondBackgroundImage} className={imageChange ? undefined : 'transparent'} />
        <Image src={backgroundImage} className={imageChange ? 'transparent' : undefined} />

        <TotalPrice>
          <Price>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</Price>
          <p>Vad är inkluderat i priset?</p>
        </TotalPrice>
      </ImageWrapper>
      <SelectionsWrapper>
        <Selections />
        <NextButton onClick={handleGoToNext}>Nästa</NextButton>
      </SelectionsWrapper>
    </ContentWrapper>
  )
}
