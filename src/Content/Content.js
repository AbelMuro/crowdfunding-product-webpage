import React from 'react';
import Header from './Header';
import ProjectFunding from './ProjectFunding';
import ProjectDetails from './ProjectDetails';
import styles from './styles.module.css';

function Content() {
    return(
        <div className={styles.container}>
            <Header/>
            <ProjectFunding/>
            <ProjectDetails/>
        </div>
    )
}

export default Content;