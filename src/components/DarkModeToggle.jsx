import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8.5 1v2M8.5 14v2M1 8.5h2M14 8.5h2M3.5 3.5l1.4 1.4M12.1 12.1l1.4 1.4M12.1 3.5l-1.4 1.4M3.5 12.1l1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5c0-.3.02-.6.06-.9A6.5 6.5 0 1 0 14.4 9.94a6.4 6.4 0 0 1-.9-.44z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
