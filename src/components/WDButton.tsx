/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FC } from 'react'

const WDButton: FC = (props) => {
  return (
    <button
      css={css`
        background: rgb(255, 126, 0);
        background: linear-gradient(90deg, var(--wd-gradient-colors));

        position: relative;
        display: inline-block;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        transition: box-shadow 0.2s;

        &::-moz-focus-inner {
          border: none;
        }

        /* Hover, Focus */
        &:hover,
        &:focus {
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        }

        /* Active */
        &:active {
          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
            0 8px 10px 1px rgba(0, 0, 0, 0.14),
            0 3px 14px 2px rgba(0, 0, 0, 0.12);
        }

        /* Disabled */
        &:disabled {
          background-color: lightgray;
          color: black;
          box-shadow: none;
          cursor: initial;
        }
      `}
      {...props}
    ></button>
  )
}

export default WDButton
