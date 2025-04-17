import React from "react";

//Theme type creation
export type Theme = 'light' | 'dark';

// State Type creation for Theme context
interface ThemeContextState {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextState>({
    theme: 'light',
    toggleTheme: () => {}
});
export default ThemeContext;


