import styles from './ResumeModal.module.css';

export default function ResumeModal({ resumeUrl, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className={styles.emoji}>📄</div>
        <h2 className={styles.title}>Download Resume?</h2>
        <p className={styles.desc}>
          You're about to download the resume. Do you want to proceed?
        </p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <a
            href={resumeUrl}
            download
            onClick={onClose}
            className={styles.downloadBtn}
          >
            Yes, Download
          </a>
        </div>
      </div>
    </div>
  );
}
