
import React, { ComponentType } from 'react';
type CounterState = {
    count: number
}
type WithCounterProps = {
    count: number;
    incrementCounter: () => void;
};

export const WithCounter = (OriginalComponent: ComponentType<WithCounterProps>)  => {
    class NewComponent extends React.Component<object, CounterState> {
        constructor(props: object){
            super(props)
            this.state = {
                count: 0
            }
        }

        incrementCounter = () => {
            this.setState((prevState) =>({
                count: prevState.count + 1
            }))
        }
        render() {
            const {count} = this.state;
            return(
                <OriginalComponent
                    count={count}
                    incrementCounter={this.incrementCounter}
                >

                </OriginalComponent>

                
            )
        }

    }
    return NewComponent;
};

export default WithCounter;