import { useState, useEffect, useCallback } from 'react';
import { questions } from '../data/questions';
import { t } from '../i18n';
import styles from './SurveyPage.module.css';

export default function SurveyPage({ answers, onAnswer, onExit, lang }) {
  const tx = t[lang];
  const qs = questions[lang];
  const current = answers.length;
  const question = qs[current];
  const progress = (current / qs.length) * 100;
  const [animState, setAnimState] = useState('enter');
  const [chosen, setChosen] = useState(null);

  useEffect(() => {
    setAnimState('enter');
    setChosen(null);
    const timer = setTimeout(() => setAnimState('idle'), 30);
    return () => clearTimeout(timer);
  }, [current]);

  const handlePick = useCallback((choice) => {
    if (chosen) return;
    setChosen(choice);
    setAnimState('exit');
    setTimeout(() => onAnswer(choice), 300);
  }, [chosen, onAnswer]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'a' || e.key === 'A' || e.key === '1') handlePick('A');
      if (e.key === 'b' || e.key === 'B' || e.key === '2') handlePick('B');
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlePick]);

  if (!question) return null;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button className={styles.exitBtn} onClick={onExit} aria-label={tx.exitLabel}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {tx.exitLabel}
        </button>
        <div className={styles.progressWrap}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={current}
            aria-valuemax={qs.length}
          />
        </div>
        <span className={styles.counter}>{current} / {qs.length}</span>
      </header>

      <main className={styles.main}>
        <div className={`${styles.card} ${styles[animState]}`} aria-live="polite">
          <div className={styles.qNumber}>{tx.questionLabel} {current + 1}</div>
          <h1 className={styles.question}>{question.question}</h1>

          <div className={styles.options}>
            {['A', 'B'].map((key) => (
              <button
                key={key}
                className={`${styles.option} ${chosen === key ? styles.selected : ''} ${chosen && chosen !== key ? styles.dimmed : ''}`}
                onClick={() => handlePick(key)}
                aria-pressed={chosen === key}
              >
                <span className={styles.optionKey}>{key}</span>
                <span className={styles.optionText}>{question.options[key]}</span>
                <svg className={styles.optionCheck} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          <p className={styles.hint}>
            <kbd>{tx.hint[0]}</kbd>
            {tx.hint[1]}
            <kbd>{tx.hint[2]}</kbd>
            {tx.hint[3]}
          </p>
        </div>
      </main>
    </div>
  );
}
