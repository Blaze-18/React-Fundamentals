import React, { Component } from 'react'
interface ButtonProps{
    onClick: () => void,
    theme: 'light' | 'dark',
    children: React.ReactNode
}
export class Button extends Component<ButtonProps> {
    render() {
        const {theme} = this.props
        return (
        <div>
            
            <button style={{
                    backgroundColor: theme === 'dark' ? '#abb3c2' : '#EEE',
                    color: theme === 'dark' ? '#FFF' : '#000',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold'
            }}
            onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        </div>
        )
    }
}

export default Button;