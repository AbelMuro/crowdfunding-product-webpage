import React, {useRef, useState, useEffect, useContext} from 'react';
import {Context} from '../../Context';
import bookmark from './icons/icon-bookmark.svg';
import bookmarkGreen from './icons/icon-bookmark-green.svg';
import logo from './icons/logo-mastercraft.svg';
import styles from './styles.module.css';

function Header() {
    const {setOpenProjectsDialog} = useContext(Context);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const bookmarkRef = useRef();

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    }

    const handleOpen = () => {
        setOpenProjectsDialog(true);
    }

    useEffect(() => {
        if(isBookmarked){
            bookmarkRef.current.style.backgroundColor = 'rgb(20, 122, 115, 0.05)';
            bookmarkRef.current.style.color = '#147A73';   
        }
        else{
            bookmarkRef.current.style.backgroundColor = '';
            bookmarkRef.current.style.color = '';  
        }
    }, [isBookmarked])

    useEffect(() => {
        if(!isBookmarked) return;

        if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
            window.sidebar.addPanel(document.title, window.location.href, '');
        } 
        else if (window.opera && window.print) { // Opera Hotlist
            this.title = document.title;
        } else { // webkit - safari/chrome
            alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
        }
    }, [isBookmarked])

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
            <button className={styles.backButton} onClick={handleOpen}>
                Back this project
            </button>   
            <button className={styles.bookmarkButton} onClick={handleBookmark} ref={bookmarkRef}>
                <img className={styles.bookmarkIcon} src={isBookmarked ? bookmarkGreen : bookmark}/>
                Bookmark
            </button>
        </header>
    )
}

export default Header;