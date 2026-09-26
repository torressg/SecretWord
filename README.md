# Secret Word

A word-guessing game in React: the game picks a secret word from a category and you guess it letter by letter. Words and interface are in Portuguese.

## How it plays

- A random category and word are picked (car, fruit, body, computer...)
- Guess one letter at a time; letters you already tried are shown and ignored
- You have 3 lives for wrong guesses
- Guess the whole word to score and get a new one; lose all lives and the game ends

## Stack

React (hooks: `useState`, `useEffect`, `useCallback`) · Vite

## Running

```bash
npm install
npm run dev
```
