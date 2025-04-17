import React, { Component } from 'react'
type ClickState = {
    count: number
}
export class ClickCounter extends Component<object, ClickState> {
    
    constructor(props: object){
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCounter = () =>{
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    render() : React.ReactNode{
        const {count} = this.state;
        return (
            <div className='flex justify-items-center'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
                    dark:hover:bg-blue-700 focus:outline-black dark:focus:ring-black"
                    onClick={this.incrementCounter}
                >
                    Clicked {count} Times
                </button>
            </div>
        )
    }
}

export default ClickCounter