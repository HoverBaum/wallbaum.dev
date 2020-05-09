/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Wrapper from '../../components/Wrapper'
import Project from './Project'
import useProjects, { ProjectInterface } from './useProjects'

const Projects = () => {
  const projects: ProjectInterface[] = useProjects()

  return (
    <Wrapper>
      <section id="projects">
        <h2>
          Projects{' '}
          <span role="img" aria-label="Muscle Emoji">
            💪
          </span>
        </h2>
        <p>
          The domain wallbaum.dev serves as a parking spot for my projects.
          Everything I build that I want to host somewhere first ends up here.
          Below you find a selection of projects that live under this domain.
          Feel free to explore them and reach out with comments. This is not the
          full list of projects hosted here, so don't worry if you don't see the
          thing I linked you to.
        </p>
        <div
          css={css`
            width: 100%;
            box-sizing: border-box;
            margin-top: 2rem;
            display: grid;
            grid-template-columns: 23% 23% 23% 23%;
            grid-template-rows: auto;
            column-gap: 1.2rem;
            row-gap: 0.5rem;
            @media (max-width: 50rem) {
              grid-template-columns: 45% 45%;
            }
          `}
        >
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </section>
    </Wrapper>
  )
}

export default Projects
