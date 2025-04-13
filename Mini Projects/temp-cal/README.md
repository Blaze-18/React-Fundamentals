# Temperature Converter (Lifting State Up in React)

## About the Project
This is a simple temperature converter built with React and TypeScript. It allows users to input temperatures in Celsius or Fahrenheit, and the corresponding value is automatically calculated and displayed. The project demonstrates the concept of **lifting state up**, a crucial pattern in React for managing shared state between multiple components.

## Lifting State Up in React
Lifting state up is a common pattern in React where the state of child components is managed in a parent component. Instead of each child maintaining its own state, the parent holds the state and updates it via props. This ensures data consistency and keeps components in sync.

### Why is it Necessary?
- **Avoids duplicate state**: Keeping state in multiple components can lead to inconsistencies.
- **Improves component communication**: Sibling components can share and reflect changes seamlessly.
- **Enhances reusability**: Components remain stateless and reusable, while the parent manages logic.

## Project Structure
```
📦 temperature-converter
├── 📄 Calculator.tsx  (Parent Component: Manages state and handles conversions)
├── 📄 TempInput.tsx   (Child Component: Handles input fields for Celsius & Fahrenheit)
├── 📄 Convertor.tsx   (Utility Class: Performs temperature conversions)
├── 📄 README.md       (Project Documentation)
```

## Key Features
- Converts between **Celsius** and **Fahrenheit** in real-time.
- Displays a warning if the temperature reaches the boiling point.
- Uses **class-based components** with TypeScript.
- Styled with **Tailwind CSS**.

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/temperature-converter.git
   ```
2. Navigate to the project folder:
   ```sh
   cd temperature-converter
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Technologies Used
- **React** (with TypeScript)
- **Tailwind CSS**

## Future Improvements
- Add **Kelvin** conversion.
- Implement **dark mode** for UI.
- Allow decimal precision selection.

---
This project is a great starting point to understand **state management** in React. Happy coding!

