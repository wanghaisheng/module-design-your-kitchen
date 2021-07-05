import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from 'reducers/selections'

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  width: 100%;
  padding-top: 5rem;
`

const SelectionContent = styled.div`
  width: 35%;
  background: #FFFFFF;
  margin: 0.125rem 0 2rem 2rem;
`

const ImageWrapper = styled.div`
  width: 65%;
  height: 100%;
  margin: 0;
`

const Image = styled.div`
  background-image: url('https://res.cloudinary.com/dgg9enyjv/images/c_fill,ar_101:65,q_auto:best,w_1800/v1586159544/Marbodal/Gallery/Fager%C3%B6%20Tall/111918_marbodal-fagero-tall-gron-kokso/Temp');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
`

const SelectionCopy = styled.div`
  position: fixed;
  background: #FFFFFF;
  width: 35%;
  padding-top: 4rem;
`
const Selections = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  padding: 0 0 5rem 0;
  margin-top: 10rem;
  li {
    box-sizing: border-box;
    overflow: hidden;
    width: 33%;
    //height: 15rem;
    &:focus, &:hover{ 
      border: 1px solid grey;
      border-radius: 3px;
      margin: -1px;
    }

    img {
      width: 100%;
    }

    h4{
      text-align: center;
      font-weight: 300;
      font-size: 0.8rem;
      margin: 0;
    }
    
    p {
      opacity: 0.5;
      font-size: 0.8rem;
      margin-top: 0.125rem;
      text-align: center;
    }
  }
`

const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 0;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export const Container = ({ title, paragraph, name, img, options }) => {
  const dispatch = useDispatch()
  const currentAnswer = useSelector((store) => store.selections.currentAnswer)

  const handleSelection = (itemName) => {
    dispatch(selections.actions.setCurrentAnswer(itemName))
    dispatch(selections.actions.setSelectionDone(true))
  }

  return (
    <ContentWrapper>
      <SelectionContent>
        <SelectionCopy>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </SelectionCopy>
        <Selections>
          {options.map((option) => (
            <li>
              <Button type="Button" onClick={() => handleSelection(option.name)}>
                <img src={option.img} alt="" />
                <h4>{option.name}</h4>
                <p>{option.price}</p>
              </Button>
            </li>
          ))}
        </Selections>
      </SelectionContent>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </ContentWrapper>
  )
}
