import React from 'react';
import Features from './Features';
import styles from './styles.module.css';

function BackThisProjectButton(){
    return(
        <>
            <button className={styles.backButton}>
                Back this project
            </button>   
            <div className={styles.overlay}>
                <dialog open={true} className={styles.dialog}>
                    <h1 className={styles.title}>
                        Back this project
                    </h1>
                    <p className={styles.desc}>
                        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? 
                    </p>
                    <div className={styles.features}>
                        <Features/>
                    </div>
                </dialog>            
            </div>     

        </>
    )
}

export default BackThisProjectButton;