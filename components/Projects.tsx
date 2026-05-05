import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";
import prisma from "@/lib/prisma";
import { Project } from "@prisma/client";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = async () => {
  let dbProjects: Project[] = [];
  try {
    dbProjects = await prisma.project.findMany({
      orderBy: { order: 'asc' }
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.grid}>
          {dbProjects.length === 0 ? (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'hsl(var(--muted-foreground))' }}>
              No projects added yet. Add some in the Admin Portal!
            </p>
          ) : (
            dbProjects.map((project, index) => (
              <div key={index} className={`${styles.card} glass`}>
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((t, ti) => (
                      <span key={ti} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {project.github && <a href={project.github} className={styles.linkIcon}><GithubIcon /></a>}
                    {project.demo && <a href={project.demo} className={styles.linkIcon}><ExternalLink size={20} /></a>}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
