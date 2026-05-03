"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { sendContactMessage } from "@/app/actions/contact";

const Contact = () => {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await sendContactMessage(formData);

    if (result.success) {
      setMessage("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage("Failed to send message. Please try again.");
    }
    setPending(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.content}>
          <div className={`${styles.formWrapper} glass`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" disabled={pending} className={styles.submitBtn}>
                {pending ? "Sending..." : "Send Message"}
              </button>
              {message && <p className={styles.success}>{message}</p>}
            </form>
          </div>
          <div className={styles.info}>
            <h3>Contact Information</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className={styles.details}>
              <div>
                <span>Email</span>
                <p>er.siddhartha1998@gmail.com</p>
              </div>
              <div>
                <span>LinkedIn</span>
                <p>siddhiganesh-joshi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
