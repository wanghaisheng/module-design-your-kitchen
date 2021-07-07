import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { selections } from 'reducers/selections'

const SelectionsContainer = styled.div`
  background: #FFFFFF;
  margin: 1rem 0 1rem 2rem;
`

const SelectionCopy = styled.div`
  background: #FFFFFF;

  h2 {
    text-align: center;
    font-weight: 400; 
  }
`
const Selections = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  padding: 0;
  margin: 2rem auto;
  li {
    box-sizing: border-box;
    overflow: hidden;
    width: 33%;
    transform: border padding .5s;
    padding: 1px;

    &:hover {
      border: 1px solid lightgrey;
      border-radius: 0.2rem;
      padding: 0;
    }

    img {
      width: 100%;
      min-height: 6rem;
      object-fit: contain;
      padding-top: 0.5rem;
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
  const [active, setActive] = useState('')

  const handleSelection = (item, id) => {
    dispatch(selections.actions.addAnswer({
      name: item.name,
      category: item.category,
      price: item.price
    }))
    /*dispatch(selections.actions.setBackgroundImage(item.url))*/
    setActive(id)
  }

  return (
    <SelectionsContainer>
      <Fade bottom>
        <SelectionCopy>
          <h2>{title}</h2>
        </SelectionCopy>
      </Fade>
      <Selections>
        {options.map((option) => (
          <Fade bottom>
            <li
              key={option.id}
              className={active === option.id ? 'active' : undefined}
              active={active}>
              <Button
                type="Button"
                id={option.id}
                className="active"
                onClick={(event) => handleSelection(option, event.target.id)}>
                <img src={option.img} alt="" />
                <h4>{option.name}</h4>
                <p>
                  {option.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  {option.category === 'Handles' ? ' kr/st' : ' kr'}
                </p>
              </Button>
            </li>
          </Fade>
        ))}
      </Selections>
    </SelectionsContainer>
  )
}