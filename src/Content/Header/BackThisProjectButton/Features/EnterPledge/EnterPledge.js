import React, {useState, useRef, useEffect} from 'react';
import dollarIcon from './icons/dollar-icon.svg';
import styles from './styles.module.css';


//this is where i left off, i just need to position the error messages a bit better
function EnterPledge({minPledge}) {
    const [pledge, setPledge] = useState('');
    const emptyMessageRef = useRef();
    const pledgeTooLowMessageRef = useRef();
    const inputRef = useRef();

    const handlePledge = (e) => {
        e.target.setCustomValidity('');
        setPledge(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty){
            emptyMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '1px solid red';
        }
        else if(Number(pledge) < Number(minPledge)){
            e.target.setCustomValidity(' ');
            pledgeTooLowMessageRef.current.style.display = 'block'; 
            inputRef.current.style.border = '1px solid red';
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
    }

    useEffect(() => {
        emptyMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
        pledgeTooLowMessageRef.current.style.display = '';
    }, [pledge])

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Enter your pledge
            </label>
            <div className={styles.input_container}>
                <input type='number' 
                    className={styles.input}
                    value={pledge}
                    onChange={handlePledge}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    ref={inputRef}
                    />
                <img className={styles.dollarIcon} src={dollarIcon}/>
                <p className={styles.errorMessage} ref={emptyMessageRef}>
                    Can't be empty
                </p>
                <p className={styles.errorMessage} ref={pledgeTooLowMessageRef }>
                    ${minPledge} or higher
                </p>
            </div>
            <input type='submit' value='Continue' className={styles.continue}/>
        </fieldset>
    )
}

export default EnterPledge;