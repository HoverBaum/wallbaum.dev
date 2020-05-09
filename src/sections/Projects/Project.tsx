/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ProjectInterface } from './useProjects'

const Project = ({ project }: { project: ProjectInterface }) => {
  return (
    <div
      css={css`
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border-radius: 2px;
        width: 100%;
        margin: 0.5rem;
      `}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        css={css`
          width: 100%;
        `}
      />
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <h4>{project.title}</h4>
      </div>
    </div>
  )
}

export default Project
