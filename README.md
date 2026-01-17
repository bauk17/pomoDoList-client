# 🍅 PomoDoList

A **Todo List with built-in Pomodoro and lofi music**, designed for deep focus, simplicity, and clean frontend architecture.

This is a personal project created to practice **React, custom hooks, Context API, and separation of concerns**, with a strong focus on **state management and real-world frontend architecture**.

---

## ✨ Features

### ✅ Todo List

* Create, edit, and delete tasks
* Persistence via **localStorage** (no login required)
* **Repository Pattern** for data access (ready for a future API)

---

### ⏱️ Pomodoro per task

* Start a focus session directly from a task
* Dedicated Pomodoro overlay
* Clear state management:

  * focus
  * break
  * paused
* Pomodoro logic fully isolated in a custom hook

---

### 🎨 Dynamic Pomodoro Themes

* Predefined theme presets for:

  * Focus mode
  * Break mode
* Theme can be changed **in real time**
* No page refresh required
* Theme state managed globally via **React Context**
* Automatic re-render using `styled-components` `ThemeProvider`
* User preferences persisted via **localStorage**

---

### 🎧 Music Player (Lofi)

* Music player fully independent from Pomodoro and theme system
* Curated **copyright-free lofi tracks**
* Controls:

  * Play / Pause
  * Next / Previous track
  * Interactive progress bar (seek)
  * Volume control (drag + mouse wheel)
* Real-time progress synced with audio playback

---

## 🧠 Architecture

The project is structured to **scale without refactoring** and to keep responsibilities clearly separated:

```
src/
├─ components/
│  ├─ musicPlayer/
│  ├─ pomodoro/
│  └─ todos/
│
├─ context/
│  └─ PomodoroThemeContext.tsx
│
├─ hooks/
│  ├─ usePomodoro.ts
│  ├─ usePomodoroTheme.ts
│  └─ useMusicPlayer.ts
│
├─ data/
│ └─ lofiTracks.ts
│
├─ themes/
│  ├─ defaultPomodoroThemes.ts
│  └─ pomodoroPresets.ts
│
├─ repositories/
│  ├─ TodoRepository.ts
│  └─ LocalTodoRepository.ts
│
├─ types/
│  ├─ todo.ts
│  ├─ Pomodoro.ts
│  └─ PomodoroTheme.ts
│
└─ utils/
   └─ storage.ts
```

---

## 🧩 Key Architectural Decisions

* **Context API** used for global theme state
* Theme logic centralized in `PomodoroThemeProvider`
* Components never mutate theme directly
* UI reacts automatically to state changes
* `styled-components` ThemeProvider receives a reactive theme object
* Pomodoro, Theme, and Music Player are **fully decoupled**
* Hooks encapsulate business logic, components render UI only

This avoids:

* Manual refreshes
* Prop drilling
* State duplication
* Tight coupling between features

---

## 🛠️ Tech Stack

* React
* TypeScript
* Styled-components
* React Context API
* Custom Hooks
* LocalStorage API
* HTML Audio API

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🎯 Why This Project Exists

This project was built to go beyond simple CRUD examples and explore **real frontend engineering problems**, such as:

* Managing global state without external libraries
* Designing reactive UI systems (themes, modes, overlays)
* Separating domain logic from presentation
* Persisting user preferences correctly
* Building scalable architecture in React

This project also serves as a **portfolio piece** to demonstrate architectural thinking, clean state management, and practical frontend decision-making.

---

## 🔮 Future Improvements

* Pomodoro statistics per task
* Session history
* Mobile-first layout
* Persist user preferences

---

Built with focus and lofi 🎧
