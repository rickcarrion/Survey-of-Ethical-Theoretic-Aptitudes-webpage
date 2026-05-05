export const t = {
  en: {
    // Landing
    badge: 'F. Neil Brady · SETA',
    title: 'Ethical Decision‑Making',
    titleAccent: 'Assessment',
    subtitle: [
      'Discover whether your decisions are guided more by ',
      'outcomes and consequences',
      ' or ',
      'principles and duties',
      ' — and what that means for how you lead.',
    ],
    metaTime: '~2 minutes',
    metaQuestions: '15 forced-choice questions',
    metaNoRight: 'No right or wrong answers',
    startBtn: 'Start Assessment',
    features: [
      {
        icon: '⚖️',
        title: 'What it measures',
        body: 'Your natural tendency to reason from outcomes (consequentialism) versus principles and duties (deontology) — the two dominant frameworks in applied ethics.',
      },
      {
        icon: '🧭',
        title: 'Why it matters',
        body: 'Understanding your ethical orientation sharpens your leadership, improves team alignment, and helps you navigate real-world tradeoffs in business and life.',
      },
      {
        icon: '📊',
        title: "What you'll receive",
        body: 'A personalized ethical profile with a spectrum score, a plain-language explanation of your reasoning style, and how it shows up in decision-making.',
      },
    ],
    spectrumCaption: 'Your ethical spectrum',
    footerLine1: 'Based on the Survey of Ethical Theoretic Aptitudes by F. Neil Brady.',
    footerLine2: 'For academic, educational, and professional development use.',
    deontological: 'Deontological',
    utilitarian: 'Utilitarian',
    zoneLabels: ['Extremely\nDeont.', 'Slightly\nDeont.', 'Balanced', 'Slightly\nUtil.', 'Extremely\nUtil.'],

    // Survey
    questionLabel: 'Question',
    exitLabel: 'Exit',
    hint: ['A', ' or ', 'B', ' · click or press key'],

    // Results
    yourResult: 'Your Result',
    scoreRange: 'score (range: −8 to +7)',
    spectrumTitle: 'Ethical Spectrum',
    whatMeans: 'What this means for you',
    breakdownTitle: 'Answer breakdown',
    utilitarianAnswers: 'Utilitarian answers',
    deontologicalAnswers: 'Deontological answers',
    reviewAnswers: 'Review your answers',
    copyResult: 'Copy result',
    copied: 'Copied!',
    takeAgain: 'Take again',
    axisTicks: ['−8', '−4', '0', '+4', '+7'],
    footerLine1Results: 'Based on the Survey of Ethical Theoretic Aptitudes by F. Neil Brady.',
    footerLine2Results: 'For academic, educational, and professional development use.',
    reviewTagUtil: 'Utilitarian',
    reviewTagDeont: 'Deontological',
    copyText: (label, score, desc, uCount, dCount) =>
      `My SETA Result: ${label}\nScore: ${score > 0 ? '+' : ''}${score} / +7\n${desc}\n\nUtilitarian answers: ${uCount}/15 · Deontological answers: ${dCount}/15\n\nTake the assessment: Survey of Ethical Theoretic Aptitudes (F. Neil Brady)`,
  },

  es: {
    // Landing
    badge: 'F. Neil Brady · SETA',
    title: 'Evaluación de Decisiones',
    titleAccent: 'Éticas',
    subtitle: [
      'Descubre si tus decisiones están guiadas más por ',
      'resultados y consecuencias',
      ' o por ',
      'principios y deberes',
      ' — y lo que eso significa para tu liderazgo.',
    ],
    metaTime: '~2 minutos',
    metaQuestions: '15 preguntas de elección forzada',
    metaNoRight: 'No hay respuestas correctas o incorrectas',
    startBtn: 'Comenzar Evaluación',
    features: [
      {
        icon: '⚖️',
        title: 'Qué mide',
        body: 'Tu tendencia natural a razonar desde los resultados (consecuencialismo) versus principios y deberes (deontología) — los dos marcos dominantes en ética aplicada.',
      },
      {
        icon: '🧭',
        title: 'Por qué importa',
        body: 'Entender tu orientación ética agudiza tu liderazgo, mejora la alineación del equipo y te ayuda a navegar las compensaciones del mundo real en los negocios y la vida.',
      },
      {
        icon: '📊',
        title: 'Lo que recibirás',
        body: 'Un perfil ético personalizado con una puntuación espectral, una explicación en lenguaje sencillo de tu estilo de razonamiento y cómo se manifiesta en la toma de decisiones.',
      },
    ],
    spectrumCaption: 'Tu espectro ético',
    footerLine1: 'Basado en la Survey of Ethical Theoretic Aptitudes de F. Neil Brady.',
    footerLine2: 'Para uso académico, educativo y de desarrollo profesional.',
    deontological: 'Deontológico',
    utilitarian: 'Utilitario',
    zoneLabels: ['Extreme.\nDeont.', 'Levem.\nDeont.', 'Equilibrado', 'Levem.\nUtil.', 'Extreme.\nUtil.'],

    // Survey
    questionLabel: 'Pregunta',
    exitLabel: 'Salir',
    hint: ['A', ' o ', 'B', ' · haz clic o presiona la tecla'],

    // Results
    yourResult: 'Tu Resultado',
    scoreRange: 'puntuación (rango: −8 a +7)',
    spectrumTitle: 'Espectro Ético',
    whatMeans: 'Lo que esto significa para ti',
    breakdownTitle: 'Resumen de respuestas',
    utilitarianAnswers: 'Respuestas utilitarias',
    deontologicalAnswers: 'Respuestas deontológicas',
    reviewAnswers: 'Revisar tus respuestas',
    copyResult: 'Copiar resultado',
    copied: '¡Copiado!',
    takeAgain: 'Volver a realizar',
    axisTicks: ['−8', '−4', '0', '+4', '+7'],
    footerLine1Results: 'Basado en la Survey of Ethical Theoretic Aptitudes de F. Neil Brady.',
    footerLine2Results: 'Para uso académico, educativo y de desarrollo profesional.',
    reviewTagUtil: 'Utilitario',
    reviewTagDeont: 'Deontológico',
    copyText: (label, score, desc, uCount, dCount) =>
      `Mi resultado SETA: ${label}\nPuntuación: ${score > 0 ? '+' : ''}${score} / +7\n${desc}\n\nRespuestas utilitarias: ${uCount}/15 · Respuestas deontológicas: ${dCount}/15\n\nRealiza la evaluación: Survey of Ethical Theoretic Aptitudes (F. Neil Brady)`,
  },
};
