import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <h1 className="page-header">About Me</h1>
      <div className={`${styles.content} glass`}>
        <p className={styles.description}>
          I'm a Software Developer and Tech Lead highly experienced in designing, building and delivering highly scalable, 
          secure and performant enterprise level applications on .NET, Java and Angular frameworks. 
          I have worked through the full life-cycle of software development, from system architecture 
          and backend engineering to frontend development, deployment and production support.
        </p>
         <p className={styles.description}>
          My strengths lie in the development of modern, cloud-ready applications on a clean architecture, 
          with focus on well maintainable code, optimization for performance and user experience. 
          I find it challenging and fulfilling to tackle complex technical problems and translate business 
          requirements into robust, efficiently scalable software solutions.
        </p>
         <p className={styles.description}>
          As Tech Lead, I have successfully led cross-functional teams throughout planning, architecture, 
          development, code review and delivery stages. I value engineering excellence, teamwork, 
          mentoring engineers, and fostering a culture of continuous improvement.
        </p>
        <p className={styles.description}>
          Apart from coding, I'm eager to automate build processes and deployment, increase system performance, 
          and adopt new technologies that drive progress in FinTech.
        </p>
        <p className={styles.description}>
          I am eager to contribute on ambitious projects, lead engineering efforts and build impactful technology solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
