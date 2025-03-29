import React from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    const [childState, setChildState] = React.useState(false);
    return (
        <>
            <h2>Parent Component</h2>
            <p>Child state in parent {childState ? `ON` : `OFF`}</p>
            <ChildComponent onStateChange={(newState: boolean)=>setChildState(newState)}/>
        </>
    );
};