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
export const Header = () => {
  return (
    <AppHeader>
      <div>logo</div>
      <NavList>
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
      </NavList>
    </AppHeader>
  )
}