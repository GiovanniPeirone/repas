import React from 'react';
import styles from './display.module.css';
import MainCarousel from './carrousel/carrousel';
import ProblematicSection from './problematicSection/problematic';
import SolutionsSection from './solutions/solution';
const DisplayPage = () => {
    return (
        <div className={styles.container}>
            <div id='home'>
                <MainCarousel />
            </div>
            <div id='problematic'>
                <ProblematicSection />
            </div>
            <div id='solution'>
                <SolutionsSection   />
            </div>
        </div>
    );
};

export default DisplayPage;

