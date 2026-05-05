import styles from './LangToggle.module.css';

export default function LangToggle({ lang, onToggle }) {
  return (
    <div className={styles.pill} role="group" aria-label="Language selector">
      <button
        className={`${styles.opt} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => lang !== 'en' && onToggle('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
      <button
        className={`${styles.opt} ${lang === 'es' ? styles.active : ''}`}
        onClick={() => lang !== 'es' && onToggle('es')}
        aria-pressed={lang === 'es'}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
}
