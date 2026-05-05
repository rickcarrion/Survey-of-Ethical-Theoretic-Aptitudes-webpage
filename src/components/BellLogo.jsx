import styles from './BellLogo.module.css';

// Gaussian bell curve drawn as an SVG path
export default function BellLogo({ size = 'md' }) {
  return (
    <div className={`${styles.wrap} ${styles[size]}`} aria-label="Bell curve — by Ricardo Carrión">
      <svg
        className={styles.svg}
        viewBox="0 0 80 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Baseline */}
        <line x1="2" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
        {/* Bell curve — Gaussian approximation via cubic beziers */}
        <path
          d="M2,40 C10,40 14,39 18,36 C22,33 25,22 30,14 C33,9 36,5 40,4 C44,5 47,9 50,14 C55,22 58,33 62,36 C66,39 70,40 78,40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle area fill */}
        <path
          d="M2,40 C10,40 14,39 18,36 C22,33 25,22 30,14 C33,9 36,5 40,4 C44,5 47,9 50,14 C55,22 58,33 62,36 C66,39 70,40 78,40 Z"
          fill="currentColor"
          opacity="0.07"
        />
      </svg>
      <span className={styles.credit}>by Ricardo Carrión</span>
    </div>
  );
}
