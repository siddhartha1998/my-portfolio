"use client";

import styles from "./SkillsMarquee.module.css";
import {
  Code2,
  Terminal,
  Database,
  Layers,
  Cpu,
  GitBranch,
  Container,
  Workflow
} from "lucide-react";

const skills = [
  { name: ".NET CORE", icon: <Code2 size={20} /> },
  { name: "JAVA SPRING BOOT", icon: <Layers size={20} /> },
  { name: "ANGULAR", icon: <Cpu size={20} /> },
  { name: "TYPESCRIPT", icon: <Terminal size={20} /> },
  { name: "POSTGRESQL", icon: <Database size={20} /> },
  { name: "MSSQL SERVER", icon: <Database size={20} /> },
  { name: "DOCKER", icon: <Container size={20} /> },
  { name: "GIT", icon: <GitBranch size={20} /> },
  { name: "MICROSERVICES", icon: <Workflow size={20} /> },
];

const SkillsMarquee = () => {
  // Duplicate skills to create a seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.fadeLeft}></div>
      <div className={styles.marqueeContent}>
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.name}>{skill.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.fadeRight}></div>
    </div>
  );
};

export default SkillsMarquee;
