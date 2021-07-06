import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selections } from 'reducers/selections'

const SelectionsContainer = styled.div`
  width: 100%;
  background: #FFFFFF;
  margin: 0.125rem 0 2rem 2rem;
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

const SelectionCopy = styled.div`
  background: #FFFFFF;
  padding-top: 4rem;

  h2 {
    text-align: center;
  }
`
const Selections = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  padding: 0 0 5rem 0;
  margin: 2rem auto;
  li {
    box-sizing: border-box;
    overflow: hidden;
    width: 33%;
    &:focus, &:hover{ 
      border: 1px solid grey;
      border-radius: 3px;
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

export const SelectionContent = ({ title, options }) => {
  const dispatch = useDispatch()

  const handleSelection = (itemName, itemCategory, itemPrice) => {
    dispatch(selections.actions.addAnswer({
      name: itemName,
      category: itemCategory,
      price: itemPrice
    }))
  }

  return (
    <SelectionsContainer>
      <SelectionCopy>
        <h2>{title}</h2>
      </SelectionCopy>
      <Selections>
        {options.map((option) => (
          <li key={options.id}>
            <Button type="Button" onClick={() => handleSelection(option.name, option.category, option.price)}>
              <img src={option.img} alt="" />
              <h4>{option.name}</h4>
              <p>{option.price} kr</p>
            </Button>
          </li>
        ))}
      </Selections>
    </SelectionsContainer>
  )
}