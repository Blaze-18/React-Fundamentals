# 🛑 Avoiding Prop Drilling with React Patterns

This project demonstrates how to avoid **prop drilling** in a React application using two powerful React design patterns:

- **Context API** for managing theme across the app
- **Render Props Pattern** for fetching animal facts via an API call to an LLM (DeepSeek R1 via OpenRouter)

## 🚀 Features

- Toggle between light and dark themes using a button powered by a **Higher-Order Component (HOC)** and Context API.
- Fetch interesting facts about **cats** and **dogs** from the **DeepSeek R1** language model via OpenRouter API.
- Demonstrates usage of:
  - React **Context API**
  - **Higher Order Components (HOC)**
  - **Render Props Pattern**
  - TypeScript + React best practices

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- 💅 TailwindCSS (optional, for styling)
- 🌐 OpenRouter API using the `deepseek-ai/deepseek-r1` model

---

## 📁 Project Overview

### 1. Theme Toggle with Context + HOC

- `ThemeContext.tsx` provides light/dark mode context.
- `withThemeToggle.tsx` is a Higher-Order Component (HOC) that injects the toggle functionality.
- `ThemeButton` is created by wrapping a `Button` component with the HOC.

### 2. Animal Facts with Render Props Pattern

- `AnimalFact.tsx` contains a class-based component that uses the Render Props Pattern.
- It accepts a `render` prop that gives access to:
  - `fact` - the returned animal fact
  - `loading` - loading state
  - `error` - error message if any
  - `animal` - current animal
  - `fetchFact(animal)` - function to fetch facts

---

## 🧪 API Used

**OpenRouter API**
- Base URL: `https://openrouter.ai/api/v1`
- Model: `deepseek-ai/deepseek-r1`

```ts
await this.client.chat.completions.create({
  model: "deepseek-ai/deepseek-r1",
  messages: [{ role: "user", content: "Give me some interesting facts about cats." }],
});
