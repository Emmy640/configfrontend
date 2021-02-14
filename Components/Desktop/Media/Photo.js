import React from 'react';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';
import styles from './Photo.module.css';


const PhotoComponent = () =>{

    return (
        <div className={styles.mediacontainer}>
            <Navigation/>
            <div className={styles.contentsingleone}>
                <div className={styles.head}>
                Photo
                </div>
                More things are coming up here...
            </div>
            <Footer/>
        </div>
    );
};

export default PhotoComponent;