# Todo List — React

A React task-list application organized around a dedicated todo page and reusable components. The project explores component separation, API communication, and loading additional items on demand.

## Features and implementation notes

- A dedicated todo page composed through the main React application.
- Separate components for adding a todo, rendering a todo list, and displaying individual todo items.
- An Axios dependency for HTTP requests.
- A load-more interaction rather than continuous scroll-triggered loading.
- Refactoring notes in [DECESIONS.md](./DECESIONS.md) documenting choices made during development.

> Check the current application and service configuration to confirm which operations are available in the configured environment. This README avoids claiming unverified production or deployment behavior.

## Tech stack

- React 18
- JavaScript
- Axios
- Create React App / `react-scripts`
- React Testing Library and Jest

## Getting started

### Prerequisites

- Node.js and npm, or a compatible Node.js package manager.

### Install dependencies

Using npm:

```bash
npm install
```

Or, if you prefer Yarn and the lockfile is current:

```bash
yarn install
```

### Start the development server

```bash
npm start
```

The Create React App development server normally runs at `http://localhost:3000`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Create a production build |

## Project structure

```text
src/
├── components/
│   ├── AddTodo/
│   ├── TodoItem/
│   └── TodoList/
├── pages/
│   └── TodoPage/
├── services/
├── App.js
└── index.js
```

## Engineering decisions

The accompanying decision notes describe choices such as keeping todo-list rendering reusable, separating page-level logic, memoizing the list after a refactor, avoiding an extra form library for a single input, and using a load-more button to reduce scroll-triggered calls.

## Next improvements

- Add screenshots or a short demo.
- Document the expected API and provide a local/mock mode if the external service is unavailable.
- Add tests for creating, loading, and rendering todos.
- Document empty, loading, and error states.
- Add a license if you intend to distribute the project under a specific open-source license.
