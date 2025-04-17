import React from "react";
import Button from "../Components/Button";
import ThemeContext from "../Contexts/ThemeContext";

const withThemeToggle = (WrappedButton: typeof Button) => {
    return class extends React.Component{
        render(): React.ReactNode {
            return(
                <ThemeContext.Consumer>
                    {
                        (context) => context && (
                            <WrappedButton
                            onClick={context.toggleTheme}
                            theme={context.theme}
                            >
                                Toggle {context.theme === 'dark' ? 'light' : 'dark'}
                            </WrappedButton>
                        )
                    }
                </ThemeContext.Consumer>
            )
        }
    }
}

export const ThemeButton = withThemeToggle(Button);
