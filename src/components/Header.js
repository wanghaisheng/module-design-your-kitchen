import React from 'react';
import styled from 'styled-components'

const AppHeader = styled.header`
  width: 100%;
  background: #FFFFFF;
  border-bottom: 2px solid lightgrey;
  height: 5rem;
  position: fixed;
  display: flex;
  align-items: baseline;
`

const NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  width: 60%;
`

const Logo = styled.img`
  width: 6rem;
  padding: 1rem 0 0 1rem;
`
export const Header = () => {
  return (
    <AppHeader>
      <Logo src="https://res.cloudinary.com/dgg9enyjv/image/upload/v1521186960/Marbodal/logo/marbodal-logo-svg.svg" alt="" />
      {/*<NavList>
        <li>
          <a href="#sum">test</a>
        </li>
        <li>
          <a href="#sum">test</a>
        </li>
        <li>
          <a href="#sum">test</a>
        </li>
        <li>
          <a href="#sum">test</a>
        </li>
        <li>
          <a href="#sum">test</a>
        </li>
      </NavList>*/}
    </AppHeader>
  )
}