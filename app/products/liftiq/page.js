import NotifyForm from "./NotifyForm";
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
        <NotifyForm />
      </div>
    </section>
  );
}
