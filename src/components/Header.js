import React from 'react';
import styled from 'styled-components'

const AppHeader = styled.header`
  width: 100%;
  background: #FFFFFF;
  border-bottom: 2px solid grey;
  height: 5rem;
  position: fixed;
`

export const Header = () => {
  return (
    <AppHeader>
      <div>header</div>
    </AppHeader>
  )
}