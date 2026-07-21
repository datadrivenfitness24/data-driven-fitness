import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>Data Driven Fitness</p>
          <p className={styles.tagline}>Training, measured properly.</p>
        </div>
        <div className={styles.cols}>
          <div className={styles.col}>
            <p className="eyebrow">Product</p>
            <Link href="/products/liftiq">LiftIQ</Link>
          </div>
          <div className={styles.col}>
            <p className="eyebrow">Company</p>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Data Driven Fitness. Sydney, Australia.</span>
        <span>datadrivenfitness.com.au</span>
      </div>
    </footer>
  );
}
