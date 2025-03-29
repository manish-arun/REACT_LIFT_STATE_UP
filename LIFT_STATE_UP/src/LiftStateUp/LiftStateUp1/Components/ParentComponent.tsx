import React from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    const [isChildStateTrue, setIsChildStateTrue] = React.useState(false);
    const handleStateChange = (newValue: boolean) => {
        setIsChildStateTrue(newValue);
    }
    return (
        <div>
            <ChildComponent
                childStateValue={isChildStateTrue}
                onChildStateChange={handleStateChange} />
            <div>
                {isChildStateTrue ? `ON` : `OFF`}
            </div>
        </div>
    );
};