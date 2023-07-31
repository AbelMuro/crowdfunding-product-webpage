import React, {useEffect, useRef, useContext} from 'react';
import {Context} from '../../../Context';
import styles from './styles.module.css';

function Features({title, pledge, desc, itemsLeft}) {
    const {setOpenProjectsDialog, setSelectedReward} = useContext(Context)
    const containerRef = useRef();
    const rewardRef = useRef();

    const handleSelect = (e) => {
        const title = e.target.getAttribute('data-title');
        setSelectedReward(title);
        setOpenProjectsDialog(true);
    }

    useEffect(() => {
        if(Number(itemsLeft) <= 0){
            containerRef.current.style.opacity = '0.5';
            rewardRef.current.style.backgroundColor = 'rgba(47, 47, 47, 0.5)';
            rewardRef.current.disabled = true;
        }
    }, [itemsLeft])

    return(
        <section className={styles.container} ref={containerRef}>
            <h1 className={styles.title}>
                {title}
            </h1>   
            <h2 className={styles.pledge}>
                {pledge}
            </h2>
            <p className={styles.desc}>
                {desc}
            </p>
            <div className={styles.itemsLeft}>
                <span>{itemsLeft}</span> left
            </div>
            <button className={styles.rewardButton} 
                ref={rewardRef} 
                onClick={handleSelect} 
                data-title={title}
            >
                {itemsLeft === '0' ? 'Out of Stock' : 'Select Reward'}
            </button>   
        </section>
    )
}

export default Features;