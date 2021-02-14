import React from 'react';
import styles from './SynergyTV.module.css';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';

const SynergyTVComponent = () => {
    return(
        <div className={styles.synergyTv}>
            <Navigation/>
            <div className={styles.contentsingleone}>

                <div className={styles.head}>
                    Synergy TV
                </div>
            </div>

            <div className={styles.videomain}>
                <iframe title="properties" id="video" src="https://www.youtube.com/embed/-EoNrg_DR3s?enablejsapi=1&html5=1" frameborder="0" allowfullscreen></iframe>
            </div>
            More things comming here soon..
            <Footer/>
        </div>
    );
};

export default SynergyTVComponent;