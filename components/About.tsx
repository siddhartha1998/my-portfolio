import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <h1 className="page-header">About Me</h1>
      <div className={`${styles.content} glass`}>
        <p className={styles.description}>
          Software developer and tech lead specializing in .NET, Java, and Angular, 
          with a focus on building scalable, high-performance applications. 
          I lead teams through architecture, development, and delivery while 
          promoting clean code, best practices, and effective collaboration.
        </p>
      </div>
    </section>
  );
};

export default About;
