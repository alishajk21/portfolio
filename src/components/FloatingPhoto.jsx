// import { useRef } from 'react';
import styles from './FloatingPhoto.module.css';

export default function FloatingPhoto({ src }) {
  // const fileRef = useRef();

  // const handleFile = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   const reader = new FileReader();
  //   reader.onload = (ev) => onUpload(ev.target.result);
  //   reader.readAsDataURL(file);
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        {src ? (
          <img src={src} alt="Alisha John K" className={styles.photo} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.emoji}>🧑‍💻</span>
            <span className={styles.hint}>Your photo here</span>
          </div>
        )}
        {/* <div className={styles.overlay} onClick={() => fileRef.current.click()}>
          <span className={styles.overlayText}>📷 Change photo</span>
        </div> */}
      </div>
      {/* <div className={styles.badge}>● Open to work</div> */}
      {/* <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFile}
      /> */}
    </div>
  );
}
