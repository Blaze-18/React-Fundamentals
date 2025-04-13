import WithCounter from "./WithCounterHOC";

type WithCounterProps = {
    count: number;
    incrementCounter: () => void;
};

export const HoverCounter = (props: WithCounterProps) =>{
    const {count} = props;
        return (
            <div className='flex justify-items-center'>
                <h1 className='text-2xl text-blue-600 font-bold ' onMouseOver={props.incrementCounter}>
                    Hoverd {count} times
                </h1>
            </div>
        );
}

export default WithCounter(HoverCounter);