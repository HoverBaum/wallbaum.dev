/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import TopSection from './sections/TopSection'
import Projects from './sections/Projects'

function App() {
  return (
    <main>
      <Global
        styles={css`
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
