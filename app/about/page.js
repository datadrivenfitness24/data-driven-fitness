import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "Why Data Driven Fitness exists and how we think about building training tools.",
};

const PRINCIPLES = [
  {
    title: "Track the number that predicts the outcome",
    body: "Bodyweight and how a session felt are lagging, noisy signals. Working load per lift, tracked over weeks, is what actually tells you if a program is working.",
  },
  {
    title: "One clear answer beats twelve charts",
    body: "Dashboards are easy to build and hard to use. Every product we ship is built around a small number of decisions someone actually needs to make.",
  },
  {
    title: "Tools should fit into training, not replace it",
    body: "We're not building a replacement for coaching or judgment. We're building the measurement layer underneath it.",
  },
];

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className={`heading-display ${styles.h1}`}>
            We build the measurement layer for serious training.
          </h1>
          <p className={styles.intro}>
            Data Driven Fitness makes tools for lifters and coaches who want a straight
            answer to a simple question: is this training actually working? We started
            with strength training and LiftIQ — more tools are on the way.
          </p>
        </div>
      </section>

      <section className="section dark-section" style={{ paddingTop: 64 }}>
        <div className="container">
          <p className="eyebrow">How we think about it</p>
          <div className={styles.principles}>
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className={styles.principle}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
