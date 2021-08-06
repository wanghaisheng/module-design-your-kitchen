import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { selections } from 'reducers/selections'
import { SelectionContent } from 'components/designYourKitchen/SelectionContent'
import {
  kitchenTypeOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from 'components/data/data'

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
  const dispatch = useDispatch()
  const currentKitchen = useSelector((store) => store.selections.kitchenType.name)
  const backgroundImage = useSelector((store) => store.selections.currentBackgroundImg)
  const secondBackgroundImage = useSelector((store) => store.selections.secondBackgroundImg)
  const imageChange = useSelector((store) => store.selections.backgroundImgChange)
  const worktopImg = useSelector((store) => store.selections.worktopImg)
  const handlesImg = useSelector((store) => store.selections.handlesImg)
  const tapsImg = useSelector((store) => store.selections.tapsImg)

  useEffect(() => {
    dispatch(selections.actions.updateImages())
  }, [currentKitchen])

  return (
    <>
      <Wrapper>
        <SecondKitchenImage
          src={secondBackgroundImage}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={backgroundImage}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Kökstyp"
          products={kitchenTypeOptions} />
      </Wrapper>
      <Wrapper>
        <Fade bottom>
          <SecondKitchenImage
            src={worktopImg === '' ? worktopOptions[0].backgroundImagesMobile[0] : worktopImg}
            className={imageChange ? undefined : 'transparent'} />
          <KitchenImage
            src={worktopImg === '' ? worktopOptions[0].backgroundImagesMobile[0] : worktopImg}
            className={imageChange ? 'transparent' : undefined} />
        </Fade>
        <SelectionContent
          title="Bänkskiva"
          products={worktopOptions} />
      </Wrapper>
      <Wrapper>
        <Fade bottom>
          <SecondKitchenImage
            src={handlesImg === '' ? handleOptions[0].backgroundImagesMobile[0] : handlesImg}
            className={imageChange ? undefined : 'transparent'} />
          <KitchenImage
            src={handlesImg === '' ? handleOptions[0].backgroundImagesMobile[0] : handlesImg}
            className={imageChange ? 'transparent' : undefined} />
        </Fade>
        <SelectionContent
          title="Handtag & knoppar"
          products={handleOptions} />
      </Wrapper>
      <Wrapper>
        <Fade bottom>
          <SecondKitchenImage
            src={tapsImg === '' ? tapsOptions[0].backgroundImagesMobile[0] : tapsImg}
            className={imageChange ? undefined : 'transparent'} />
          <KitchenImage
            src={tapsImg === '' ? tapsOptions[0].backgroundImagesMobile[0] : tapsImg}
            className={imageChange ? 'transparent' : undefined} />
        </Fade>
        <SelectionContent
          title="Blandare"
          products={tapsOptions} />
      </Wrapper>
    </>
  )
}