import React from 'react';
import styles from './OptimizedChild.module.css';

const OptimizedChild = React.memo(({ count, onIncrement }) => {
    console.log('Rendering OptimizedChild');
    return (
        <div className={styles.container}>
            <p>Optimized Count: {count}</p>
            <button className={styles.button} onClick={onIncrement}>Optimized Increment</button>
        </div>
    );
});

export default OptimizedChild;
