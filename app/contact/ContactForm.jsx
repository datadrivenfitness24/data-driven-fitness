"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      event.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className={styles.successMessage}>
        Thanks — your message is in. We'll get back to you soon.
      </p>
    );
  }

  return (
    <form name="contact" onSubmit={handleSubmit} className={styles.form}>
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

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong sending that — mind trying again?
        </p>
      )}
    </form>
  );
}
