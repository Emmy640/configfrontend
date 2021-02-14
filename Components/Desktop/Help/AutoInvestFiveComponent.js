import React from 'react';
import FooterHelp from '../FooterComponents/FooterHelp';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';
import styles from './AutoInvest.module.css';
import Link from 'next/link';

const AutoInvestFiveComponent = () => {

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
                        <div className={styles.head}>Are they any limitations on investment amount?</div>
                        <ul>
                            <li>About Synergy and how to become an Investor on Synergy</li>
                            <li>How to start an Investing Journey</li>
                            <li>Register as Company</li>
                        </ul>

                        <div className={styles.head}>Loyalty Program</div>
                        <ul>
                            <li>Conditions and the operating principles.</li>
                            <li>Loyalty Categories</li>
                            <li>Reasons for not being assigned to a program</li>
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

export default AutoInvestFiveComponent;
