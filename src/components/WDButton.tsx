/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FC } from 'react'
import Button from '@material-ui/core/Button'

const WDButton: FC = (props) => {
  return (
    <Button
      css={css`
        background-color: #8ec5fc;
        background-image: linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%);
        color: white;
      `}
      {...props}
    ></Button>
  )
}

export default WDButton
