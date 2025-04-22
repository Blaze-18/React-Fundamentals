# React Hooks: Essential Guide

## What Are Hooks?
Hooks are functions that let you **use state and React features** in functional components (without classes). Introduced in **React 16.8**, they simplify logic reuse and component organization.

---

## Why Use Hooks?
- **Replace classes**: Avoid `this` and lifecycle methods.
- **Reuse logic**: Share stateful logic with custom hooks (no HOCs/render props).
- **Organize code**: Group related logic (vs splitting across lifecycle methods).

---

## Core Hooks
1. **`useState`**  
   Manages local state: `const [state, setState] = useState(initialValue);`  
   *(Example: `const [count, setCount] = useState(0);`)*

2. **`useEffect`**  
   Handles side effects (API calls, subscriptions): `useEffect(() => { ... }, [deps]);`  
   *(Example: `useEffect(() => { fetchData(); }, [url]);`)*

3. **`useContext`**  
   Accesses context without nesting: `const value = useContext(MyContext);`

4. **`useRef`**  
   Refs for DOM access/persistent values: `const ref = useRef(initialValue);`  
   *(Example: `const inputRef = useRef();`)*

5. **`useReducer`**  
   State management for complex logic (Redux-style): `const [state, dispatch] = useReducer(reducer, initialState);`

6. **Optimization Hooks**  
   - `useMemo`: Memoizes expensive calculations.  
     *(Example: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`)*  
   - `useCallback`: Memoizes functions to prevent unnecessary re-renders.  

---

## Rules of Hooks
1. **Only Call Hooks at the Top Level**  
   - Not inside loops, conditions, or nested functions.  
2. **Only Call Hooks from React Functions**  
   - Functional components or custom hooks.  

*(Violations will throw errors. Use ESLint plugin `eslint-plugin-react-hooks` to enforce rules.)*

---

## Custom Hooks
Create reusable logic by combining built-in hooks:  
```javascript
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle];
}
// Usage: `const [isOn, toggleIsOn] = useToggle(false);`
