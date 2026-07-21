import styles from "./HeroNetwork.module.css";

/**
 * A network of nodes and lines that draws itself in, echoing the
 * hexagon/network mark in the logo. Represents raw reps -> connected data.
 */
export default function HeroNetwork() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of connected data points forming a network"
    >
      <g stroke="#F4F7F8" strokeWidth="1.5" strokeLinecap="round">
        <path className={`${styles.line} ${styles.l1}`} d="M260 60 L400 140 L400 300 L260 380 L120 300 L120 140 Z" />
        <path className={`${styles.line} ${styles.l2}`} d="M260 60 L260 190 L190 230 L190 300" />
        <path className={`${styles.line} ${styles.l3}`} d="M260 190 L330 230 L330 300 L260 380" />
        <path className={`${styles.line} ${styles.l4}`} d="M190 300 L260 380 L330 300" />
      </g>
      <g fill="#F4F7F8">
        <circle className={`${styles.node} ${styles.n1}`} cx="260" cy="60" r="5" />
        <circle className={`${styles.node} ${styles.n2}`} cx="400" cy="140" r="5" />
        <circle className={`${styles.node} ${styles.n3}`} cx="400" cy="300" r="5" />
        <circle className={`${styles.node} ${styles.n4}`} cx="260" cy="380" r="5" />
        <circle className={`${styles.node} ${styles.n5}`} cx="120" cy="300" r="5" />
        <circle className={`${styles.node} ${styles.n6}`} cx="120" cy="140" r="5" />
        <circle className={`${styles.node} ${styles.n7}`} cx="260" cy="190" r="5" />
        <circle className={`${styles.node} ${styles.n8}`} cx="190" cy="230" r="5" />
        <circle className={`${styles.node} ${styles.n9}`} cx="190" cy="300" r="5" />
        <circle className={`${styles.node} ${styles.n10}`} cx="330" cy="230" r="5" />
        <circle className={`${styles.node} ${styles.n11}`} cx="330" cy="300" r="5" />
      </g>
    </svg>
  );
}
