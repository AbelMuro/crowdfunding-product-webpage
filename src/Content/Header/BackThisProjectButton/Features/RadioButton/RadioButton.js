import React from 'react'
import styles from './styles.module.css';

function RadioButton() {

    return(
        <fieldset className={styles.container}>
            <label className={styles.radioButton} htmlFor='feature-1'>
                <input id='feature-1' 
                    type='radio' 
                    name='feature'
                    className={styles.radio}/>
                <div className={styles.greenCircle}></div>
            </label>                 
            <label className={styles.label} htmlFor='feature-1'>
                Bamboo Stand
            </label>
            <p className={styles.pledge}>
                Pledge $25 or more
            </p>
        </fieldset>
    )
}

export default RadioButton;