import React from 'react';
import bookmark from './icons/icon-bookmark.svg';
import logo from './icons/logo-mastercraft.svg';
import styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.container}>
            <img className={styles.logo} src={logo}/>
            <div className={styles.titles}>
                <h1 className={styles.titleOne}>
                    Mastercraft Bamboo Monitor Riser
                </h1>
                <h2 className={styles.titleTwo}>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </h2>
            </div>
            <button className={styles.backButton}>
                Back this project
            </button>
            <button className={styles.bookmarkButton}>
                <img className={styles.bookmarkIcon} src={bookmark}/>
                Bookmark
            </button>
        </header>
    )
}

export default Header;