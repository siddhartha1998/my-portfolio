import { Metadata } from "next";
import AdminSidebar from "@/components/AdminSidebar";
import styles from "./AdminLayout.module.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <main className={styles.content}>
        <div className={styles.inner}>
          {children}
        </div>
      </main>
    </div>
  );
}
