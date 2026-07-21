import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Data Driven Fitness, or get notified when LiftIQ opens up.",
};

export default function Contact() {
  return (
    <section className="section">
      <div className={`container ${styles.container}`}>
        <p className="eyebrow">Contact</p>
        <h1 className={`heading-display ${styles.h1}`}>Get in touch</h1>
        <p className={styles.intro}>
          Questions about Data Driven Fitness, or want to know when LiftIQ opens up?
          Send a message below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
