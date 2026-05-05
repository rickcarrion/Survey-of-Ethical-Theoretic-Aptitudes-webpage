import { useState, useEffect } from 'react';
import './index.css';
import LandingPage from './components/LandingPage';
import SurveyPage from './components/SurveyPage';
import ResultsPage from './components/ResultsPage';
import DarkModeToggle from './components/DarkModeToggle';
import LangToggle from './components/LangToggle';
import { computeResult } from './data/questions';
import styles from './App.module.css';

const STORAGE_KEY = 'seta_answers';

function App() {
  const [page, setPage] = useState('landing');
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('seta_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('seta_lang') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('seta_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('seta_lang', lang);
  }, [lang]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); }
    catch { /* ignore */ }
  }, [answers]);

  function handleStart() {
    setAnswers([]);
    setPage('survey');
  }

  function handleAnswer(choice) {
    const next = [...answers, choice];
    setAnswers(next);
    if (next.length === 15) {
      setTimeout(() => setPage('results'), 320);
    }
  }

  function handleRestart() {
    setAnswers([]);
    localStorage.removeItem(STORAGE_KEY);
    setPage('landing');
  }

  const result = page === 'results' ? computeResult(answers, lang) : null;

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Top-right controls */}
      <div className={styles.controls}>
        <LangToggle lang={lang} onToggle={setLang} />
        <DarkModeToggle theme={theme} onToggle={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      </div>

      {page === 'landing' && <LandingPage onStart={handleStart} lang={lang} />}
      {page === 'survey' && (
        <SurveyPage
          answers={answers}
          onAnswer={handleAnswer}
          onExit={() => setPage('landing')}
          lang={lang}
        />
      )}
      {page === 'results' && (
        <ResultsPage
          result={result}
          onRestart={handleRestart}
          answers={answers}
          lang={lang}
        />
      )}
    </div>
  );
}

export default App;
