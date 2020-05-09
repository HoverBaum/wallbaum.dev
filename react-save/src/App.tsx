/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import TopSection from './sections/TopSection'
import Projects from './sections/Projects'

function App() {
  return (
    <main>
      <Global
        styles={css`
          :root {
            --wd-color-primary: #ff7e00;
            --wd-gradient-colors: rgba(255, 126, 0, 1) 0%,
              rgba(255, 69, 0, 1) 100%;
          }

          html {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 1.65;
            color: #333;
          }

          body {
            padding: 0;
            margin: 0;
          }

          /* Font Scaling inspired by: https://type-scale.com/?size=18&scale=1.250&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=300&bodyfont=Poppins&bodyfontweight=400&lineheight=1.65&backgroundcolor=white&fontcolor=%23333&preview=false */
          p {
            margin-bottom: 1.15rem;
            max-width: 50rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 2.75rem 0 1.05rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            line-height: 1.15;
          }

          h1 {
            margin-top: 0;
            font-size: 3.052em;
          }

          h2 {
            font-size: 2.441em;
          }

          h3 {
            font-size: 1.953em;
          }

          h4 {
            font-size: 1.563em;
          }

          h5 {
            font-size: 1.25em;
          }

          small,
          .text_small {
            font-size: 0.8em;
          }
        `}
      />
      <TopSection />
      <Projects />
    </main>
  )
}

export default App
