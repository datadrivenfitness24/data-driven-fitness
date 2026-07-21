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

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={styles.form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className={styles.hidden}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <label className={styles.field}>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>

          <label className={styles.field}>
            <span>Message</span>
            <textarea name="message" rows={5} required />
          </label>

          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
