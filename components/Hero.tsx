"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";
import SkillsMarquee from "./SkillsMarquee";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <span className={styles.badge}>Available for new opportunities</span>
          <h1 className={styles.title}>
            Siddhiganesh Joshi
          </h1>
          <h2 className={`${styles.subtitle} text-gradient`}>
            Software Engineer | Tech Lead
          </h2>
          <p className={styles.description}>
            Specializing in .NET, Java, and Angular to build scalable, high-performance applications. 
            I lead teams through robust architecture and clean code.
          </p>
          
          <SkillsMarquee />

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryBtn}>View Projects</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Get in Touch</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
