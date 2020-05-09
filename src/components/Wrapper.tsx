/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FC } from 'react'

const Wrapper: FC = ({ children }) => (
  <div
    css={css`
      max-width: 80rem;
      margin: 0 auto;
      height: 100%;
    `}
  >
    {children}
  </div>
)

export default Wrapper
