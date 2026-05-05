import { useEffect, useRef, useState } from 'react';
import { questions, isUtilitarianAnswer } from '../data/questions';
import { t } from '../i18n';
import BellLogo from './BellLogo';
import styles from './ResultsPage.module.css';

// Spectrum: score range is −8 to +7
const SCORE_MIN = -8;
const SCORE_MAX = 7;

function scoreToPercent(score) {
  return ((score - SCORE_MIN) / (SCORE_MAX - SCORE_MIN)) * 100;
}

function getAccentColor(score) {
  if (score >= 2) return 'var(--accent)';
  if (score <= -2) return 'var(--deonto-color)';
  return 'var(--neutral-color)';
}

export default function ResultsPage({ result, onRestart, answers, lang }) {
  const tx = t[lang];
  const qs = questions[lang];
  const markerRef = useRef(null);
  const [markerReady, setMarkerReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const percent = scoreToPercent(result.score);
  const accentColor = getAccentColor(result.score);

  // Count true utilitarian answers (using the real scoring logic)
  const uCount = answers.filter((ans, i) => isUtilitarianAnswer(i, ans)).length;
  const dCount = 15 - uCount;

  useEffect(() => {
    const t = setTimeout(() => setMarkerReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  function handleCopy() {
    const text = tx.copyText(result.label, result.score, result.description, uCount, dCount);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }).catch(() => {});
  }

  const zonePercents = [6.67, 26.67, 50, 73.33, 93.33];

  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge} style={{ color: accentColor, borderColor: accentColor }}>
            {tx.yourResult}
          </div>
          <h1 className={styles.label} style={{ color: accentColor }}>{result.label}</h1>
          <p className={styles.description}>{result.description}</p>
        </div>

        {/* Score chip */}
        <div className={styles.scoreRow}>
          <div className={styles.scoreChip} style={{ background: `${accentColor}18`, borderColor: `${accentColor}40` }}>
            <span className={styles.scoreNumber} style={{ color: accentColor }}>
              {result.score > 0 ? '+' : ''}{result.score}
            </span>
            <span className={styles.scoreLabel}>{tx.scoreRange}</span>
          </div>
        </div>

        {/* Spectrum bar */}
        <div className={styles.spectrumCard}>
          <div className={styles.spectrumHeading}>
            <span className={styles.deonto}>{tx.deontological}</span>
            <span className={styles.spectrumTitle}>{tx.spectrumTitle}</span>
            <span className={styles.util}>{tx.utilitarian}</span>
          </div>

          <div className={styles.barWrapper}>
            <div className={styles.barTrack}>
              <div className={styles.barFill} />
              <div
                ref={markerRef}
                className={styles.marker}
                style={{
                  left: `${percent}%`,
                  transform: markerReady ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
                  borderColor: accentColor,
                  boxShadow: `0 2px 12px ${accentColor}55`,
                  transition: markerReady
                    ? 'left 800ms cubic-bezier(0.34,1.56,0.64,1), transform 400ms cubic-bezier(0.34,1.56,0.64,1)'
                    : 'none',
                }}
                aria-label={`${result.score}: ${result.label}`}
              />
            </div>
            <div className={styles.axisTicks}>
              {tx.axisTicks.map(v => <span key={v}>{v}</span>)}
            </div>
          </div>

          <div className={styles.zones}>
            {tx.zoneLabels.map((label, i) => {
              const isActive = Math.abs(percent - zonePercents[i]) < 14;
              return (
                <span
                  key={i}
                  className={`${styles.zone} ${isActive ? styles.zoneActive : ''}`}
                  style={isActive ? { color: accentColor } : {}}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Detail bullets */}
        <div className={styles.detailCard}>
          <h2 className={styles.detailHeading}>{tx.whatMeans}</h2>
          <ul className={styles.detailList}>
            {result.detail.map((d, i) => (
              <li key={i} className={styles.detailItem}>
                <span className={styles.detailDot} style={{ background: accentColor }} />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Breakdown */}
        <div className={styles.breakdownCard}>
          <h2 className={styles.detailHeading}>{tx.breakdownTitle}</h2>
          <div className={styles.breakdownBars}>
            <div className={styles.bBar}>
              <span className={styles.bLabel}>{tx.utilitarianAnswers}</span>
              <div className={styles.bTrack}>
                <div className={styles.bFill} style={{ width: `${(uCount / 15) * 100}%`, background: 'var(--accent)' }} />
              </div>
              <span className={styles.bCount}>{uCount}/15</span>
            </div>
            <div className={styles.bBar}>
              <span className={styles.bLabel}>{tx.deontologicalAnswers}</span>
              <div className={styles.bTrack}>
                <div className={styles.bFill} style={{ width: `${(dCount / 15) * 100}%`, background: 'var(--deonto-color)' }} />
              </div>
              <span className={styles.bCount}>{dCount}/15</span>
            </div>
          </div>
        </div>

        {/* Review answers */}
        <details className={styles.reviewDetails}>
          <summary className={styles.reviewSummary}>{tx.reviewAnswers}</summary>
          <ol className={styles.reviewList}>
            {qs.map((q, i) => {
              const ans = answers[i];
              const isUtil = isUtilitarianAnswer(i, ans);
              return (
                <li key={q.id} className={styles.reviewItem}>
                  <div className={styles.reviewQ}>{q.question}</div>
                  <div
                    className={styles.reviewAns}
                    style={{
                      color: isUtil ? 'var(--accent)' : 'var(--deonto-color)',
                      background: isUtil ? 'var(--accent-light)' : 'var(--deonto-light)',
                    }}
                  >
                    <span><strong>{ans}.</strong> {q.options[ans]}</span>
                    <span className={styles.reviewTag}>
                      {isUtil ? tx.reviewTagUtil : tx.reviewTagDeont}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </details>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.shareBtn} onClick={handleCopy}>
            {copied ? (
              <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> {tx.copied}</>
            ) : (
              <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="5" y="5" width="8" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M3 11V3a1 1 0 011-1h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> {tx.copyResult}</>
            )}
          </button>
          <button className={styles.restartBtn} onClick={onRestart}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M2.5 7.5A5 5 0 1 1 4 11M2.5 4v3.5H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {tx.takeAgain}
          </button>
        </div>

        <footer className={styles.footer}>
          <BellLogo size="md" />
          <p>{tx.footerLine1Results}</p>
          <p>{tx.footerLine2Results}</p>
        </footer>
      </div>
    </main>
  );
}
