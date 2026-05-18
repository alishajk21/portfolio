import styles from './HobbiesSection.module.css';

export default function HobbiesSection({ hobbies }) {
  return (
    <div className={styles.grid}>
      {hobbies.map((item, i) => (
        <div
          key={i}
          className={`${styles.card} ${item.wide ? styles.wide : ''} ${item.tall ? styles.tall : ''}`}
          style={{ '--accent': item.color }}
        >
          {/* glow blob */}
          <div
            className={styles.blob}
            style={{ background: item.color + '18' }}
          />

          <div className={styles.inner}>
            <div
              className={styles.iconWrap}
              style={{
                background: item.color + '20',
                border: `1px solid ${item.color}44`,
              }}
            >
              <span className={styles.icon}>{item.icon}</span>
            </div>

            <div className={styles.content}>
              <span
                className={styles.tag}
                style={{
                  color: item.color,
                  background: item.color + '14',
                  border: `1px solid ${item.color}33`,
                }}
              >
                {item.category}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>

              {item.extras && (
                <div className={styles.extras}>
                  {item.extras.map((e, j) => (
                    <span
                      key={j}
                      className={styles.extra}
                      style={{ borderColor: item.color + '33' }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
