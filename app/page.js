import Link from "next/link";
import HeroNetwork from "@/components/HeroNetwork";
import { posts } from "@/lib/posts";
import styles from "./page.module.css";

export default function Home() {
  const latestPosts = posts.slice(0, 2);

  return (
    <>
      <section className={`dark-section ${styles.hero}`}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <p className="eyebrow">Data Driven Fitness</p>
            <h1 className={`heading-display ${styles.h1}`}>
              Training decisions,
              <br />
              backed by numbers.
            </h1>
            <p className={styles.heroCopy}>
              We build tools that turn training into numbers you can act on —
              starting with LiftIQ, our first product, currently in development.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products/liftiq" className="btn btn-invert">
                LiftIQ — coming soon →
              </Link>
              <Link href="/about" className="btn btn-outline">
                Why data-driven
              </Link>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <HeroNetwork />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.productSection}>
          <div className="container">
            <p className="eyebrow">Our first product</p>
            <h2 className={`heading-display ${styles.h2}`}>LiftIQ</h2>
            <p className={styles.bodyLg}>
              We're building LiftIQ right now — our first product. Details and sign-up
              are coming soon.
            </p>
            <Link href="/products/liftiq" className="btn btn-primary">
              Get notified when it launches →
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.blogTeaser}`}>
          <div className={styles.blogHeader}>
            <p className="eyebrow">From the blog</p>
            <h2 className={`heading-display ${styles.h3}`}>Notes on training with data</h2>
            <Link href="/blog" className={styles.viewAll}>
              View all posts →
            </Link>
          </div>
          <div className={styles.blogGrid}>
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
                <span className="eyebrow">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
