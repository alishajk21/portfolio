import styles from "./SectionHeader.module.css";

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>
        <div className={styles.line} />
        <span>{label}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
