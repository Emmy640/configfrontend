import React from 'react';
import FooterHelp from '../FooterComponents/FooterHelp';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';
import styles from './AutoInvest.module.css';
import Link from 'next/link';

const AutoInvestTwoComponent = () => {

    return (
        <div className={styles.desktop}>
            <Navigation/>
            <div className={styles.autoInvest}>
                <div className={styles.return}>
                    <img src="./assets/icons/arrow-black.svg" alt="arrow" /> 
                    <Link href="/help"><a>Go Back</a></Link> 
                </div>
                <div className={styles.container}>
                    <div className={styles.sideContainer}>
                        <div className={styles.head}>How do +0.5% count for my future investments</div>
                        <ul>
                            <li>How does Auto Invest work?</li>
                            <li>How to set up an Auto Invest strategy</li>
                            <li>The most common issues</li>
                        </ul>
                    </div>

                    <div className={styles.mainContainer}>
                        <div className={styles.autoInvestNavigation}>
                            Home &gt; <span>Loyalty Program</span>
                        </div>

                        <div className={styles.head}>How do +0.5% count for my future investments?</div>

                        <div className={styles.items}>
                            For every single investments you make after you become included  in silver loyalty category you will be getting a +0.5% return on your investment.
                        </div>

                        <div className={styles.items}>
                            So That would mean if a loan that you want to invest in has 12% return you will be getting 12.5% instead of 12%.
                        </div>

                        <div className={styles.items}>
                            Same with other categories.
                        </div>

                        <div className={styles.feedback}>
                            <div>Was this article helpful?</div>
                            <div className={styles.button}>
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                        </div>
                    </div>
                
                </div>
                

            </div>
            <FooterHelp/>
            <Footer/>
        </div>
    );
};

export default AutoInvestTwoComponent;
