import React from "react";

export const ChildComponent = ({ onStateChange }: any) => {
    const [toggle, setToggle] = React.useState(false);
    //Now we want to send this toggle state to parent component
    React.useEffect(() => {
        onStateChange(toggle);
    }, [toggle, onStateChange]);
    return (
        <>
            <h3>Child Component</h3>
            <button onClick={() => setToggle((prev) => !prev)}>
                {toggle ? `Turn OFF` : `Turn ON`}
            </button>
        </>
    );
};