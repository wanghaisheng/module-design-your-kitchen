import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { selections } from 'reducers/selections'
import { Product } from '../Product'

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
      padding: 0 0.2rem;
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
    margin: 1rem 0;

    /*&:hover {
      border: 1px solid lightgrey;
      border-radius: 0.2rem;
      padding: 0;
    }*/

    img {
      width: 100%;
      min-height: 6rem;
      object-fit: contain;
      padding-top: 0.5rem;
    }
  }
`

export const SelectionContent = ({ title, products }) => {
  const dispatch = useDispatch()
  const selectedProducts = useSelector((store) => store.selections.answers) 
  const selectedProduct = selectedProducts.find((product) => product.category === title)
  const [active, setActive] = useState(selectedProduct.id)
  const [mobileImgChange, setMobileImgChange] = useState(false)
  let handlePrice = 0
  if (selectedProduct.category === 'Handtag & knoppar') {
    handlePrice = selectedProduct.price * 8
  }

  const handleSelection = (item, id) => {
    dispatch(selections.actions.addAnswer({
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.backgroundImageMobile[0]
    }))
    dispatch(selections.actions.setBackgroundImage(item.backgroundImage))
    dispatch(selections.actions.findMobileImg({
      category: item.category,
      images: item.backgroundImageMobile
    }))
    dispatch(selections.actions.setImgChange())
    setActive(id)
    setMobileImgChange(!true)
  }

  return (
    <SelectionsContainer>
      <Fade bottom>
        {title === 'Size' ?
          <KitchenTypeCopy>
            <h2>Välj kök att styla</h2>
          </KitchenTypeCopy> :
          <SelectionCopy>
            <h2>{title}</h2>
            <h4>{selectedProduct.name}</h4>
            <p>
              {selectedProduct.category === 'Handtag & knoppar' ? handlePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : selectedProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              {selectedProduct.category === 'Handtag & knoppar' ? ' kr (8st)' : ' kr'}
            </p>
          </SelectionCopy>}
      </Fade>
      <Selections title={title}>
        {products.map((product) => (
          <Product
            key={product.id}
            active={active}
            product={product}
            handleSelection={handleSelection} />
        ))}
      </Selections>
    </SelectionsContainer>
  )
}