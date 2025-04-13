# React Render Props Pattern Exercise

## 🎯 What is the Render Props Pattern?

The **Render Props** pattern is an advanced React technique for **sharing logic** between components by passing a **function as a prop** (typically named `render` or `children`). This function returns JSX, allowing the parent component to control rendering while the child component handles the logic.

### Why Use It?
- **Reusability**: Share logic (data fetching, mouse tracking) across multiple components
- **Separation of Concerns**: Keep logic and presentation decoupled
- **Flexibility**: Same component can render completely different UIs
- **Avoids Prop Drilling**: No need to pass props through multiple layers

## 🏋️ Exercise: Product List with Render Props

### 📝 Task
Create a reusable `ProductList` component that:
1. Manages **product data fetching**
2. Handles **loading** and **error** states
3. Uses **render props** to let parent components decide:
   - How to display products (simple list vs detailed grid)
   - What loading/error states should look like

## 🚀 Project Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm/yarn/pnpm

### 1. Create Vite Project
```bash
npm create vite@latest render-props-demo -- --template react-ts
cd render-props-demo