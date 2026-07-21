import Link from "next/link";
import { posts } from "@/lib/posts";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog",
  description: "Notes on training with data, from the Data Driven Fitness team.",
};

export default function BlogIndex() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Blog</p>
        <h1 className={`heading-display ${styles.h1}`}>Notes on training with data</h1>
        <div className={styles.list}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.row}>
              <span className={styles.date}>{post.date}</span>
              <div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
