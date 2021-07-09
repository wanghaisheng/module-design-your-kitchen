import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { selections } from 'reducers/selections'

export const SelectionsContainer = styled.div`
  position: relative;
  background: #FFFFFF;
  margin: 1rem 0 1rem 0;
`

const SelectionCopy = styled.div`
  background: #FFFFFF;
  margin-left: 1rem;
  font-size: 1rem;
  margin-top: 45vh;

  @media(min-width: 768px) {
    margin-top: 0;
  }

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
  position: absolute;
  top: 0;
  width: 100%;
  height: 40vh;
  object-fit: cover;
  transition: opacity 0.8s ease ;
  -webkit-transition: opacity 0.8s ease;
  -moz-transition: opacity 0.8s ease;
  -o-transition: opacity 0.8s ease;

  @media (min-width: 768px) {
    display: none;
  }
`

const SecondKitchenImage = styled(KitchenImage)`
    transition: opacity 0.8s ease ;
  -webkit-transition: opacity 0.8s ease;
  -moz-transition: opacity 0.8s ease;
  -o-transition: opacity 0.8s ease;
`

const KitchenTypeCopy = styled(SelectionCopy)`
  margin-left: 0;
  h2 {
    text-align: center;
  }
`

export const Selections = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  margin: 2rem 0;

  h4 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0;
  }

  p {
    color: #C2A471;

    &:last-child {
      @media(min-width: 768px){
        display: none;
      }
    }

    span {
      
    }
  }

  div {
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      flex-direction: column;
    }
  }

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
    width: ${({ title }) => (title === 'Size' ? '45%' : '28%')};
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

const ColorSwatch = styled.span`
  display: none;
  margin: 0 auto 1rem;
  background-image: url(${({ colorSwatch }) => (colorSwatch)});
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  @media (min-width: 768px) {
    display: block;
  }
`

export const SelectionContent = ({ title, options }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState('')
  const selectedProducts = useSelector((store) => store.selections.answers) 
  const selectedProduct = selectedProducts.find((product) => product.category === title)
  const backgroundImage = useSelector((store) => store.selections.currentMobileImg)
  const secondBackgroundImage = useSelector((store) => store.selections.secondMobileImg)
  const imageChange = useSelector((store) => store.selections.backgroundImgChange)

  const handleSelection = (item, id) => {
    dispatch(selections.actions.addAnswer({
      name: item.name,
      category: item.category,
      price: item.price
    }))
    dispatch(selections.actions.setBackgroundImage(item.backgroundImage))
    dispatch(selections.actions.setMobileImage(item.backgroundImage))
    dispatch(selections.actions.setImgChange())
    setActive(id)
  }

  return (
    <SelectionsContainer>
      <SecondKitchenImage src={secondBackgroundImage} className={imageChange ? undefined : 'transparent'} />
      <KitchenImage src={backgroundImage !== '' ? backgroundImage : selectedProduct.backgroundImage} className={imageChange ? 'transparent' : undefined} />
      <Fade bottom>
        {title === 'Size' ? 
          <KitchenTypeCopy>
            <h2>{title}</h2>
          </KitchenTypeCopy> :
          <SelectionCopy>
            <h2>{title}</h2>
            <h4>{selectedProduct.name}</h4>
            <p>
              {selectedProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              {selectedProduct.category === 'Handles' ? ' kr/st' : ' kr'}
            </p>
          </SelectionCopy>}
      </Fade>
      <Selections title={title}>
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
                {option.kitchenType &&
                <>
                  <h4>{option.name}</h4>
                  <div>
                    <p>
                      {option.kitchenType}
                    </p>
                    <ColorSwatch colorSwatch={option.colorSwatch} />
                    <p><span>-</span>text</p>
                  </div>
                </>}
              </Button>
            </li>
          </Fade>
        ))}
      </Selections>
    </SelectionsContainer>
  )
}