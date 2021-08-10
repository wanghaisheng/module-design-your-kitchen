import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { selections } from 'reducers/selections'
import { SelectionContent } from 'components/DesigningYourKitchen/SelectionContent'
import {
  kitchenTypeOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from 'components/ProductData/data'

const MobileImageWrapper = styled.div`
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
    dispatch(selections.actions.updateMobileImages())
  }, [currentKitchen, dispatch])

  return (
    <>
      <MobileImageWrapper>
        <SecondKitchenImage
          src={secondBackgroundImage}
          className={imageChange ? undefined : 'transparent'} />
        <KitchenImage
          src={backgroundImage}
          className={imageChange ? 'transparent' : undefined} />
        <SelectionContent
          title="Kökstyp"
          products={kitchenTypeOptions} />
      </MobileImageWrapper>
      <MobileImageWrapper>
        <Fade bottom>
          <SecondKitchenImage
            src={worktopImg}
            className={imageChange ? undefined : 'transparent'} />
          <KitchenImage
            src={worktopImg}
            className={imageChange ? 'transparent' : undefined} />
        </Fade>
        <SelectionContent
          title="Bänkskiva"
          products={worktopOptions} />
      </MobileImageWrapper>
      <MobileImageWrapper>
        <Fade bottom>
          <SecondKitchenImage
            src={handlesImg}
            className={imageChange ? undefined : 'transparent'} />
          <KitchenImage
            src={handlesImg}
            className={imageChange ? 'transparent' : undefined} />
        </Fade>
        <SelectionContent
          title="Handtag & knoppar"
          products={handleOptions} />
      </MobileImageWrapper>
      <MobileImageWrapper>
        <Fade bottom>
          <SecondKitchenImage
            src={tapsImg}
            className={imageChange ? undefined : 'transparent'} />
          <KitchenImage
            src={tapsImg}
            className={imageChange ? 'transparent' : undefined} />
        </Fade>
        <SelectionContent
          title="Blandare"
          products={tapsOptions} />
      </MobileImageWrapper>
    </>
  )
}