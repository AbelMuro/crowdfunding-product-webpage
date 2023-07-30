import React, {useRef, useEffect, useContext} from 'react';
import {Context} from '../../../../Context';
import RadioButton from './RadioButton';
import EnterPledge from './EnterPledge';
import styles from './styles.module.css';

function Features({rewardName, pledge, itemsLeft, desc}){
    const containerRef = useRef();
    const {selectedReward} = useContext(Context);

    useEffect(() => {
        if(selectedReward === rewardName)
            containerRef.current.style.border = '2px solid #3CB3AB';
        else
        containerRef.current.style.border = '';
    }, [selectedReward])

    useEffect(() => {
        if(itemsLeft === '0')
            containerRef.current.style.opacity = '0.4';
    }, [itemsLeft])

    return(
        <div className={styles.container} ref={containerRef}>
            <div className={styles.grid}>
                <RadioButton 
                    rewardName={rewardName}
                    pledge={pledge}
                    itemsLeft={itemsLeft}
                    />
                {itemsLeft ? 
                    <p className={styles.itemsLeft}>
                        <span>
                            {itemsLeft}
                        </span>
                        left
                    </p> : <></>}
                <p className={styles.desc}>
                    {desc}
                </p>
            </div>   
            {selectedReward === rewardName ? 
                <EnterPledge minPledge={pledge}/>
                : <></>}         
        </div>

    )
}

export default Features;