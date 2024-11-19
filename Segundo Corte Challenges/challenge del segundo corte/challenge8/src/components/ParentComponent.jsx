import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';
import OptimizedChild from './OptimizedChild';
import styles from './ParentComponent.module.css';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Parent Component</h1>
            <p>Count: {count}</p>
            <button className={styles.button} onClick={increment}>Increment</button>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className={styles.input}
                placeholder="Type something..."
            />
            <ChildComponent value={text} />
            <OptimizedChild count={count} onIncrement={increment} />
        </div>
    );
};

export default ParentComponent;
