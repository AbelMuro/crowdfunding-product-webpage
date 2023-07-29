import React, {useState, useEffect, useRef} from 'react';
import logo from '../icons/logo.svg';
import hamburger from './icons/icon-hamburger.svg';
import styles from './styles.module.css';

function MobileNavBar(){
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleMenu = () => {
        setOpen(!open);
    }   

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current) return;
                if(!dialogRef.current) return;
                overlayRef.current.style.opacity = '1'; 
                dialogRef.current.style.transform = 'scale(1)';                
            }, 10)
        }
        else {
            overlayRef.current.style.opacity = '' ; 
            dialogRef.current.style.transform = '';   
            setTimeout(() => {
                if(!overlayRef.current) return;
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])


    return(
        <>
            <div className={styles.container}>
                <img className={styles.logo} src={logo}/>
                <img className={styles.hamburger} src={hamburger} onClick={handleMenu}/>
            </div>            
            <div className={styles.overlay} ref={overlayRef}>
                <dialog className={styles.dialog} ref={dialogRef}>
                    <a className={styles.link}>
                        About
                    </a>
                    <a className={styles.link}>
                        Discover
                    </a>
                    <a className={styles.link}>
                        Get Started
                    </a>
                </dialog>
            </div>        
        </>
    )
}

export default MobileNavBar