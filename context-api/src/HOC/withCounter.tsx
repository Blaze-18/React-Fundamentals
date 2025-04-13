import React from 'react';

type InjectedProps = {
    count: number;
    incrementCount: () => void;
};

const withCounter = <P extends InjectedProps>(
    OriginalComponent: React.ComponentType<P>) => {
    return class NewComponent extends React.Component<
    Omit<P, keyof InjectedProps>,
    { count: number }> {
            state = {
            count: 0,
            };

            incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
            };

            render() {
        const { count } = this.state;

                return (
                    <OriginalComponent
                    {...(this.props as P)}
                    count={count}
                    incrementCount={this.incrementCount}
                    />
                );
        }
    };
};

export default withCounter;
