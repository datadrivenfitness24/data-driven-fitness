import styles from "./liftiq.module.css";

export const metadata = {
  title: "LiftIQ",
  description: "LiftIQ — coming soon from Data Driven Fitness.",
};

export default function LiftIQ() {
  return (
    <section className="section dark-section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <p className="eyebrow">Our first product</p>
        <h1 className={`heading-display ${styles.h1}`}>LiftIQ</h1>
        <p className={styles.intro}>
          We're building LiftIQ right now. It's not ready to share details on yet —
          but if you want to know the moment it launches, leave your email below.
        </p>

        <form
          name="liftiq-notify"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={styles.form}
        >
          <input type="hidden" name="form-name" value="liftiq-notify" />
          <p className={styles.hidden}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className={styles.emailInput}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-invert">
            Notify me
          </button>
        </form>
      </div>
    </section>
  );
}
