import React from 'react';
import RadioButton from './RadioButton';
import styles from './styles.module.css';


//this is where i left off, i will need to make this component into a stateful component and pass the state down to the RadioButton component
function Features(){
    return(
        <div className={styles.container}>
            <RadioButton/>
            <p className={styles.itemsLeft}>
                <span>
                    101
                </span>
                left
            </p>
            <p className={styles.desc}>
                You get an ergonomic stand made of natural bamboo. 
                You've helped us launch our promotional campaign, 
                and you’ll be added to a special Backer member list.
            </p>
        </div>
    )
}

export default Features;