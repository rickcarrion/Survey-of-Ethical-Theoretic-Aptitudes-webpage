// Survey of Ethical Theoretic Aptitudes — F. Neil Brady (exact questions)
//
// Scoring: (# odd-numbered A answers) + (# even-numbered B answers) − 8
// Odd questions (1,3,5,7,9,11,13,15): option A = utilitarian tendency
// Even questions (2,4,6,8,10,12,14):  option B = utilitarian tendency
// Range: −8 (most deontological) to +7 (most utilitarian)

export const questions = {
  en: [
    {
      id: 1,
      question: "Persons' actions should be described in terms of being",
      options: { A: "good or bad.", B: "right or wrong." },
    },
    {
      id: 2,
      question: "When making an ethical decision, one should pay attention to",
      options: { A: "one's conscience.", B: "others' needs, wants, and desires." },
    },
    {
      id: 3,
      question: "Solutions to ethical problems are usually",
      options: { A: "some shade of gray.", B: "black and white." },
    },
    {
      id: 4,
      question: "It is of more value to societies to",
      options: {
        A: "follow stable traditions and maintain a distinctive identity.",
        B: "be responsive and adapt to new conditions as the world changes.",
      },
    },
    {
      id: 5,
      question: "When thinking through ethical problems, I prefer to",
      options: {
        A: "develop practical, workable alternatives.",
        B: "make reasonable distinctions and clarifications.",
      },
    },
    {
      id: 6,
      question: "When people disagree over ethical matters, I strive for",
      options: { A: "some point(s) of agreement.", B: "workable compromises." },
    },
    {
      id: 7,
      question: "Uttering a falsehood is wrong because",
      options: {
        A: "depending on the results, it can lead to further problems.",
        B: "it wouldn't be right for anyone to lie.",
      },
    },
    {
      id: 8,
      question: "Thinking of occupations, I would rather be a",
      options: {
        A: "wise judge, applying the law with fairness and impartiality.",
        B: "benevolent legislator, seeking an improved life for all.",
      },
    },
    {
      id: 9,
      question: "I would rather be known as a person who",
      options: {
        A: "has accomplished a lot and achieved much.",
        B: "has integrity and is a person of principle.",
      },
    },
    {
      id: 10,
      question: "The aim of science should be",
      options: { A: "to discover truth.", B: "to solve existing problems." },
    },
    {
      id: 11,
      question: "Whether a person is a liar is",
      options: { A: "a matter of degree.", B: "a question of kind." },
    },
    {
      id: 12,
      question: "A nation should pay more attention to its",
      options: { A: "heritage, its roots.", B: "future, its potential." },
    },
    {
      id: 13,
      question: "It is more important to be",
      options: { A: "happy.", B: "worthy." },
    },
    {
      id: 14,
      question: "Unethical behavior is best described as",
      options: {
        A: "a violation of a principle of law.",
        B: "causing some degree of harm.",
      },
    },
    {
      id: 15,
      question: "The purpose of government should be",
      options: {
        A: "to promote the best possible life for its citizens.",
        B: "to secure justice and fair treatment.",
      },
    },
  ],

  es: [
    {
      id: 1,
      question: "Las acciones de las personas deben describirse en términos de ser",
      options: { A: "buenas o malas.", B: "correctas o incorrectas." },
    },
    {
      id: 2,
      question: "Al tomar una decisión ética, uno debe prestar atención a",
      options: {
        A: "la propia conciencia.",
        B: "las necesidades, deseos y anhelos de los demás.",
      },
    },
    {
      id: 3,
      question: "Las soluciones a los problemas éticos generalmente son",
      options: { A: "algún tono de gris.", B: "blanco o negro." },
    },
    {
      id: 4,
      question: "Tiene más valor para las sociedades",
      options: {
        A: "seguir tradiciones estables y mantener una identidad distintiva.",
        B: "ser receptivas y adaptarse a las nuevas condiciones a medida que el mundo cambia.",
      },
    },
    {
      id: 5,
      question: "Cuando reflexiono sobre problemas éticos, prefiero",
      options: {
        A: "desarrollar alternativas prácticas y viables.",
        B: "hacer distinciones y aclaraciones razonables.",
      },
    },
    {
      id: 6,
      question: "Cuando las personas no están de acuerdo en cuestiones éticas, busco",
      options: {
        A: "algún punto de acuerdo.",
        B: "compromisos viables.",
      },
    },
    {
      id: 7,
      question: "Decir una falsedad está mal porque",
      options: {
        A: "dependiendo de los resultados, puede llevar a más problemas.",
        B: "no sería correcto que nadie mintiera.",
      },
    },
    {
      id: 8,
      question: "Pensando en ocupaciones, preferiría ser",
      options: {
        A: "un juez sabio, aplicando la ley con equidad e imparcialidad.",
        B: "un legislador benévolo, buscando una mejor vida para todos.",
      },
    },
    {
      id: 9,
      question: "Preferiría ser conocido como una persona que",
      options: {
        A: "ha logrado mucho y ha alcanzado grandes metas.",
        B: "tiene integridad y es una persona de principios.",
      },
    },
    {
      id: 10,
      question: "El objetivo de la ciencia debería ser",
      options: {
        A: "descubrir la verdad.",
        B: "resolver los problemas existentes.",
      },
    },
    {
      id: 11,
      question: "Si una persona es mentirosa, eso es",
      options: {
        A: "una cuestión de grado.",
        B: "una cuestión de tipo.",
      },
    },
    {
      id: 12,
      question: "Una nación debería prestar más atención a",
      options: {
        A: "su herencia, sus raíces.",
        B: "su futuro, su potencial.",
      },
    },
    {
      id: 13,
      question: "Es más importante ser",
      options: { A: "feliz.", B: "digno." },
    },
    {
      id: 14,
      question: "El comportamiento no ético se describe mejor como",
      options: {
        A: "una violación de un principio o ley.",
        B: "causar algún grado de daño.",
      },
    },
    {
      id: 15,
      question: "El propósito del gobierno debería ser",
      options: {
        A: "promover la mejor vida posible para sus ciudadanos.",
        B: "asegurar la justicia y el trato justo.",
      },
    },
  ],
};

// Returns true if the given answer on the given 0-indexed question is the utilitarian choice
export function isUtilitarianAnswer(questionIndex, choice) {
  // 0-indexed even  → odd question number  → A is utilitarian
  // 0-indexed odd   → even question number → B is utilitarian
  return questionIndex % 2 === 0 ? choice === 'A' : choice === 'B';
}

// Scoring: odd A's + even B's − 8   →   range −8 to +7
export function computeScore(answers) {
  let count = 0;
  answers.forEach((ans, i) => {
    if (isUtilitarianAnswer(i, ans)) count++;
  });
  return count - 8;
}

export function computeResult(answers, lang = 'en') {
  const score = computeScore(answers);

  // spectrum position 0–100 mapped from −8 to +7
  const spectrum = ((score + 8) / 15) * 100;

  const tiers = {
    en: [
      {
        test: s => s >= 5,
        label: 'Extremely Utilitarian',
        description:
          'Your decisions are strongly guided by outcomes and consequences. You believe the right action produces the greatest good for the greatest number — and you are willing to adapt rules when results justify it.',
        detail: [
          'You prioritize real-world impact and measurable results above fixed rules.',
          'You evaluate tradeoffs pragmatically, weighing costs against benefits.',
          'You adapt your reasoning flexibly to changing circumstances and context.',
        ],
      },
      {
        test: s => s >= 2,
        label: 'Slightly Utilitarian',
        description:
          'You lean toward outcome-based reasoning while still recognizing that principles matter. You tend to evaluate situations by likely consequences while respecting key moral boundaries.',
        detail: [
          'You favor practical solutions that produce measurable good for others.',
          'You balance results with some respect for rules and duties.',
          'You are open to exceptions when outcomes clearly justify them.',
        ],
      },
      {
        test: s => s >= -1,
        label: 'Balanced Ethical Reasoner',
        description:
          'You draw on both consequentialist and deontological thinking depending on the situation. You are an adaptive thinker who recognizes that ethics is complex and rarely fits one framework.',
        detail: [
          'You weigh both outcomes and principles when making decisions.',
          'You adapt your ethical approach to the nuances of each situation.',
          'You serve as a bridge between results-driven and principle-driven perspectives.',
        ],
      },
      {
        test: s => s >= -4,
        label: 'Slightly Deontological',
        description:
          'You lean toward principle-based reasoning. You believe that some actions are right or wrong in themselves — independent of outcomes. Duty, fairness, and consistency matter deeply to you.',
        detail: [
          'You uphold rules and principles even when under pressure to compromise.',
          'You value consistency, fairness, and treating people as ends in themselves.',
          'You resist outcome-based justifications for crossing moral lines.',
        ],
      },
      {
        test: () => true,
        label: 'Extremely Deontological',
        description:
          'Your decisions are firmly grounded in duty and principle. You believe morality means following the right rules — not calculating outcomes. Some actions are simply right or wrong, regardless of consequences.',
        detail: [
          'You hold strong moral principles and apply them consistently.',
          'You believe rights and duties are non-negotiable, even when outcomes suffer.',
          'You provide principled, trustworthy leadership in high-stakes situations.',
        ],
      },
    ],
    es: [
      {
        test: s => s >= 5,
        label: 'Extremadamente Utilitario',
        description:
          'Tus decisiones están fuertemente guiadas por los resultados y las consecuencias. Crees que la acción correcta es aquella que produce el mayor bien para el mayor número de personas — y estás dispuesto a adaptar las reglas cuando los resultados lo justifican.',
        detail: [
          'Priorizas el impacto real y los resultados medibles por encima de las reglas fijas.',
          'Evalúas las compensaciones de manera pragmática, sopesando costos y beneficios.',
          'Adaptas tu razonamiento de forma flexible a las circunstancias cambiantes.',
        ],
      },
      {
        test: s => s >= 2,
        label: 'Levemente Utilitario',
        description:
          'Tiendes hacia el razonamiento basado en resultados, aunque reconoces que los principios también importan. Evalúas las situaciones según sus consecuencias probables, respetando los límites morales clave.',
        detail: [
          'Favoreces soluciones prácticas que produzcan un bien medible para los demás.',
          'Equilibras los resultados con el respeto a las reglas y los deberes.',
          'Estás abierto a excepciones cuando los resultados claramente lo justifican.',
        ],
      },
      {
        test: s => s >= -1,
        label: 'Razonador Ético Equilibrado',
        description:
          'Recurres tanto al pensamiento consecuencialista como al deontológico según la situación. Eres un pensador adaptable que reconoce que la ética es compleja y rara vez encaja en un solo marco.',
        detail: [
          'Pesas tanto los resultados como los principios al tomar decisiones.',
          'Adaptas tu enfoque ético a los matices de cada situación.',
          'Sirves como puente entre las perspectivas orientadas a resultados y las orientadas a principios.',
        ],
      },
      {
        test: s => s >= -4,
        label: 'Levemente Deontológico',
        description:
          'Tiendes hacia el razonamiento basado en principios. Crees que algunas acciones son correctas o incorrectas por sí mismas, independientemente de sus resultados. El deber, la equidad y la coherencia te importan profundamente.',
        detail: [
          'Defiendes las reglas y los principios incluso bajo presión.',
          'Valoras la coherencia, la equidad y tratar a las personas como fines en sí mismos.',
          'Resistes las justificaciones basadas en resultados para cruzar líneas morales.',
        ],
      },
      {
        test: () => true,
        label: 'Extremadamente Deontológico',
        description:
          'Tus decisiones están firmemente fundamentadas en el deber y el principio. Crees que la moralidad consiste en seguir las reglas correctas, no en calcular resultados. Algunas acciones simplemente están bien o mal, independientemente de las consecuencias.',
        detail: [
          'Mantienes fuertes principios morales y los aplicas de manera coherente.',
          'Crees que los derechos y los deberes son innegociables, incluso cuando los resultados se resienten.',
          'Proporcionas un liderazgo confiable y basado en principios en situaciones de alto riesgo.',
        ],
      },
    ],
  };

  const tier = tiers[lang].find(t => t.test(score));
  return { score, spectrum, label: tier.label, description: tier.description, detail: tier.detail };
}
