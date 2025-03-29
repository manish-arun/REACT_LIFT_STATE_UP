
export const ChildComponent = ({ childStateValue, onChildStateChange }: any) => {
    const handleClick = () => {
        onChildStateChange(!childStateValue);
    }
    return (
        <>
            <button onClick={handleClick}>
                Toggle State
            </button>
        </>
    );
};