import React, { Component } from 'react'
type HoverState = {
    count: number
}
export class HoverCounter extends Component<object, HoverState> {
    constructor(props: object){
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCounter = () => {
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    render(): React.ReactNode {
        const {count} = this.state;
        return (
            <div className='flex justify-items-center'>
                <h1 className='text-2xl text-blue-600 font-bold ' onMouseOver={this.incrementCounter}>
                    Hoverd {count} times
                </h1>
            </div>
        )
    }
}

export default HoverCounter