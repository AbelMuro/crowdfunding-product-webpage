import React from 'react';
import Features from './Features';
import styles from './styles.module.css';

function ProjectDetails() {
    return(
        <div className={styles.container}>
            <section className={styles.project_details}>
                <h1 className={styles.title}>
                    About this project
                </h1>
                <p className={styles.desc}>
                    The Mastercraft Bamboo Monitor Riser 
                    is a sturdy and stylish platform that 
                    elevates your screen to a more comfortable 
                    viewing height. Placing your monitor at eye 
                    level has the potential to improve your posture 
                    and make you more comfortable while at work, 
                    helping you stay focused on the task at hand.
                    <br/><br/>
                    Featuring artisan craftsmanship, the simplicity 
                    of design creates extra desk space below your 
                    computer to allow notepads, pens, and USB 
                    sticks to be stored under the stand.
                </p>
            </section>
            <Features
                title={'Bamboo Stand'}
                pledge={'Pledge $25 or more'}
                desc={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
                itemsLeft={'101'}
                />
            <Features
                title={'Black Edition Stand'}
                pledge={'Pledge $75 or more'}
                desc={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                itemsLeft={'64'}
                />
            <Features
                title={'Mahogany Special Edition'}
                pledge={'Pledge $200 or more'}
                desc={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. "}
                itemsLeft={'0'}
                />
        </div>
    )    
}

export default ProjectDetails;