import BlogSearch from "./BlogSearch";
import styles from "./Blog.module.css";
import prisma from "@/lib/prisma";

const Blog = async () => {
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
    <section className={styles.blog}>
      <div className="container">
        <BlogSearch initialPosts={posts} />
      </div>
    </section>
  );
};

export default Blog;
