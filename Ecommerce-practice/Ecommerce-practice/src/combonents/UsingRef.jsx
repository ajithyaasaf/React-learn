import { useEffect, useRef, useState } from "react";

const UsingRef = () => {
    const countRef = useRef(0);
    // console.log(countRef);
    const [value, setValue] = useState(0)

    const handleClick = () => {
        countRef.current++;
        console.log("countRef.current count is now:", countRef.current);
    };

    useEffect(() => {
        console.log("useRef Component Rendered");
    });

    return (
        <div style={{ padding: "20px", margin: "20px 0", border: "1px dashed #888" }}>
            <h3>useRef Practice Component</h3>
            <button onClick={handleClick}>
                useRef <span>{countRef.current}</span>
            </button>

            <button onClick={() => { setValue((value) => value + 1) }}>
                use state value is {value}
            </button>
            <button onClick={() => { setValue(0); countRef.current = 0; }}>
                reset
            </button>
        </div>
    );
};

export default UsingRef;
