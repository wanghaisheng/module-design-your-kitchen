import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { selections } from 'reducers/selections'

const SelectionsContainer = styled.div`
  background: #FFFFFF;
  margin: 1rem 0 1rem 0;
`

const SelectionCopy = styled.div`
  background: #FFFFFF;
  margin-left: 1rem;
  font-size: 1rem;
  h4 {
    margin: 0;
    font-weight: normal;
  }
    
  p {
    color: #B4B4B4;
    margin-top: 0.125rem;

  }

  @media (min-width: 768px) {
    margin-left: 1.25rem;
  }

  @media (min-width: 1200px) {
    margin-left: 1.5rem;
  }

  @media (min-width: 1440px) {
    margin-left: 2.2rem;
  }

  h2 {
    font-weight: 400;
    margin-bottom: 0.8rem;
    color: #C2A471;
  }
`

const KitchenImage = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  @media (min-width: 768px) {
    display: none;
  }
`
const Selections = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  margin: 2rem 0;

  @media (min-width: 768px) {
    padding: 0 1.25rem;
  }

  @media (min-width: 1200px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1440px) {
    padding: 0 2.2rem;
  }

  li {
    box-sizing: border-box;
    overflow: hidden;
    width: 28%;
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
  const selectedProducts = useSelector((store) => store.selections.answers) 
  const selectedProduct = selectedProducts.find((product) => product.category === title)

  const handleSelection = (item, id) => {
    dispatch(selections.actions.addAnswer({
      name: item.name,
      category: item.category,
      price: item.price
    }))
    dispatch(selections.actions.setBackgroundImage(item.backgroundImage))
    setActive(id)
  }

  return (
    <SelectionsContainer>
      <KitchenImage src="https://res.cloudinary.com/dgg9enyjv/images/c_fill,ar_101:65,q_auto:best,w_1800/v1586159544/Marbodal/Gallery/Fager%C3%B6%20Tall/111918_marbodal-fagero-tall-gron-kokso/Temp" />
      <Fade bottom>
        <SelectionCopy>
          <h2>{title}</h2>
          <h4>{selectedProduct.name}</h4>
          <p>
            {selectedProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            {selectedProduct.category === 'Handles' ? ' kr/st' : ' kr'}
          </p>
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
                {/*<h4>{option.name}</h4>
                <p>
                  {option.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  {option.category === 'Handles' ? ' kr/st' : ' kr'}
        </p>*/}
              </Button>
            </li>
          </Fade>
        ))}
      </Selections>
    </SelectionsContainer>
  )
}