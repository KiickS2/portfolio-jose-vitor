import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.info}>
      <div className={styles.meImg}>
        <img src="eu.jpg" alt="José Vitor" />
      </div>
      <div className={styles.about}>
        <h1>José Vitor Marques</h1>
        <h3>React Developer</h3>
        <p>
          Desenvolvedor Júnior e graduando em Análise e Desenvolvimento de
          Sistemas pela Universidade Cruzeiro do Sul. Experiência em
          desenvolvimento Front-End, focado em trazer a melhor experiência para
          o usuário. Além disso, possuo conhecimentos em análise e visualização de
          dados para otimização de sistemas. Firmo comprometimento em fornecer
          soluções eficientes e inovadoras.
        </p>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-vitor-marques-8a007a24b/"
            target="_blank"
            title="Visitar Linkedin"
          >
            <img
              src="images/icons8-linkedin-96.png"
              alt="Linkedin Icon"
            />
          </a>
          <a href="https://github.com/kiicks2" target="_blank" title="Visitar GitHub">
            <img
              src="images/github-mark-white.png"
              alt="Github Icon"
              className={styles.github}
            />
          </a>
          <a
            href="./documents/Marques_de_Deus_Currículo_v2.pdf"
            download="José Vitor Marques - Currículo"
            title="Download do currículo"
          >
            <img
              src="images/icons8-document-96.png"
              alt="Document Icon"
              className={styles.document}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
