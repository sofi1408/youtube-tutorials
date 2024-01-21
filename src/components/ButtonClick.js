// import { useState } from "react";
import CounterHoc from "./CounterHoc";
import SecondHoc from "./SecondHoc";

const ButtonClick = (props) => {
    const {count, incrementCounter, name} = props;
    // const [count, setCount] = useState(0);
    return(
        <div>
        <button onClick={incrementCounter}>Click Me</button>
        <p>Count is {count} </p>
        <p>Name is: {name}</p>
        </div>
    )
}

export default SecondHoc(CounterHoc(ButtonClick, 10));