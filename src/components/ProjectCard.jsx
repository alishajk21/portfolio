import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.glow}
        style={{ background: project.color + '12' }}
      />

      <div className={styles.header}>
        <div
          className={styles.icon}
          style={{
            background: project.color + '22',
            border: `1px solid ${project.color}44`,
          }}
        >
          ◈
        </div>
        {project.link && (
          <div className={styles.actions}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={styles.linkBtn}
              title="Open project"
            >
              ↗
            </a>
          </div>
        )}
      </div>

      <span
        tag="div"
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: '#f1f5f9',
          marginBottom: 8,
          display: 'block',
        }}
      >
        {project.name}
      </span>

      <span
        value={project.desc}
        tag="div"
        multiline
        style={{
          fontSize: 13,
          color: '#94a3b8',
          lineHeight: 1.6,
          display: 'block',
          marginBottom: 16,
        }}
      />
      <p className={styles.desc}>{project.desc}</p>

      <div className={styles.tags}>
        {project.tags.map((t, i) => (
          <span
            key={i}
            className={styles.tag}
            style={{
              background: project.color + '18',
              color: project.color,
              border: `1px solid ${project.color}33`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
