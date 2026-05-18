import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection({ email }) {
  const [to] = useState(email);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    window.open(
      `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
    );
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.field}>
        <label className={styles.label}>To</label>
        <input value={to} readOnly className={styles.input} />
      </div> */}

      <div className={styles.field}>
        <label className={styles.label}>Subject</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Let's work together!"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Hi Alisha! I'd love to discuss a project with you..."
          className={styles.textarea}
        />
      </div>

      <button
        onClick={handleSend}
        disabled={!subject || !message}
        className={`${styles.sendBtn} ${sent ? styles.sent : ''}`}
      >
        {sent ? '✓ Opening mail client...' : 'Send Message →'}
      </button>
    </div>
  );
}
