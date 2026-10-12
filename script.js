const STORAGE_KEYS = {
  leaderboard: 'quiz-master-leaderboard',
  stats: 'quiz-master-personal-stats',
  name: 'quiz-master-display-name',
};

const DIFFICULTY_SETTINGS = {
  Easy: { timer: 18, label: 'Easy' },
  Medium: { timer: 14, label: 'Medium' },
  Hard: { timer: 10, label: 'Hard' },
};

const QUESTION_BANK = [
  { id: 'prog-easy-1', category: 'Programming', difficulty: 'Easy', question: 'Which HTML tag is used to create a hyperlink?', options: ['<link>', '<a>', '<href>', '<button>'], correctIndex: 1, explanation: 'The <a> element defines a hyperlink and uses the href attribute to specify the destination.' },
  { id: 'prog-easy-2', category: 'Programming', difficulty: 'Easy', question: 'Which JavaScript keyword declares a block-scoped variable?', options: ['var', 'let', 'const', 'function'], correctIndex: 1, explanation: 'let creates a block-scoped variable, unlike var which is function-scoped.' },
  { id: 'prog-easy-3', category: 'Programming', difficulty: 'Easy', question: 'Which array method creates a new array with all elements passing a test?', options: ['map()', 'filter()', 'sort()', 'forEach()'], correctIndex: 1, explanation: 'filter() returns a new array containing only the elements that satisfy the provided condition.' },
  { id: 'prog-easy-4', category: 'Programming', difficulty: 'Easy', question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Styling System', 'Computer Style Syntax'], correctIndex: 1, explanation: 'CSS stands for Cascading Style Sheets and controls the presentation of HTML content.' },
  { id: 'prog-easy-5', category: 'Programming', difficulty: 'Easy', question: 'In JavaScript, which operator checks both value and type equality?', options: ['==', '===', '!=', '!=='], correctIndex: 1, explanation: '=== compares both value and type without coercion, making it stricter than ==.' },

  { id: 'prog-medium-1', category: 'Programming', difficulty: 'Medium', question: 'What is the output of `typeof null` in JavaScript?', options: ['"object"', '"null"', '"undefined"', '"number"'], correctIndex: 0, explanation: 'JavaScript historically returns "object" for null due to its original language design quirk.' },
  { id: 'prog-medium-2', category: 'Programming', difficulty: 'Medium', question: 'Which method converts a JSON string into a JavaScript object?', options: ['JSON.parse()', 'JSON.stringify()', 'Object.assign()', 'JSON.convert()'], correctIndex: 0, explanation: 'JSON.parse() converts a valid JSON string into a JavaScript object.' },
  { id: 'prog-medium-3', category: 'Programming', difficulty: 'Medium', question: 'Which CSS property is used to make an element flexible in a flex container?', options: ['display: block', 'align-items', 'justify-content', 'flex: 1'], correctIndex: 3, explanation: 'The flex property applies flexbox sizing behavior to a child element within a flex container.' },
  { id: 'prog-medium-4', category: 'Programming', difficulty: 'Medium', question: 'What does the acronym API stand for?', options: ['Application Program Interface', 'Advanced Protocol Integration', 'Automated Process Identity', 'Application Processing Instruction'], correctIndex: 0, explanation: 'API stands for Application Programming Interface, which defines how software components interact.' },
  { id: 'prog-medium-5', category: 'Programming', difficulty: 'Medium', question: 'Which HTML element represents the main content of a document?', options: ['<section>', '<main>', '<article>', '<div>'], correctIndex: 1, explanation: '<main> identifies the primary content of a document and is important for accessibility.' },

  { id: 'prog-hard-1', category: 'Programming', difficulty: 'Hard', question: 'Which approach is commonly used to avoid callback hell in JavaScript?', options: ['Promises', 'CSS variables', 'Inline styles', 'Template literals'], correctIndex: 0, explanation: 'Promises and async/await help manage asynchronous code more cleanly than nested callbacks.' },
  { id: 'prog-hard-2', category: 'Programming', difficulty: 'Hard', question: 'What is a closure in JavaScript?', options: ['A function that closes a loop', 'A function that can access outer variables even after outer execution ends', 'A method for validating forms', 'A CSS animation'], correctIndex: 1, explanation: 'A closure gives a function access to variables from its lexical scope even after that scope has finished executing.' },
  { id: 'prog-hard-3', category: 'Programming', difficulty: 'Hard', question: 'Which algorithm has O(log n) time complexity for searching a sorted array?', options: ['Linear search', 'Binary search', 'Bubble sort', 'Depth-first search'], correctIndex: 1, explanation: 'Binary search repeatedly halves the search space, reducing complexity to logarithmic time.' },
  { id: 'prog-hard-4', category: 'Programming', difficulty: 'Hard', question: 'Which JavaScript keyword is used to pause the execution of an async function until a Promise resolves?', options: ['await', 'yield', 'suspend', 'defer'], correctIndex: 0, explanation: 'await pauses async function execution until the Promise settles, then resumes execution.' },
  { id: 'prog-hard-5', category: 'Programming', difficulty: 'Hard', question: 'What is the purpose of the `use strict` directive?', options: ['It enables CSS animations', 'It prevents accidental global variables and other unsafe behaviors', 'It adds type checking to JavaScript', 'It optimizes loops'], correctIndex: 1, explanation: '`use strict` enables stricter parsing and error handling in JavaScript to reduce silent failures.' },

  { id: 'cs-easy-1', category: 'Computer Science', difficulty: 'Easy', question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Central Program Utility', 'Computer Power Unit', 'Control Processing Unit'], correctIndex: 0, explanation: 'CPU is the Central Processing Unit, which executes instructions in a computer.' },
  { id: 'cs-easy-2', category: 'Computer Science', difficulty: 'Easy', question: 'Which data structure follows the Last In, First Out principle?', options: ['Queue', 'Stack', 'Tree', 'Graph'], correctIndex: 1, explanation: 'A stack follows LIFO, meaning the most recently added item is removed first.' },
  { id: 'cs-easy-3', category: 'Computer Science', difficulty: 'Easy', question: 'What is the binary representation of the decimal number 5?', options: ['101', '010', '100', '111'], correctIndex: 0, explanation: '5 in binary is 101 because 4 + 1 = 5.' },
  { id: 'cs-easy-4', category: 'Computer Science', difficulty: 'Easy', question: 'Which of these is a primary memory component?', options: ['Hard drive', 'RAM', 'USB drive', 'Monitor'], correctIndex: 1, explanation: 'RAM is volatile memory used for active processes and temporary data storage.' },
  { id: 'cs-easy-5', category: 'Computer Science', difficulty: 'Easy', question: 'What is the purpose of an operating system?', options: ['To store files permanently', 'To manage hardware and software resources', 'To power the monitor', 'To create documents'], correctIndex: 1, explanation: 'Operating systems coordinate between hardware, software, and user tasks.' },

  { id: 'cs-medium-1', category: 'Computer Science', difficulty: 'Medium', question: 'Which sorting algorithm repeatedly compares adjacent elements and swaps them if needed?', options: ['Quick sort', 'Merge sort', 'Bubble sort', 'Heap sort'], correctIndex: 2, explanation: 'Bubble sort repeatedly compares adjacent pairs and swaps them until the list is ordered.' },
  { id: 'cs-medium-2', category: 'Computer Science', difficulty: 'Medium', question: 'What is the time complexity of binary search in a sorted array?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], correctIndex: 1, explanation: 'Binary search halves the search space each step, resulting in logarithmic time complexity.' },
  { id: 'cs-medium-3', category: 'Computer Science', difficulty: 'Medium', question: 'Which network device connects multiple devices within a local network?', options: ['Router', 'Switch', 'Modem', 'Bridge'], correctIndex: 1, explanation: 'A switch forwards data packets between devices on the same local network efficiently.' },
  { id: 'cs-medium-4', category: 'Computer Science', difficulty: 'Medium', question: 'What is a cache used for?', options: ['To encrypt data', 'To store frequently accessed data for faster retrieval', 'To replace RAM entirely', 'To connect Wi-Fi devices'], correctIndex: 1, explanation: 'A cache keeps frequently used information closer to the processor to reduce access delays.' },
  { id: 'cs-medium-5', category: 'Computer Science', difficulty: 'Medium', question: 'Which of the following is an example of a compile-time error?', options: ['Runtime crash', 'Syntax error', 'Logic bug', 'Timeout'], correctIndex: 1, explanation: 'A syntax error is detected during compilation or parsing before execution begins.' },

  { id: 'cs-hard-1', category: 'Computer Science', difficulty: 'Hard', question: 'What does the Big O notation O(n²) usually indicate?', options: ['Constant time processing', 'Quadratic growth relative to input size', 'Logarithmic efficiency', 'No dependency on input size'], correctIndex: 1, explanation: 'O(n²) means performance grows quadratically as input size increases.' },
  { id: 'cs-hard-2', category: 'Computer Science', difficulty: 'Hard', question: 'Which of the following is a problem solved by dynamic programming?', options: ['Bitwise shifting', 'Optimal substructure problems', 'HTML parsing', 'Network routing only'], correctIndex: 1, explanation: 'Dynamic programming is ideal for optimization problems that have overlapping subproblems and optimal substructure.' },
  { id: 'cs-hard-3', category: 'Computer Science', difficulty: 'Hard', question: 'What is a deadlock in concurrent systems?', options: ['A process that runs too fast', 'A state where two or more processes wait on each other indefinitely', 'A hardware failure', 'A memory leak'], correctIndex: 1, explanation: 'Deadlock occurs when processes are blocked waiting for resources held by each other.' },
  { id: 'cs-hard-4', category: 'Computer Science', difficulty: 'Hard', question: 'Which protocol is used to securely transfer data over the internet?', options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'], correctIndex: 2, explanation: 'HTTPS adds TLS or SSL encryption to secure HTTP transmissions.' },
  { id: 'cs-hard-5', category: 'Computer Science', difficulty: 'Hard', question: 'In a tree, what is the node with no parent called?', options: ['Leaf', 'Root', 'Ancestor', 'Branch'], correctIndex: 1, explanation: 'The root is the top-most node in a tree and has no parent.' },

  { id: 'science-easy-1', category: 'Science', difficulty: 'Easy', question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Mercury'], correctIndex: 1, explanation: 'Mars appears reddish due to iron oxide, or rust, on its surface.' },
  { id: 'science-easy-2', category: 'Science', difficulty: 'Easy', question: 'What force keeps planets in orbit around the Sun?', options: ['Magnetism', 'Gravity', 'Friction', 'Electricity'], correctIndex: 1, explanation: 'Gravity is the force that attracts masses and keeps planets in orbit around the Sun.' },
  { id: 'science-easy-3', category: 'Science', difficulty: 'Easy', question: 'Which gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'], correctIndex: 2, explanation: 'Plants absorb carbon dioxide during photosynthesis and release oxygen.' },
  { id: 'science-easy-4', category: 'Science', difficulty: 'Easy', question: 'What is the boiling point of water at sea level?', options: ['50°C', '100°C', '120°C', '80°C'], correctIndex: 1, explanation: 'Water boils at 100°C at standard atmospheric pressure and sea level.' },
  { id: 'science-easy-5', category: 'Science', difficulty: 'Easy', question: 'What part of the cell contains genetic material?', options: ['Cytoplasm', 'Nucleus', 'Membrane', 'Vacuole'], correctIndex: 1, explanation: 'The nucleus houses most of the cell’s genetic material in the form of DNA.' },

  { id: 'science-medium-1', category: 'Science', difficulty: 'Medium', question: 'Which organ is primarily responsible for pumping blood around the body?', options: ['Lungs', 'Heart', 'Brain', 'Liver'], correctIndex: 1, explanation: 'The heart pumps blood through the circulatory system to deliver oxygen and nutrients.' },
  { id: 'science-medium-2', category: 'Science', difficulty: 'Medium', question: 'What is the pH of a neutral solution?', options: ['0', '7', '10', '14'], correctIndex: 1, explanation: 'A neutral solution has a pH of 7, such as pure water.' },
  { id: 'science-medium-3', category: 'Science', difficulty: 'Medium', question: 'Which type of energy is stored in a stretched rubber band?', options: ['Thermal energy', 'Kinetic energy', 'Elastic potential energy', 'Nuclear energy'], correctIndex: 2, explanation: 'A stretched rubber band stores elastic potential energy that can be released as kinetic energy.' },
  { id: 'science-medium-4', category: 'Science', difficulty: 'Medium', question: 'Which process converts a liquid into a gas?', options: ['Condensation', 'Evaporation', 'Freezing', 'Sublimation'], correctIndex: 1, explanation: 'Evaporation is the process by which a liquid transforms into a gas.' },
  { id: 'science-medium-5', category: 'Science', difficulty: 'Medium', question: 'What is the speed of light in a vacuum?', options: ['300,000 km/s', '30,000 km/s', '3,000 km/s', '300 km/s'], correctIndex: 0, explanation: 'Light travels at about 300,000 kilometers per second in a vacuum.' },

  { id: 'science-hard-1', category: 'Science', difficulty: 'Hard', question: 'Which law states that every action has an equal and opposite reaction?', options: ['Newton’s First Law', 'Newton’s Second Law', 'Newton’s Third Law', 'Ohm’s Law'], correctIndex: 2, explanation: 'Newton’s Third Law states that for every action force, there is an equal and opposite reaction force.' },
  { id: 'science-hard-2', category: 'Science', difficulty: 'Hard', question: 'What is the primary source of energy for Earth’s climate system?', options: ['The Moon', 'The Sun', 'Volcanoes', 'Earth’s core'], correctIndex: 1, explanation: 'The Sun is the main energy source driving Earth’s climate and weather systems.' },
  { id: 'science-hard-3', category: 'Science', difficulty: 'Hard', question: 'Which blood cells are responsible for transporting oxygen?', options: ['Platelets', 'White blood cells', 'Red blood cells', 'Plasma cells'], correctIndex: 2, explanation: 'Red blood cells contain hemoglobin, which binds oxygen and carries it through the body.' },
  { id: 'science-hard-4', category: 'Science', difficulty: 'Hard', question: 'What is the function of mitochondria in cells?', options: ['Protein synthesis', 'Energy production', 'Storage of water', 'Cell division'], correctIndex: 1, explanation: 'Mitochondria generate ATP, which provides energy for cellular processes.' },
  { id: 'science-hard-5', category: 'Science', difficulty: 'Hard', question: 'Which element has the chemical symbol Au?', options: ['Silver', 'Gold', 'Argon', 'Aluminum'], correctIndex: 1, explanation: 'Au is the chemical symbol for gold, derived from the Latin word aurum.' },

  { id: 'gk-easy-1', category: 'General Knowledge', difficulty: 'Easy', question: 'Which ocean is the largest on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], correctIndex: 2, explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.' },
  { id: 'gk-easy-2', category: 'General Knowledge', difficulty: 'Easy', question: 'How many continents are there on Earth?', options: ['5', '6', '7', '8'], correctIndex: 2, explanation: 'There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia, and South America.' },
  { id: 'gk-easy-3', category: 'General Knowledge', difficulty: 'Easy', question: 'Which language has the most native speakers worldwide?', options: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'], correctIndex: 1, explanation: 'Mandarin Chinese has more native speakers than any other language.' },
  { id: 'gk-easy-4', category: 'General Knowledge', difficulty: 'Easy', question: 'Which of these is a primary color?', options: ['Green', 'Orange', 'Blue', 'Purple'], correctIndex: 2, explanation: 'Blue is one of the primary colors in the classic additive color model.' },
  { id: 'gk-easy-5', category: 'General Knowledge', difficulty: 'Easy', question: 'Who wrote the play “Romeo and Juliet”?', options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Oscar Wilde'], correctIndex: 1, explanation: 'William Shakespeare wrote Romeo and Juliet, one of the most famous plays in literature.' },

  { id: 'gk-medium-1', category: 'General Knowledge', difficulty: 'Medium', question: 'Which country hosted the 2016 Summer Olympics?', options: ['China', 'Brazil', 'Japan', 'United Kingdom'], correctIndex: 1, explanation: 'The 2016 Summer Olympics were held in Rio de Janeiro, Brazil.' },
  { id: 'gk-medium-2', category: 'General Knowledge', difficulty: 'Medium', question: 'Which instrument has 88 keys?', options: ['Violin', 'Piano', 'Flute', 'Guitar'], correctIndex: 1, explanation: 'A standard piano has 88 keys, spanning multiple octaves.' },
  { id: 'gk-medium-3', category: 'General Knowledge', difficulty: 'Medium', question: 'What is the capital city of Canada?', options: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver'], correctIndex: 2, explanation: 'Ottawa is the capital city of Canada.' },
  { id: 'gk-medium-4', category: 'General Knowledge', difficulty: 'Medium', question: 'Which empire built Machu Picchu?', options: ['Roman Empire', 'Ottoman Empire', 'Inca Empire', 'Mughal Empire'], correctIndex: 2, explanation: 'Machu Picchu was built by the Inca civilization in present-day Peru.' },
  { id: 'gk-medium-5', category: 'General Knowledge', difficulty: 'Medium', question: 'Which desert is the largest hot desert in the world?', options: ['Gobi', 'Kalahari', 'Sahara', 'Arabian'], correctIndex: 2, explanation: 'The Sahara is the world’s largest hot desert.' },

  { id: 'gk-hard-1', category: 'General Knowledge', difficulty: 'Hard', question: 'Which artist painted the ceiling of the Sistine Chapel?', options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'], correctIndex: 1, explanation: 'Michelangelo painted the ceiling of the Sistine Chapel between 1508 and 1512.' },
  { id: 'gk-hard-2', category: 'General Knowledge', difficulty: 'Hard', question: 'Which year did the first moon landing occur?', options: ['1965', '1969', '1972', '1959'], correctIndex: 1, explanation: 'Apollo 11 landed on the Moon in 1969, marking the first crewed moon landing.' },
  { id: 'gk-hard-3', category: 'General Knowledge', difficulty: 'Hard', question: 'What is the smallest prime number?', options: ['0', '1', '2', '3'], correctIndex: 2, explanation: '2 is the smallest prime number because it has exactly two positive divisors: 1 and itself.' },
  { id: 'gk-hard-4', category: 'General Knowledge', difficulty: 'Hard', question: 'Which country has the most time zones?', options: ['France', 'United States', 'Russia', 'Australia'], correctIndex: 0, explanation: 'France has the most time zones due to its overseas territories, giving it more zones than any other country.' },
  { id: 'gk-hard-5', category: 'General Knowledge', difficulty: 'Hard', question: 'What is the longest river in the world?', options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'], correctIndex: 0, explanation: 'The Amazon River is generally considered the longest river in the world by length, though the Nile is often cited in older sources.' },
];

const CATEGORY_META = {
  Programming: {
    color: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(192, 132, 252, 0.8))',
    description: 'Code, logic, algorithms, and all things digital.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8 3 12l5 4"></path><path d="m16 8 5 4-5 4"></path><path d="m14 4-4 16"></path></svg>',
    questionCount: 15,
  },
  'Computer Science': {
    color: 'linear-gradient(135deg, rgba(34, 211, 238, 0.8), rgba(59, 130, 246, 0.82))',
    description: 'Systems thinking, data structures, and networks.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8"></path><path d="M12 16v4"></path></svg>',
    questionCount: 15,
  },
  Science: {
    color: 'linear-gradient(135deg, rgba(52, 211, 153, 0.8), rgba(34, 197, 94, 0.75))',
    description: 'Explore space, biology, chemistry, and nature.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20"></path><path d="M3 12h18"></path><circle cx="12" cy="12" r="8"></circle></svg>',
    questionCount: 15,
  },
  'General Knowledge': {
    color: 'linear-gradient(135deg, rgba(236, 72, 153, 0.82), rgba(251, 146, 60, 0.82))',
    description: 'Broad reasoning, culture, history, and world facts.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v4"></path><path d="M6 7h12"></path><path d="M5 12h14"></path><path d="M7 19h10"></path></svg>',
    questionCount: 15,
  },
};

const state = {
  currentView: 'landing',
  selectedCategory: null,
  selectedDifficulty: 'Easy',
  requestedQuestionCount: 7,
  quizQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  answeredQuestion: false,
  timerId: null,
  timerSecondsLeft: 0,
  timerDuration: 0,
  questionStartedAt: 0,
  quizStartAt: 0,
  latestResult: null,
  soundEnabled: false,
  confirmAction: null,
};

const app = {
  screens: document.querySelectorAll('.screen'),
  navButtons: document.querySelectorAll('.nav-link, .text-button, [data-action], [data-view]'),
  landingCategoryGrid: document.getElementById('landing-category-grid'),
  categoryGrid: document.getElementById('category-grid'),
  difficultyGrid: document.getElementById('difficulty-grid'),
  questionCount: document.getElementById('question-count'),
  questionCountValue: document.getElementById('question-count-value'),
  startQuizButton: document.getElementById('start-quiz-button'),
  questionCounter: document.getElementById('question-counter'),
  scoreDisplay: document.getElementById('score-display'),
  progressBar: document.getElementById('progress-bar-fill'),
  timerRing: document.getElementById('timer-ring'),
  timerSeconds: document.getElementById('timer-seconds'),
  questionText: document.getElementById('question-text'),
  answerGrid: document.getElementById('answer-grid'),
  feedbackBox: document.getElementById('feedback-box'),
  nextQuestionButton: document.getElementById('next-question-button'),
  quitQuizButton: document.getElementById('quit-quiz-button'),
  quizCategoryLabel: document.getElementById('quiz-category-label'),
  quizDifficultyLabel: document.getElementById('quiz-difficulty-label'),
  finalScore: document.getElementById('final-score'),
  finalScorePercent: document.getElementById('final-score-percent'),
  correctCount: document.getElementById('correct-count'),
  incorrectCount: document.getElementById('incorrect-count'),
  skippedCount: document.getElementById('skipped-count'),
  totalTime: document.getElementById('total-time'),
  avgResponseTime: document.getElementById('avg-response-time'),
  performanceMessage: document.getElementById('performance-message'),
  resultsScoreRing: document.getElementById('results-score-ring'),
  answerBreakdown: document.getElementById('answer-breakdown'),
  playAgainButton: document.getElementById('play-again-button'),
  changeCategoryButton: document.getElementById('change-category-button'),
  reviewAnswersButton: document.getElementById('review-answers-button'),
  toast: document.getElementById('toast'),
  modal: document.getElementById('confirm-modal'),
  modalTitle: document.getElementById('modal-title'),
  modalMessage: document.getElementById('modal-message'),
  modalCancel: document.getElementById('modal-cancel'),
  modalConfirm: document.getElementById('modal-confirm'),
  soundToggle: document.getElementById('sound-toggle'),
  displayNameInput: document.getElementById('display-name'),
  leaderboardBody: document.getElementById('leaderboard-body'),
  saveScoreButton: document.getElementById('save-score-button'),
  clearHistoryButton: document.getElementById('clear-history-button'),
  personalStats: document.getElementById('personal-stats'),
};

function init() {
  buildCategoryCards();
  buildDifficultyCards();
  bindGlobalEvents();
  applyStoredDisplayName();
  renderLeaderboard();
  renderPersonalStats();
  updateQuestionSlider();
  setView('landing');
  showToast('Welcome back to QUIZ MASTER.', 'success', 2500);
  document.body.classList.add('loaded');
}

function bindGlobalEvents() {
  document.addEventListener('click', (event) => {
    const actionTarget = event.target.closest('[data-action]');
    if (actionTarget) {
      handleAction(actionTarget.dataset.action);
      return;
    }

    const viewTarget = event.target.closest('[data-view]');
    if (viewTarget) {
      setView(viewTarget.dataset.view);
      return;
    }

    const answerButton = event.target.closest('.answer-card');
    if (answerButton) {
      selectAnswer(Number(answerButton.dataset.index));
      return;
    }

    const categoryButton = event.target.closest('.category-card-btn');
    if (categoryButton) {
      selectCategory(categoryButton.dataset.category);
    }

    const difficultyButton = event.target.closest('.difficulty-card');
    if (difficultyButton) {
      state.selectedDifficulty = difficultyButton.dataset.difficulty;
      renderDifficultyCards();
    }
  });

  app.startQuizButton.addEventListener('click', () => startQuiz());
  app.nextQuestionButton.addEventListener('click', goToNextQuestion);
  app.quitQuizButton.addEventListener('click', () => confirmAction('quitQuiz'));
  app.playAgainButton.addEventListener('click', () => {
    state.selectedDifficulty = 'Easy';
    renderDifficultyCards();
    setView('category');
  });
  app.changeCategoryButton.addEventListener('click', () => setView('category'));
  app.reviewAnswersButton.addEventListener('click', () => {
    const reviewElement = document.getElementById('answer-breakdown');
    reviewElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  app.questionCount.addEventListener('input', updateQuestionSlider);
  app.soundToggle.addEventListener('click', toggleSound);
  app.saveScoreButton.addEventListener('click', saveCurrentScore);
  app.clearHistoryButton.addEventListener('click', () => confirmAction('clearLeaderboard'));

  app.modalCancel.addEventListener('click', closeModal);
  app.modalConfirm.addEventListener('click', () => {
    if (state.confirmAction) {
      if (state.confirmAction === 'quitQuiz') {
        stopTimer();
        state.quizQuestions = [];
        state.userAnswers = [];
        setView('landing');
      }

      if (state.confirmAction === 'clearLeaderboard') {
        clearLeaderboard();
      }
    }
    closeModal();
    state.confirmAction = null;
  });

  document.addEventListener('keydown', (event) => {
    const keyMap = {
      '1': 0,
      '2': 1,
      '3': 2,
      '4': 3,
    };

    if (state.currentView === 'quiz') {
      const numericIndex = keyMap[event.key];
      if (typeof numericIndex === 'number') {
        event.preventDefault();
        selectAnswer(numericIndex);
      }

      if (event.key === 'Enter' && state.answeredQuestion && state.currentQuestionIndex < state.quizQuestions.length - 1) {
        goToNextQuestion();
      }
    }
  });
}

function handleAction(actionName) {
  switch (actionName) {
    case 'start-quiz':
      if (!state.selectedCategory) {
        state.selectedCategory = 'Programming';
      }
      setView('category');
      break;
    case 'back-to-category':
      setView('category');
      break;
    default:
      break;
  }
}

function setView(viewName) {
  state.currentView = viewName;
  app.screens.forEach((screen) => {
    const isActive = screen.id === viewName;
    screen.classList.toggle('active', isActive);
  });

  document.querySelectorAll('.nav-link').forEach((button) => {
    const isActive = button.dataset.view === viewName;
    button.classList.toggle('active', isActive);
  });

  if (viewName === 'category' && !state.selectedCategory) {
    state.selectedCategory = 'Programming';
  }

  if (viewName === 'leaderboard') {
    renderLeaderboard();
  }
}

function buildCategoryCards() {
  const categoryEntries = Object.entries(CATEGORY_META);

  const markup = categoryEntries.map(([category, meta]) => {
    const count = getQuestionCountForCategory(category);
    const difficultyText = `3 levels • ${count} Q's`;
    return `
      <article class="category-card reveal" data-category="${category}" style="background: linear-gradient(180deg, rgba(18, 20, 38, 0.93), rgba(13, 16, 30, 0.8));">
        <div class="category-icon-wrap" style="background: ${meta.color};">
          ${meta.icon}
        </div>
        <div class="category-header">
          <h3>${category}</h3>
          <span class="difficulty-chip">${difficultyText}</span>
        </div>
        <p>${meta.description}</p>
        <div class="meta-row">
          <span>${count} available</span>
          <strong>Ready</strong>
        </div>
        <div class="category-footer">
          <span class="difficulty-chip">${Object.keys(DIFFICULTY_SETTINGS).join(' • ')}</span>
          <button class="primary-button small-button category-card-btn" data-category="${category}" type="button">Start Quiz</button>
        </div>
      </article>
    `;
  }).join('');

  app.landingCategoryGrid.innerHTML = markup;
  app.categoryGrid.innerHTML = markup;
}

function buildDifficultyCards() {
  const difficulties = Object.entries(DIFFICULTY_SETTINGS);
  app.difficultyGrid.innerHTML = difficulties.map(([name, settings]) => `
    <button class="difficulty-card ${state.selectedDifficulty === name ? 'selected' : ''}" data-difficulty="${name}" type="button">
      <h3>${name}</h3>
      <span class="timer-tag">${settings.timer}s each</span>
      <p>${name === 'Easy' ? 'Warm-up mode with more time.' : name === 'Medium' ? 'Balanced pace for steady accuracy.' : 'High-pressure challenge with tighter timing.'}</p>
    </button>
  `).join('');

  const selectedMeta = DIFFICULTY_SETTINGS[state.selectedDifficulty];
  if (selectedMeta) {
    app.questionCount.max = 10;
    app.questionCount.min = 5;
    app.questionCount.value = String(Math.min(state.requestedQuestionCount, 10));
    state.requestedQuestionCount = Number(app.questionCount.value);
    updateQuestionSlider();
  }
}

function updateQuestionSlider() {
  const value = Number(app.questionCount.value || 5);
  state.requestedQuestionCount = Math.min(value, 10);
  app.questionCount.value = String(state.requestedQuestionCount);
  app.questionCountValue.textContent = String(state.requestedQuestionCount);
}

function selectCategory(category) {
  state.selectedCategory = category;
  setView('difficulty');
  app.questionCount.value = String(Math.min(state.requestedQuestionCount || 7, 10));
  updateQuestionSlider();
  renderDifficultyCards();
}

function renderDifficultyCards() {
  buildDifficultyCards();
}

function startQuiz() {
  if (!state.selectedCategory) {
    showToast('Choose a category first.', 'error');
    setView('category');
    return;
  }

  const pool = QUESTION_BANK.filter((question) => {
    return question.category === state.selectedCategory && question.difficulty === state.selectedDifficulty;
  });

  if (!pool.length) {
    showToast('No questions are available for this category and difficulty.', 'error');
    return;
  }

  const count = Math.min(state.requestedQuestionCount, pool.length);
  state.quizQuestions = shuffleArray([...pool]).slice(0, count);
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.userAnswers = [];
  state.quizStartAt = Date.now();
  state.answeredQuestion = false;
  state.latestResult = null;

  app.quizCategoryLabel.textContent = state.selectedCategory;
  app.quizDifficultyLabel.textContent = state.selectedDifficulty;

  setView('quiz');
  loadQuestion();
}

function loadQuestion() {
  stopTimer();
  const question = state.quizQuestions[state.currentQuestionIndex];
  if (!question) {
    finishQuiz();
    return;
  }

  const total = state.quizQuestions.length;
  const percent = ((state.currentQuestionIndex + 1) / total) * 100;
  app.questionCounter.textContent = `QUESTION ${String(state.currentQuestionIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  app.progressBar.style.width = `${percent}%`;
  app.scoreDisplay.textContent = `Score: ${state.score}`;
  app.questionText.textContent = question.question;
  app.feedbackBox.className = 'feedback-box';
  app.feedbackBox.innerHTML = '';
  app.nextQuestionButton.classList.add('hidden');
  app.answerGrid.innerHTML = question.options.map((option, index) => {
    return `
      <button class="answer-card" type="button" data-index="${index}" aria-label="Answer option ${index + 1}: ${option}">
        <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
        <span class="answer-text">${option}</span>
      </button>
    `;
  }).join('');

  const timerSettings = DIFFICULTY_SETTINGS[state.selectedDifficulty];
  state.timerDuration = timerSettings.timer;
  state.timerSecondsLeft = timerSettings.timer;
  state.questionStartedAt = Date.now();
  updateTimerDisplay();
  startTimer();
}

function startTimer() {
  state.timerId = window.setInterval(() => {
    const elapsed = Math.round((Date.now() - state.questionStartedAt) / 1000);
    state.timerSecondsLeft = Math.max(0, state.timerDuration - elapsed);
    updateTimerDisplay();

    if (state.timerSecondsLeft <= 0) {
      stopTimer();
      submitAnswer(null, true);
    }
  }, 200);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerDisplay() {
  const total = state.timerDuration || 1;
  const remaining = Math.max(0, state.timerSecondsLeft);
  const progress = (remaining / total) * 100;
  app.timerSeconds.textContent = String(remaining);
  app.timerRing.style.setProperty('--timer-progress', Math.max(0, progress));
  app.timerRing.querySelector('.progress').style.stroke = remaining <= 3 ? '#fb7185' : '#22d3ee';
  const circle = app.timerRing.querySelector('.progress');
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = String(circumference);
  circle.style.strokeDashoffset = String(circumference - (circumference * Math.max(0, progress)) / 100);
}

function selectAnswer(answerIndex) {
  if (state.answeredQuestion) {
    return;
  }

  submitAnswer(answerIndex, false);
}

function submitAnswer(answerIndex, timedOut) {
  if (state.answeredQuestion) return;

  const currentQuestion = state.quizQuestions[state.currentQuestionIndex];
  state.answeredQuestion = true;
  stopTimer();

  const selectedOption = answerIndex === null ? null : currentQuestion.options[answerIndex];
  const correctOption = currentQuestion.options[currentQuestion.correctIndex];
  const isCorrect = answerIndex === currentQuestion.correctIndex;
  const elapsedSeconds = Math.max(0.1, (Date.now() - state.questionStartedAt) / 1000);

  if (isCorrect) {
    state.score += 1;
  }

  const answerRecord = {
    questionId: currentQuestion.id,
    selectedIndex: answerIndex,
    selectedAnswer: selectedOption,
    correctAnswer: correctOption,
    isCorrect,
    timedOut,
    responseTime: Number(elapsedSeconds.toFixed(2)),
    questionText: currentQuestion.question,
    explanation: currentQuestion.explanation,
  };

  state.userAnswers.push(answerRecord);

  const answerButtons = app.answerGrid.querySelectorAll('.answer-card');
  answerButtons.forEach((button, index) => {
    button.disabled = true;
    button.classList.toggle('selected', answerIndex === index);
    button.classList.toggle('correct', currentQuestion.correctIndex === index);
    button.classList.toggle('incorrect', answerIndex === index && answerIndex !== currentQuestion.correctIndex);
  });

  const isFinalAnswer = answerIndex === currentQuestion.correctIndex;
  app.feedbackBox.classList.add(isFinalAnswer ? 'correct' : 'incorrect');
  app.feedbackBox.classList.add('visible');
  app.feedbackBox.innerHTML = `
    <strong>${timedOut ? 'Time expired' : isFinalAnswer ? 'Correct answer' : 'Not quite'}</strong>
    <p>${timedOut ? 'No answer selected before the timer ran out.' : isFinalAnswer ? 'Excellent choice.' : 'The correct answer is ' + correctOption + '.'} ${currentQuestion.explanation}</p>
  `;

  if (isCorrect) {
    playTone('correct');
  } else {
    playTone('wrong');
  }

  app.scoreDisplay.textContent = `Score: ${state.score}`;
  app.nextQuestionButton.classList.remove('hidden');

  if (state.currentQuestionIndex === state.quizQuestions.length - 1) {
    app.nextQuestionButton.textContent = 'View Results';
  } else {
    app.nextQuestionButton.textContent = 'Next Question';
  }
}

function goToNextQuestion() {
  if (!state.answeredQuestion) {
    return;
  }

  if (state.currentQuestionIndex < state.quizQuestions.length - 1) {
    state.currentQuestionIndex += 1;
    state.answeredQuestion = false;
    loadQuestion();
    return;
  }

  finishQuiz();
}

function finishQuiz() {
  stopTimer();
  state.latestResult = buildResultSummary();
  renderResults(state.latestResult);
  setView('results');
  renderLeaderboard();
}

function buildResultSummary() {
  const totalQuestions = state.quizQuestions.length;
  const correct = state.userAnswers.filter((answer) => answer.isCorrect).length;
  const incorrect = state.userAnswers.filter((answer) => !answer.isCorrect && answer.selectedAnswer !== null).length;
  const skipped = state.userAnswers.filter((answer) => answer.selectedAnswer === null).length;
  const totalTimeTaken = Math.max(1, Math.round((Date.now() - state.quizStartAt) / 1000));
  const averageResponse = state.userAnswers.length ? (state.userAnswers.reduce((sum, answer) => sum + answer.responseTime, 0) / state.userAnswers.length).toFixed(1) : '0.0';
  const accuracy = totalQuestions ? Math.round((correct / totalQuestions) * 100) : 0;

  let message = 'Nice effort. A few more rounds and you’ll be in the top tier.';
  if (accuracy >= 90) message = 'Elite performance. Your instincts are sharp and your recall is exceptional.';
  else if (accuracy >= 70) message = 'Strong run. You have a disciplined, confident grasp of the material.';
  else if (accuracy >= 50) message = 'Solid work. You’re building momentum and learning quickly.';
  else if (accuracy >= 30) message = 'Good start. A second pass will sharpen your accuracy.';

  return {
    totalQuestions,
    correct,
    incorrect,
    skipped,
    accuracy,
    finalScore: `${correct} / ${totalQuestions}`,
    totalTimeTaken,
    averageResponse,
    message,
    category: state.selectedCategory,
    difficulty: state.selectedDifficulty,
  };
}

function renderResults(result) {
  const percent = result.accuracy;
  app.finalScore.textContent = result.finalScore;
  app.finalScorePercent.textContent = `${percent}%`;
  app.correctCount.textContent = String(result.correct);
  app.incorrectCount.textContent = String(result.incorrect);
  app.skippedCount.textContent = String(result.skipped);
  app.totalTime.textContent = `${result.totalTimeTaken}s`;
  app.avgResponseTime.textContent = `${result.averageResponse}s`;
  app.performanceMessage.textContent = result.message;
  app.resultsScoreRing.style.setProperty('--progress', String(percent));
  const scoreRingBackground = `conic-gradient(var(--violet) ${percent}%, rgba(255,255,255,0.08) 0)`;
  app.resultsScoreRing.style.background = scoreRingBackground;

  const rows = state.userAnswers.map((answer, index) => {
    const status = answer.isCorrect ? 'correct' : answer.selectedAnswer === null ? 'skipped' : 'incorrect';
    const selectedLabel = answer.selectedAnswer === null ? 'No answer' : answer.selectedAnswer;
    return `
      <article class="breakdown-item ${status}">
        <div class="breakdown-head">
          <strong>Q${index + 1}</strong>
          <span>${answer.isCorrect ? 'Correct' : answer.selectedAnswer === null ? 'Skipped' : 'Incorrect'}</span>
        </div>
        <p class="breakdown-answer"><strong>Question:</strong> ${answer.questionText}</p>
        <p class="breakdown-answer"><strong>Your answer:</strong> ${selectedLabel}</p>
        <p class="breakdown-answer"><strong>Correct answer:</strong> ${answer.correctAnswer}</p>
        <p class="breakdown-answer"><strong>Explanation:</strong> ${answer.explanation}</p>
      </article>
    `;
  }).join('');

  app.answerBreakdown.innerHTML = `<div class="breakdown-list">${rows}</div>`;
  updatePersonalStats();
}

function saveCurrentScore() {
  const displayName = app.displayNameInput.value.trim() || 'Anonymous Player';
  const savedName = displayName.slice(0, 20);
  localStorage.setItem(STORAGE_KEYS.name, savedName);
  app.displayNameInput.value = savedName;

  if (!state.latestResult) {
    showToast('Finish a quiz before saving your score.', 'error');
    return;
  }

  const leaderboard = getStoredLeaderboard();
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : `entry-${Date.now()}`,
    name: savedName,
    category: state.latestResult.category,
    difficulty: state.latestResult.difficulty,
    score: state.latestResult.correct,
    totalQuestions: state.latestResult.totalQuestions,
    percentage: state.latestResult.accuracy,
    submittedAt: new Date().toISOString(),
  };

  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.percentage - a.percentage || b.score - a.score);
  localStorage.setItem(STORAGE_KEYS.leaderboard, JSON.stringify(leaderboard.slice(0, 20)));
  renderLeaderboard();
  updatePersonalStats();
  showToast('Score saved to local leaderboard.', 'success');
}

function renderLeaderboard() {
  const leaderboard = getStoredLeaderboard();
  const latestName = getStoredDisplayName();
  if (latestName) {
    app.displayNameInput.value = latestName;
  }

  if (!leaderboard.length) {
    app.leaderboardBody.innerHTML = `
      <tr>
        <td colspan="6">No local results yet — complete a quiz to begin the leaderboard.</td>
      </tr>
    `;
    return;
  }

  app.leaderboardBody.innerHTML = leaderboard.slice(0, 10).map((entry, index) => {
    const isCurrent = entry.name === latestName && entry.submittedAt === leaderboard[0]?.submittedAt;
    return `
      <tr class="${isCurrent ? 'current-user' : ''}">
        <td>${index + 1}</td>
        <td>${escapeHtml(entry.name)}</td>
        <td>${escapeHtml(entry.category)}</td>
        <td>${escapeHtml(entry.difficulty)}</td>
        <td>${entry.score}/${entry.totalQuestions}</td>
        <td>${formatDate(entry.submittedAt)}</td>
      </tr>
    `;
  }).join('');
}

function renderPersonalStats() {
  const stats = getStoredStats();
  app.personalStats.innerHTML = `
    <div class="stat-box">
      <span>Quizzes</span>
      <strong>${stats.totalQuizzes}</strong>
    </div>
    <div class="stat-box">
      <span>Best score</span>
      <strong>${stats.bestScore}</strong>
    </div>
  `;
}

function updatePersonalStats() {
  const leaderboard = getStoredLeaderboard();
  const bestScore = leaderboard.reduce((max, entry) => Math.max(max, entry.score), 0);
  const totalQuizzes = leaderboard.length;
  const stats = { totalQuizzes, bestScore };

  localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(stats));
  renderPersonalStats();
}

function getStoredLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.leaderboard);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse leaderboard from localStorage', error);
    return [];
  }
}

function getStoredStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.stats);
    const parsed = raw ? JSON.parse(raw) : { totalQuizzes: 0, bestScore: 0 };
    return parsed && typeof parsed === 'object' ? parsed : { totalQuizzes: 0, bestScore: 0 };
  } catch (error) {
    console.error('Failed to parse stats from localStorage', error);
    return { totalQuizzes: 0, bestScore: 0 };
  }
}

function getStoredDisplayName() {
  return localStorage.getItem(STORAGE_KEYS.name) || '';
}

function applyStoredDisplayName() {
  const storedName = getStoredDisplayName();
  if (storedName) {
    app.displayNameInput.value = storedName;
  }
}

function clearLeaderboard() {
  localStorage.removeItem(STORAGE_KEYS.leaderboard);
  localStorage.removeItem(STORAGE_KEYS.stats);
  app.leaderboardBody.innerHTML = `
    <tr>
      <td colspan="6">Leaderboard cleared. Complete a quiz to create a fresh local record.</td>
    </tr>
  `;
  renderPersonalStats();
  showToast('Leaderboard history was cleared.', 'success');
}

function confirmAction(action) {
  state.confirmAction = action;
  const prompts = {
    quitQuiz: {
      title: 'Quit quiz?',
      message: 'Your current run will be lost and you will return to the home screen.',
    },
    clearLeaderboard: {
      title: 'Clear leaderboard history?',
      message: 'This will remove all locally saved results and personal stats from this browser.',
    },
  };

  const target = prompts[action];
  if (!target) return;

  app.modalTitle.textContent = target.title;
  app.modalMessage.textContent = target.message;
  app.modal.classList.remove('hidden');
  app.modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  app.modal.classList.add('hidden');
  app.modal.setAttribute('aria-hidden', 'true');
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  app.soundToggle.setAttribute('aria-pressed', String(state.soundEnabled));
  app.soundToggle.style.boxShadow = state.soundEnabled ? '0 0 18px rgba(34, 211, 238, 0.42)' : 'none';
  showToast(state.soundEnabled ? 'Sound enabled.' : 'Sound muted.', 'success', 1200);
}

function playTone(type) {
  if (!state.soundEnabled) return;

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const audioContext = new AudioCtx();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type === 'correct' ? 'triangle' : 'sawtooth';
    oscillator.frequency.value = type === 'correct' ? 660 : 220;
    gainNode.gain.value = 0.03;
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.12);
  } catch (error) {
    console.warn('Audio not available', error);
  }
}

function shuffleArray(items) {
  const array = [...items];
  for (let idx = array.length - 1; idx > 0; idx -= 1) {
    const j = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[j]] = [array[j], array[idx]];
  }
  return array;
}

function getQuestionCountForCategory(category) {
  return QUESTION_BANK.filter((question) => question.category === category).length;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(message, variant = 'success', duration = 2200) {
  app.toast.textContent = message;
  app.toast.className = `toast visible ${variant}`;
  clearTimeout(app.toastTimer);
  app.toastTimer = setTimeout(() => {
    app.toast.classList.remove('visible');
  }, duration);
}

init();
