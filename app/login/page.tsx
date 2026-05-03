"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./Login.module.css";
import { login } from "@/app/actions/auth";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
    }
    setLoading(false);
  }

  return (
    <div className={styles.loginPage}>
      <Navbar />
      
      <div className={`${styles.card} glass`}>
        <div className={styles.header}>
          <h1>Admin Login</h1>
        </div>

        <form action={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="email@example.com" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input name="password" type="password" placeholder="••••••••" required />
          </div>

          {error && <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.85rem', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className={styles.footer}>
          <Link href="/" className={styles.backLink}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
