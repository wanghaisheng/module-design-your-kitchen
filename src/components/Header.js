import React, { useRef } from 'react';
import styled from 'styled-components'

const AppHeader = styled.header`
  width: 100%;
  background: #FFFFFF;
  height: 5rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`

/*const NavList = styled.ol`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  color: rgba(0,0,0, 0.3);
  button {
    text-decoration: none;
    color: rgba(0,0,0, 0.3);
    transform: text-decoration 0.5 ease;
    :hover {
      text-decoration: underline;
    }
  }
`*/

const MarbodalLogo = styled.img`
  width: 6rem;
  padding: 1rem 0 0 1rem;
  cursor: pointer;
`

const CloseLogo = styled.img`
  width: 1.5rem;
  padding: 0 1rem 0 0;
  cursor: pointer;
`
export const Header = () => {
  return (
    <AppHeader>
      <MarbodalLogo src="https://res.cloudinary.com/dgg9enyjv/image/upload/v1521186960/Marbodal/logo/marbodal-logo-svg.svg" alt="" />
      {/*<NavList>
        <li>
          <button type="button" onClick={goToSection}>Size</button>
        </li>
        <li>
          <button type="button">Front & Color</button>
        </li>
        <li>
          <button type="button">Worktop</button>
        </li>
        <li>
          <button type="button">Handles</button>
        </li>
        <li>
          <button type="button">Tap & Sink</button>
        </li>
      </NavList>*/}
      <CloseLogo src="https://res.cloudinary.com/dgg9enyjv/image/upload/v1621771569/Marbodal/Nordic%20Nature/Assets/close-dark.svg" alt="" />
    </AppHeader>
  )
}