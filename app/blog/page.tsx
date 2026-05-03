import Navbar from "@/components/Navbar";
import BlogSearch from "@/components/BlogSearch";
import styles from "./Blog.module.css";
import prisma from "@/lib/prisma";

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { date: 'desc' }
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }

  return (
    <>
      <Navbar />
      <section className={styles.blog}>
        <div className="container">
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Blog</h1>
              <p className={styles.subtitle}>Thoughts on system design, architecture, and leadership.</p>
            </div>
            <div className={styles.searchContainer}>
              <BlogSearch initialPosts={posts} />
            </div>
          </header>
        </div>
      </section>
      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ color: 'hsl(var(--muted-foreground))' }}>
            &copy; {new Date().getFullYear()} Siddhiganesh Joshi.
          </p>
        </div>
      </footer>
    </>
  );
}
