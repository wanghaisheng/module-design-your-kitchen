import React from 'react'

import { SelectionContent } from 'components/lib/SelectionContent'
import {
  sizeOptions,
  frontOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from 'data'

export const Selections = () => {
  return (
    <>
      <SelectionContent
        title="Size"
        options={sizeOptions} />
      <SelectionContent
        title="Front"
        options={frontOptions} />
      <SelectionContent
        title="Worktops"
        options={worktopOptions} />
      <SelectionContent
        title="Handles"
        options={handleOptions} />
      <SelectionContent
        title="Taps"
        options={tapsOptions} />
    </>
  )
}