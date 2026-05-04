"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import styles from "./Blog.module.css";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string | Date;
}

export default function BlogSearch({ initialPosts }: { initialPosts: Post[] }) {
  const [search, setSearch] = useState("");

  const filteredPosts = initialPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.blogContentWrapper}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>Thoughts on system design, architecture, and leadership.</p>
        </div>
        <div className={styles.headerRight}>
          <div className={`${styles.searchBar} glass`}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search posts or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className={`${styles.postCard} glass`}>
              <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>Read More →</span>
            </Link>
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
