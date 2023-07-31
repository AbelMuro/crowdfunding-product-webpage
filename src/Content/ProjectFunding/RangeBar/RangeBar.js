import React, {useState, memo, useEffect, useRef} from 'react';
import styles from './styles.module.css';

function RangeBar(){
    const [range, setRange] = useState(0);
    const rangeInterval = useRef();

    useEffect(() => {
        rangeInterval.current = setInterval(() => {
            setRange((prevRange) => {
                return prevRange < 80 ? prevRange + 1 : prevRange;
            })  
        }, 20)
    }, [])

    useEffect(() => {
        if(range >= 80)
            clearInterval(rangeInterval.current);
    }, [range])

    return(
        <input type='range' 
            className={styles.bar} 
            value={range}
            disabled/>
    )
}


export default memo(RangeBar);