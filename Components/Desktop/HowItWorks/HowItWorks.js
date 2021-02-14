import React from 'react';
import styles from './HowItWorks.module.css';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';
import Link from 'next/link';

const HowitWorksComponent = () =>{
    return(
        <div  className={styles.howitwork}>
            <Navigation/>
            <div className={styles.howitworkhome}>
                <div className={styles.contentdoubleone}>
                <div className={styles.text}>
                    <div className={styles.head}>HOW IT WORKS</div>
                        <ul className={styles.list}>
                            <li><Link className={styles.link} href='/who-can-invest'>
                                <a>Who can invest</a>
                            </Link></li>
                            <li><Link className={styles.link} href='/investing-in-5-easy-steps'>
                                <a>Investing in 5 easy steps</a>
                            </Link></li>
                            <li><Link className={styles.link} href='/invest'>
                                <a>Feature Offers</a>
                            </Link></li>
                            <li><Link className={styles.link} href='/invest'>
                                <a>Investments Offers</a>
                            </Link></li>
                        </ul>
                    </div>
                    <div className={styles.image}>
                        <img src="./assets/how-it-works.svg" alt="home" />
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default HowitWorksComponent;