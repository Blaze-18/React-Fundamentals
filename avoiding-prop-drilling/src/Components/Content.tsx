import React, { Component } from 'react';
import ThemeContext from '../Contexts/ThemeContext';
import '../styles/no-scrollbar.css';
interface ContentProps {
    children: React.ReactNode
}
export class Content extends Component<ContentProps> {
    static contextType = ThemeContext
    declare context: React.ContextType<typeof ThemeContext>

    render() {
        const {theme} = this.context;
        return (
            <div
                style={{
                        margin: '4px',
                        backgroundColor: theme === 'light' ? 'white': 'black',
                        color: theme === 'light' ? 'black': 'white',
                    }}
            >
                    <div className='m-3 p-4 border-2 w-90 h-60 rounded-2xl overflow-auto no-scrollbar' //Not working
                        style={{
                            borderColor: theme === 'light' ? 'black': 'white',
                        }}
                    >
                        <div>
                            {this.props.children}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Content;