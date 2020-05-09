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
          }
          h1 {
            font-weight: 300;
            font-size: 3rem;
          }
          h2 {
            font-weight: 300;
          }
        `}
      />
      <TopSection />
      <Projects />
    </main>
  )
}

export default App
