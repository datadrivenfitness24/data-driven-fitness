import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/products/liftiq", label: "LiftIQ" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Image src="/logo.png" alt="Data Driven Fitness" width={32} height={32} priority />
          <span>Data Driven Fitness</span>
        </Link>
        <nav className={styles.links}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
