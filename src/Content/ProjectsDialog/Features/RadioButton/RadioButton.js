import React, {useEffect, useRef, useContext, memo} from 'react'
import {Context} from '../../../../Context';
import styles from './styles.module.css';

function RadioButton({rewardName, pledge, itemsLeft}) {
    const pledgeRef = useRef();
    const inputRef = useRef();
    const containerRef = useRef();
    const {selectedReward, setSelectedReward} = useContext(Context);

    const handleRadio = () => {
        setSelectedReward(rewardName);
    }

    useEffect(() => {
        if(selectedReward === rewardName)
            pledgeRef.current.style.fontWeight = '700';
        else
            pledgeRef.current.style.fontWeight = '';
    }, [selectedReward])

    useEffect(() => {
        if(itemsLeft === '0'){
            inputRef.current.disabled = true;
            containerRef.current.style.pointerEvents = 'none';
        }
    }, [itemsLeft])

    return(
        <fieldset className={styles.container} ref={containerRef}>
            <label className={styles.radioButton} htmlFor={rewardName}>
                <input id={rewardName}
                    type='radio' 
                    name='feature'
                    checked={selectedReward === rewardName}
                    onChange={handleRadio}
                    className={styles.radio}
                    ref={inputRef}/>
                <div className={styles.greenCircle}></div>
            </label>                 
            <label className={styles.label} htmlFor={rewardName}>
                {rewardName}
            </label>
            <p className={styles.pledge} ref={pledgeRef}>
                {pledge ? `Pledge $${pledge} or more` : ''}
            </p>
        </fieldset>
    )
}

export default RadioButton;