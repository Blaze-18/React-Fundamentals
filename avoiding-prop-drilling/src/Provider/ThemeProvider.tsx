import ThemeContext, { Theme } from "../Contexts/ThemeContext";
import React from "react";

interface ThemeProviderStates {
    theme: Theme,
}
interface ThemeProviderProps{
    children: React.ReactNode
}

class ThemeProvider extends React.Component<ThemeProviderProps,ThemeProviderStates>{
    state: ThemeProviderStates ={
        theme: 'light',
    }
    toggleTheme = () =>{
        this.setState((prevState) => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }))
    }
    render(): React.ReactNode {
        const {theme} = this.state
        return(
            <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: this.toggleTheme,
            }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider


