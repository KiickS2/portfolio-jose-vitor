import { ProjectType } from "../types/projectType";

import styles from "./Project.module.css";

const Project = ({ data }: { data: ProjectType }) => {
  return (
    <div className={styles.project}>
      <h3>{data.name}</h3>
      <img src={data.img} alt="DevMemory Image" className={styles.projectImg} />
      <a href={data.gitPath} target="_blank" title="Acessar repositório">
        <img
          src="images/icons8-github-100.png"
          alt="GitHub Icon"
          className={styles.gitLink}
        />
      </a>
    </div>
  );
};

export default Project;
