import React, {useMemo} from "react";

const FinalResult = ({marks, subject}) => {
    console.log('FinalResult Rendered')
    const percentObtained = useMemo(() => {
        console.log('result calculated')
        return(marks*100)/200
    }, [marks]);
    return (
        <>
        <h2>Subject is: {subject}</h2>
        <h2>Final Result is {marks} </h2>
        <h2>Percentage Now is {percentObtained} </h2>
        </>

    )
}

export default React.memo(FinalResult);