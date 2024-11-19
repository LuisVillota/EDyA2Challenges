import React from 'react';
import styles from './ChildComponent.module.css';

const ChildComponent = ({ value }) => {
    console.log('Rendering ChildComponent');
    return <p className={styles.text}>Child received text: {value}</p>;
};

export default ChildComponent;
