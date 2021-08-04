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
        <SecondKitchenImage
          src={kitchenImg === '' ? sizeOptions[0].backgroundImageMobile[0] : kitchenImg}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={kitchenImg === '' ? sizeOptions[0].backgroundImageMobile[0] : kitchenImg}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Size"
          products={sizeOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage
          src={frontImg === '' ? frontOptions[0].backgroundImageMobile[0] : frontImg}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={frontImg === '' ? frontOptions[0].backgroundImageMobile[0] : frontImg}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Front"
          products={frontOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage
          src={worktopImg === '' ? worktopOptions[0].backgroundImageMobile[0] : worktopImg}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={worktopImg === '' ? worktopOptions[0].backgroundImageMobile[0] : worktopImg}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Bänkskiva"
          products={worktopOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage
          src={handlesImg === '' ? handleOptions[0].backgroundImageMobile[0] : handlesImg}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={handlesImg === '' ? handleOptions[0].backgroundImageMobile[0] : handlesImg}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Handtag & knoppar"
          products={handleOptions} />
      </Wrapper>
      <Wrapper>
        <SecondKitchenImage
          src={tapsImg === '' ? tapsOptions[0].backgroundImageMobile[0] : tapsImg}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={tapsImg === '' ? tapsOptions[0].backgroundImageMobile[0] : tapsImg}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Blandare"
          products={tapsOptions} />
      </Wrapper>
    </>
  )
}