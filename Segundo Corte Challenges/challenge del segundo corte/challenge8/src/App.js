import React from 'react';
import ParentComponent from './components/ParentComponent';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.app}>
            <ParentComponent />
        </div>
    );
};

export default App;
