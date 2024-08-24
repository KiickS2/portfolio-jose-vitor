import Projects from "./Projects";
import styles from "./ProjectsArea.module.css"

const ProjectsArea = () => {
  return (
    <div className={styles.projectsArea}>
        <h2>Alguns projetos:</h2>
        <Projects />
    </div>
  )
}

export default ProjectsArea;