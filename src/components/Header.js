import React from 'react'
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

const MarbodalLogo = styled.img`
  width: 6rem;
  padding: 1rem 0 0 1rem;
`

const CloseLogo = styled.img`
  width: 2.2rem;
  padding: 0 1rem 0 0;
`
export const Header = () => {
  return (
    <AppHeader>
      <a href="https://www.marbodal.se/" rel="noopener noreferrer">
        <MarbodalLogo src="https://res.cloudinary.com/dgg9enyjv/image/upload/v1521186960/Marbodal/logo/marbodal-logo-svg.svg" alt="" />
      </a>
      <a href="https://www.marbodal.se/" rel="noopener noreferrer">
        <CloseLogo src="https://res.cloudinary.com/dgg9enyjv/image/upload/v1621771569/Marbodal/Nordic%20Nature/Assets/close-dark.svg" alt="" />
      </a>
    </AppHeader>
  )
}