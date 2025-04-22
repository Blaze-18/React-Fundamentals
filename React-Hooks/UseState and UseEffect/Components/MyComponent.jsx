import { useEffect, useState } from "react"

function MyComponent(){
    const [count,setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const increment = () => {
        //avoiding mutation 
        setCount((prevCount) => prevCount + 1);
    }
    const tick = () =>{
        console.log('Clock is Ticking');
        setDate(new Date());
    }
    useEffect(()=>{
        console.log('starting timer');
        const interval = setInterval(tick,1000);
        // clean up after unmount
        return () =>{
            console.log('Component Unmounted');
            clearInterval(interval)
        }
    }, []// dependency 0 means rendered when mounted first only
    );
    useEffect(()=>{
        console.log('Title Update');
        document.title = `clicked ${count} times`;
    }, [count]
        // dependency count means rendered when count is changed
    );

    return (
        <div>
            <p>Clock : {date.toLocaleTimeString()}</p>
            <button onClick={increment}>Add 1</button>
        </div>
    )
}
export default MyComponent