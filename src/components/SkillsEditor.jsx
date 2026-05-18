import styles from './SkillsEditor.module.css';

export default function SkillsEditor({ skills }) {
  return (
    <div className={styles.container}>
      {skills.map((s, i) => (
        <div key={i} className={styles.chipWrap}>
          <div
            className={styles.chip}
            style={{
              borderColor: s.color + '33',
              boxShadow: `0 0 12px ${s.color}18`,
            }}
          >
            <span className={styles.icon}>{s.icon}</span>
            <span>{s.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
