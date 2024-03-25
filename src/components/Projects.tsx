import Project from "./Project";

import styles from "./Projects.module.css"

const projects = [
  {
    name: "DevMemory",
    img: "images/devmemory.png",
    gitPath: "https://github.com/KiickS2/react-memoria",
  },
  {
    name: "GitHub Finder",
    img: "images/GithubFinder.png",
    gitPath: "https://github.com/KiickS2/github-finder",
  },
  {
    name: "IMC Calculator",
    img: "images/devImc.png",
    gitPath: "https://github.com/KiickS2/react-imc",
  },
  {
    name: "Site E-commerce",
    img: "images/market.png",
    gitPath: "https://github.com/KiickS2/projeto_ecommerce",
  },
];

const Projects = () => {
  return <div className={styles.projects}>
    {projects.map((project) => (
      <Project key={project.name} data={project}/>
    ))}
  </div>;
};

export default Projects;
