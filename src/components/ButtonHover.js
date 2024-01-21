// import { useState } from "react";
import CounterHoc from "./CounterHoc";


const ButtonHover = (props) => {
    const {count, incrementCounter} = props;

    // const [count, setCount] = useState(0);

    return(
        <div>
        <button onMouseOver={incrementCounter}>Click Me</button>
        <p>Count is {count} </p>
        </div>
    )
}

export default CounterHoc(ButtonHover, 5);