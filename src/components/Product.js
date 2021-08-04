import React from 'react'
import Fade from 'react-reveal'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 0;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0 6px 3px;
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

export const Product = ({ active, product, handleSelection }) => {
  return (
    <Fade bottom>
      <li
        key={product.id}
        className={active === product.id ? 'active' : undefined}
        active={active}>
        <Button
          type="Button"
          id={product.id}
          className="active"
          onClick={(event) => handleSelection(product, event.target.id)}>
          <img src={product.img} alt="" />
          {product.kitchenType &&
            <>
              <h4>{product.name}</h4>
              <div>
                <p>
                  {product.kitchenType}
                </p>
                <ColorSwatch colorSwatch={product.colorSwatch} />
                <p><span>&#183;</span>{product.color}</p>
              </div>
            </>}
        </Button>
      </li>
    </Fade>
  )
}