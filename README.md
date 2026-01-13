# 🍅 PomoDoList

A **Todo List with built-in Pomodoro and lofi music**, designed for deep focus, simplicity, and clean frontend architecture.

This is a personal project created to practice **React, custom hooks, and separation of concerns**, with a strong focus on UX for productivity.

---

## ✨ Features

### ✅ Todo List

- Create, edit, and delete tasks
- Persistence via **localStorage** (no login required)
- **Repository Pattern** for data access (ready for a future API)

### ⏱️ Pomodoro per task

- Start a focus session directly from a task
- Dedicated Pomodoro overlay
- Clear state management (focus / break / paused)

### 🎧 Music Player (Lofi)

- Music player fully independent from the Pomodoro
- Curated **copyright-free lofi tracks**
- Controls:

  - Play / Pause
  - Next / Previous track
  - Interactive progress bar (seek)
  - Volume control (drag + mouse wheel)

- Real-time progress synced with audio playback

---

## 🧠 Architecture

The project is structured to **avoid tight coupling** and allow easy future expansion:

```
src/
├─ components/
│  ├─ musicPlayer/
│  ├─ pomodoro/
│  └─ todos/
│
├─ hooks/
│  └─ useMusicPlayer.ts
│
├─ data/
│  └─ lofiTracks.ts
│
├─ repositories/
│  ├─ TodoRepository.ts
│  └─ LocalTodoRepository.ts
│
├─ types/
│  └─ todo.ts
│
└─ utils/
   └─ storage.ts
```

### Key decisions

- **Hooks handle business logic** (audio, timers, state)
- **Components focus only on UI**
- Pomodoro and Music Player are **fully decoupled**

---

## 🛠️ Tech Stack

- React
- TypeScript
- Styled-components
- React Hooks
- LocalStorage API
- HTML Audio API

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🎯 Why This Project Exists

This project was built to go beyond simple CRUD examples and explore **real frontend problems** such as:

- Managing complex state without external libraries
- Designing reusable and decoupled components
- Handling real-time features (audio playback, timers, progress tracking)
- Applying clean architecture concepts in a frontend context

This project also serves as a **portfolio piece** to demonstrate problem-solving, architectural thinking, and attention to user experience.

---

## 🔮 Future Improvements

- Pomodoro statistics per task
- Session history
- Theme support (dark / light)
- Mobile-first layout

---

Built with focus and lofi 🎧
