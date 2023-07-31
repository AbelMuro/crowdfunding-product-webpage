import React, {useEffect, useState, useRef} from 'react';
import RangeBar from './RangeBar';
import styles from './styles.module.css';

function ProjectFunding() {
    const [fund, setFund] = useState(0);
    const [backers, setBackers] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);
    const fundInterval = useRef();
    const backersInterval = useRef();
    const daysInterval = useRef();

    useEffect(() => {
        fundInterval.current = setInterval(() => {
            setFund((prevFund) => {
                if(prevFund >= 89000)
                    return 89914;
                else
                    return prevFund + 1000;
            })
        }, 10)

        backersInterval.current = setInterval(() => {
            setBackers((prevBackers) => {
                if(prevBackers >= 5000)
                    return 5007;
                else
                    return prevBackers + 100;
            })
        }, 10)

        daysInterval.current = setInterval(() => {
            setDaysLeft((prevDays) => {
                if(prevDays >= 56)
                    return prevDays;
                else
                    return prevDays + 1;
            })
        }, 25)
    }, [])


    useEffect(() => {
        if(fund >= 89914)
            clearInterval(fundInterval.current)

        if(backers >= 5007)
            clearInterval(backersInterval.current);

        if(daysLeft >= 56)
            clearInterval(backersInterval.current);

    }, [fund, backers, daysLeft])


    return(
        <section className={styles.container}>
            <div className={styles.data_container}>
                <h1 className={styles.data}>
                    ${fund.toLocaleString()}
                </h1>
                <p className={styles.desc}>
                    of $100,000 backed
                </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.data_container}>
                <h1 className={styles.data}>
                    {backers.toLocaleString()}
                </h1>
                <p className={styles.desc}>
                    total backers
                </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.data_container}>
                <h1 className={styles.data}>
                    {daysLeft.toLocaleString()}
                </h1>
                <p className={styles.desc}>
                    days left
                </p>
            </div>
            <RangeBar/>
        </section>
    )
}

export default ProjectFunding;