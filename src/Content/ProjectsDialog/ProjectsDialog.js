import React, {useEffect, useRef, useContext} from 'react';
import {Context} from '../../Context';
import Features from './Features';
import styles from './styles.module.css';

function ProjectsDialog() {
    const {openProjectsDialog, setOpenProjectsDialog, setOpenThankYouDialog} = useContext(Context);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleClose = () => {
        setOpenProjectsDialog(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenProjectsDialog(false);
        setOpenThankYouDialog(true);
    }

    useEffect(() => {
        if(openProjectsDialog){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current) return;          
                if(!dialogRef.current) return;        
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.4988061785697937)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current) return;          
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [openProjectsDialog])


    return(
        <form className={styles.overlay} ref={overlayRef} onSubmit={handleSubmit}>
            <dialog className={styles.dialog} ref={dialogRef}>
                <div className={styles.close} onClick={handleClose}></div>
                <h1 className={styles.title}>
                    Back this project
                </h1>
                <p className={styles.desc}>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? 
                </p>
                <div className={styles.features}>
                    <Features 
                        rewardName={'Pledge with no reward'}
                        desc={'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'}       
                        />
                    <Features
                        rewardName={'Bamboo Stand'}
                        pledge={'25'}
                        desc={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
                        itemsLeft={'101'}
                        />
                    <Features
                        rewardName={'Black Edition Stand'}
                        pledge={'75'}
                        desc={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                        itemsLeft={'64'}
                        />
                    <Features
                        rewardName={'Mahogany Special Edition'}
                        pledge={'200'}
                        desc={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included."}
                        itemsLeft={'0'}
                        />
                </div>
            </dialog>            
        </form>     
    )
}

export default ProjectsDialog;