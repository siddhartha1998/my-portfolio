"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} glass`}>
      <div className={styles.links}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
          >
            {link.name}
            {pathname === link.href && <span className={styles.underline} />}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
