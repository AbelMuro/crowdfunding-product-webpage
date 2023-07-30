import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import withContext from './Context';
import './styles.css';
import ThankYouDialog from './Content/ThankYouDialog';

function App() {
    return(
        <main>
            <NavBar/>
            <Content/>
            <ThankYouDialog/>
        </main>
    )
}

export default withContext(App);