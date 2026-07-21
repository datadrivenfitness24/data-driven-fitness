import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="heading-display" style={{ fontSize: "2.4rem", marginTop: 12 }}>
          That page doesn't exist.
        </h1>
        <p style={{ marginTop: 16, color: "var(--navy-600)" }}>
          <Link href="/" style={{ borderBottom: "1px solid currentColor" }}>
            Back to the homepage →
          </Link>
        </p>
      </div>
    </section>
  );
}
