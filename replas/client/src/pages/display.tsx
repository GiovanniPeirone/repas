import React from 'react';
import styles from './display.module.css';
import MainCarousel from './carrousel/carrousel';
import ProblematicSection from './problematicSection/problematic';
const DisplayPage = () => {
    return (
        <div className={styles.container}>
            <MainCarousel />
            <ProblematicSection />
        </div>
    );
};

export default DisplayPage;

