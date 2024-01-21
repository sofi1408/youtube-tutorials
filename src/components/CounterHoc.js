// const newComponent = hoc(oldComponent);

import { useState } from "react";

const CounterHoc = (OldComponent, incrmentBy=1) => {
    return function EnhanceComponent(props){
        const [count, setCount] = useState(0);

        return(
          <OldComponent {...props} count={count} incrementCounter={() => setCount(count+incrmentBy)} name='counterHOC' />
        )
    }
}

export default CounterHoc;