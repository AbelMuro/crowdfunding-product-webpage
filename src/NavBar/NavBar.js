import React from 'react';
import logo from './icons/logo.svg';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '../Hooks/useMediaQuery';
import styles from './styles.module.css';

function NavBar(){
    const mobile = useMediaQuery('(max-width: 530px)');

    return (
        <nav className={styles.container}>
            {mobile ? <MobileNavBar/> :
                <div className={styles.navbar}>
                    <img src={logo} className={styles.logo}/>
                    <ul className={styles.links}>
                        <li className={styles.link}>
                            About
                        </li>
                        <li className={styles.link}>
                            Discover
                        </li>
                        <li className={styles.link}>
                            Get Started
                        </li>
                    </ul>
                </div>}
        </nav>)
    
}
export default NavBar;