import WithCounter from "./WithCounterHOC";

type WithCounterProps = {
    count: number;
    incrementCounter: () => void;
};
export const ClickCounter = (props:WithCounterProps) =>{
    const {count} = props;
    return (
        <div className='flex justify-items-center'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
                dark:hover:bg-blue-700 focus:outline-black dark:focus:ring-black"
                onClick={props.incrementCounter}
            >
                Clicked {count} Times
            </button>
        </div>
    )
}
export default WithCounter(ClickCounter);