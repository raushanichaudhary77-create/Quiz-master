# QUIZ MASTER

QUIZ MASTER is a polished futuristic quiz app built with HTML5, CSS3, and vanilla JavaScript. It includes category-based question sets, selectable difficulty tiers, countdown timers, animated quiz flow, and a local leaderboard powered by `localStorage`.

## Features

- Premium dark-mode interface with neon accents and cinematic card styling
- Four quiz categories: Programming, Computer Science, Science, and General Knowledge
- Three difficulty levels: Easy, Medium, and Hard
- Countdown timer per question with auto-submit for unanswered questions
- Keyboard controls for answers using keys `1` to `4`
- Detailed results summary with accuracy, score, skipped counts, and average response time
- Local leaderboard and personal stats stored in the browser only
- Responsive layout for desktop, tablet, and mobile devices
- Reduced-motion support and accessible focus states

## Project Structure

```text
quiz-master/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Open the project folder in a browser directly, or serve it with a local static server.
2. Example using Python:

```bash
cd quiz-master
python -m http.server 8000
```

3. Open `http://localhost:8000` in the browser.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage
- Google Fonts
- Lucide icons (falls back gracefully if unavailable)

## Notes

- Leaderboard entries are stored locally in the browser and are not shared across devices.
- The app does not use a backend or any paid API.
- Question data is kept in a clearly separated section inside `script.js`.
