"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Briefcase, Mail, Settings, LogOut } from "lucide-react";
import styles from "./AdminSidebar.module.css";

import { signOut } from "@/app/actions/auth";

const AdminSidebar = () => {
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut();
  };

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Blog Posts", href: "/admin/blogs", icon: <FileText size={20} /> },
    { name: "Projects", href: "/admin/projects", icon: <Briefcase size={20} /> },
    { name: "Messages", href: "/admin/messages", icon: <Mail size={20} /> },
  ];

  return (
    <aside className={`${styles.sidebar} glass`}>
      <div className={styles.header}>
        <h2 className="text-gradient">Admin Panel</h2>
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${pathname === item.href ? styles.active : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className={styles.footer}>
        <button onClick={handleSignOut} className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
