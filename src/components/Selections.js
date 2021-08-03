import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { SelectionContent } from 'components/lib/SelectionContent'
import {
  sizeOptions,
  frontOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from 'data'

const Wrapper = styled.div`
  position: relative;
`

const KitchenImage = styled.img`
  position: absolute;
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

export const Selections = () => {
  const imageChange = useSelector((store) => store.selections.backgroundImgChange)
  const kitchenImg = useSelector((store) => store.selections.sizeImg)
  const frontImg = useSelector((store) => store.selections.frontImg)
  const worktopImg = useSelector((store) => store.selections.worktopImg)
  const handlesImg = useSelector((store) => store.selections.handlesImg)
  const tapsImg = useSelector((store) => store.selections.tapsImg)

  return (
    <>
      <Wrapper>
        <SecondKitchenImage src={kitchenImg} className={imageChange ? undefined : 'transparent'} />
        <KitchenImage src={kitchenImg} className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Size"
          options={sizeOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage src={frontImg} className={imageChange ? undefined : 'transparent'} />
        <KitchenImage src={frontImg} className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Front"
          options={frontOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage src={worktopImg} className={imageChange ? undefined : 'transparent'} />
        <KitchenImage src={worktopImg} className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Worktops"
          options={worktopOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage src={handlesImg} className={imageChange ? undefined : 'transparent'} />
        <KitchenImage src={handlesImg} className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Handles"
          options={handleOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage src={tapsImg} className={imageChange ? undefined : 'transparent'} />
        <KitchenImage src={tapsImg} className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Taps"
          options={tapsOptions} />
      </Wrapper>
    </>
  )
}