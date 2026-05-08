import BlogSearch from "./BlogSearch";
import styles from "./Blog.module.css";
import prisma from "@/lib/prisma";
import { BlogPost } from "@prisma/client";

import { unstable_cache } from "next/cache";

const getCachedPosts = unstable_cache(
  async () => {
    try {
      return await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { date: 'desc' }
      });
    } catch (error) {
      console.error("Database connection error:", error);
      return [];
    }
  },
  ['blog-posts'],
  { revalidate: 300, tags: ['posts'] }
);

const Blog = async () => {
  const posts = await getCachedPosts();

  return (
    <section className={styles.blog}>
      <div className="container">
        <BlogSearch initialPosts={posts} />
      </div>
    </section>
  );
};

export default Blog;
