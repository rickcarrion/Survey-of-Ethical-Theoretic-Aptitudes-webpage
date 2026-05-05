import { useEffect, useRef } from 'react';
import styles from './LandingPage.module.css';
import BellLogo from './BellLogo';
import { t } from '../i18n';

export default function LandingPage({ onStart, lang }) {
  const tx = t[lang];
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 600ms ease, transform 600ms ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(raf);
  }, [lang]);

  return (
    <main className={styles.main}>
      <div className={styles.hero} ref={heroRef}>
        <div className={styles.badge}>{tx.badge}</div>
        <h1 className={styles.title}>
          {tx.title}<br />
          <span className={styles.titleAccent}>{tx.titleAccent}</span>
        </h1>
        <p className={styles.subtitle}>
          {tx.subtitle[0]}
          <em>{tx.subtitle[1]}</em>
          {tx.subtitle[2]}
          <em>{tx.subtitle[3]}</em>
          {tx.subtitle[4]}
        </p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M7.5 4.5V8l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            {tx.metaTime}
          </span>
          <span className={styles.metaDivider}>·</span>
          <span className={styles.metaItem}>{tx.metaQuestions}</span>
          <span className={styles.metaDivider}>·</span>
          <span className={styles.metaItem}>{tx.metaNoRight}</span>
        </div>
        <button className={styles.cta} onClick={onStart}>
          {tx.startBtn}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className={styles.featuresGrid}>
        {tx.features.map((f) => (
          <article key={f.title} className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
            <h2 className={styles.featureTitle}>{f.title}</h2>
            <p className={styles.featureBody}>{f.body}</p>
          </article>
        ))}
      </div>

      <div className={styles.spectrumPreview}>
        <div className={styles.spectrumLabel}>
          <span className={styles.deonto}>{tx.deontological}</span>
          <span className={styles.spectrumCaption}>{tx.spectrumCaption}</span>
          <span className={styles.util}>{tx.utilitarian}</span>
        </div>
        <div className={styles.spectrumBar}>
          <div className={styles.spectrumFill} />
          <div className={styles.spectrumMarker} aria-label="Example position" />
        </div>
        <div className={styles.spectrumTicks}>
          {tx.zoneLabels.map((label, i) => (
            <span key={i} className={styles.tick}>{label}</span>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <BellLogo size="md" />
        <p>{tx.footerLine1}</p>
        <p>{tx.footerLine2}</p>
      </footer>
    </main>
  );
}
