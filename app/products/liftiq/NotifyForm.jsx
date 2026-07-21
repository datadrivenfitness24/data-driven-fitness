"use client";

import { useState } from "react";
import styles from "./liftiq.module.css";

export default function NotifyForm() {
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
    return <p className={styles.successMessage}>You're on the list — we'll email you when LiftIQ launches.</p>;
  }

  return (
    <form name="liftiq-notify" onSubmit={handleSubmit} className={styles.form}>
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
      <button type="submit" className="btn btn-invert" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Notify me"}
      </button>
      {status === "error" && (
        <p className={styles.errorMessage}>Something went wrong — mind trying again?</p>
      )}
    </form>
  );
}
