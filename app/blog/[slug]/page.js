import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import styles from "./post.module.css";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="section">
      <div className={`container ${styles.container}`}>
        <Link href="/blog" className={styles.back}>
          ← All posts
        </Link>
        <p className="eyebrow" style={{ marginTop: 24 }}>
          {post.date}
        </p>
        <h1 className={`heading-display ${styles.h1}`}>{post.title}</h1>
        <div className={styles.body}>
          {post.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
