import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import withContext from './Context';
import ThankYouDialog from './Content/ThankYouDialog';
import ProjectsDialog from './Content/ProjectsDialog';
import './styles.css';

function App() {
    return(
        <main>
            <NavBar/>
            <Content/>
            <ThankYouDialog/>
            <ProjectsDialog/>
        </main>
    )
}

export default withContext(App);