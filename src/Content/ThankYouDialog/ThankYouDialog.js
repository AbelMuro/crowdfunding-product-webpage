import React, {useContext, useEffect, useRef} from 'react';
import {Context} from '../../Context';
import checkIcon from './icons/icon-check.svg';
import styles from './styles.module.css';

function ThankYouDialog() {
    const {openThankYouDialog, setOpenThankYouDialog} = useContext(Context);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleClose = () => {
        setOpenThankYouDialog(false);
    }

    useEffect(() => {
        if(openThankYouDialog){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current) return;
                if(!dialogRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                dialogRef.current.style.transform = 'scale(1)'                
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = ''  

            setTimeout(() => {
               if(!overlayRef.current) return;
               overlayRef.current.style.display = '';
            }, 200)
        }
            

    }, [openThankYouDialog])

    return(
        <div className={styles.overlay} ref={overlayRef}>
            <dialog className={styles.dialog} ref={dialogRef}>
                <img className={styles.checkIcon} src={checkIcon}/>
                <h1 className={styles.title}>
                    Thanks for your support!
                </h1>
                <p className={styles.message}>
                    Your pledge brings us one step 
                    closer to sharing Mastercraft 
                    Bamboo Monitor Riser worldwide. 
                    You will get an email once our 
                    campaign is completed.
                </p>
                <button className={styles.closeButton} onClick={handleClose}>
                    Got it!
                </button>
            </dialog>
        </div>
    )
    
}

export default ThankYouDialog;
