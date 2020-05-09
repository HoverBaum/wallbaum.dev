/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import WDButton from '../components/WDButton'
import Wrapper from '../components/Wrapper'

const TopSection = () => {
  return (
    <div
      css={css`
        background-color: #eee;
        height: 80vh;
      `}
    >
      <Wrapper>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 100%;
            max-width: 80rem;
            margin: 0 auto;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-content: center;
              align-items: center;
            `}
          >
            <div>
              <h1
                css={css`
                  margin: 0;
                `}
              >
                Wallbaum.
                <span role="img" aria-label="Coding Emoji">
                  👨🏼‍💻
                </span>
              </h1>
              <h2
                css={css`
                  margin-top: 0;
                `}
              >
                Where Hendrik hosts his projects.
              </h2>

              <WDButton
                css={css`
                  margin-top: 2rem;
                `}
              >
                Explore projects
              </WDButton>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-content: center;
              align-items: center;
            `}
          >
            <img
              css={css`
                max-width: 80%;
                max-height: 80%;
              `}
              alt="Portrait of Hendrik Wallbaum"
              src="/portrait-free.png"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default TopSection
