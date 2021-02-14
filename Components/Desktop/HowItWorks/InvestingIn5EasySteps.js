import React from 'react';
import styles from './InvestingIn5EasySteps.module.css';
import Link from 'next/link';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';

const InvestingIn5EasyStepsComponent = () => {
    return(
        <div className={styles.InvestingSteps}>
            <Navigation/>
            <div className={styles.howitworks}>
           {/*  <img src="./assets/background/purple-polka-dot.svg" alt="purple polka dot" className="purplepolkabackground" />
            <img src="./assets/background/orange-polka-dot.svg" alt="orange polka dot" className="orangepolkabackground" /> */}

            <div className={styles.contentsingleone}>
                    <div className={styles.navigateback}>
                   
                            <img src="./assets/icons/arrow-black.svg" alt="return back"/>
                            <Link href='/how-it-works' className={styles.link}>
                                Go Back
                            </Link>
                    </div>

                    <div className={styles.investingin5easystepshead}>
                        <div className={styles.head}>
                        Investing in 5 Easy Steps
                        </div>
                    </div>

                    <div className={styles.investingin5easysteps}>
                        <div className={styles.tab}>
                            <div className={styles.inner}>
                                <div className={styles.number}>1</div>
                                <img src="./assets/icons/how-it-works/account.svg" alt="account" />
                                <div className={styles.tabhead}>Create an Account</div>
                                <div className={styles.tabbody}>To start investing click <b>Get Started</b> to begin your journey, it takes less than 2 minutes to complete the form.</div>
                            </div>
                        </div>
                        
                        <div className={styles.tab}>
                            <div className={styles.inner}>
                                <div className={styles.number}>2</div>
                                <img src="./assets/icons/how-it-works/invest.svg" alt="account" />
                                <div className={styles.tabhead}>Login/Invest</div>
                                <div className={styles.tabbody}>Once you have signed up, you will be required to click <b>Log In</b> to gain access to your dashboard where you will have a chance to select from as many offers upon clicking <b>Investment Offers</b>. Alternatively, you can navigate to the Investpage to grab any of the offers by clicking <b>Invest Now</b>. </div>
                            </div>
                        </div>

                        <div className={styles.tab}>
                            <div className={styles.inner}>
                                <div className={styles.number}>3</div>
                                <img src="./assets/icons/how-it-works/grab.svg" alt="account" />
                                <div className={styles.tabhead}>Grab an Offer</div>
                                <div className={styles.tabbody}>Once you accessed the investment offers on your dashboard or navigated to the invest page, you can grab as many offers as you will need, simply click <b>invest now</b> and eventually, you will be redirected to your shopping carts then proceed to check out or return to <b>grab more offers</b> before checkout. If you are yet to set up a debit/credit card on your dashboard, you will be required to do so upon checkout if selected as your preferred means of payment. </div>
                            </div>
                        </div>
                    </div> 

                    <div className={styles.investingin5easystepstwo}>
                        <div className={styles.investingin5easysteps}>
                        <div className={styles.tab}>
                            <div className={styles.inner}>
                                <div className={styles.number}>4</div>
                                <img src="./assets/icons/how-it-works/growth.svg" alt="account" />
                                <div className={styles.tabhead}>Track the Growth of Your Investments</div>
                                <div className={styles.tabbody}>View your dashboard daily to track your investments and returns.</div>
                            </div>
                        </div>
                        
                        <div className={styles.tab}>
                            <div className={styles.inner}>
                                <div className={styles.number}>5</div>
                                <img src="./assets/icons/how-it-works/earn.svg" alt="account" />
                                <div className={styles.tabhead}>Receive Invested Amount Plus Earned Interest</div>
                                <div className={styles.tabbody}>Funds are accessible from your wallet to your bank account as soon as the investment is completed. You may choose to grab more offers upon completion. </div>
                            </div>
                        </div>
                        </div>
                    </div>   
                </div>

            </div>
            <Footer/>

        </div>
    );
};

export default InvestingIn5EasyStepsComponent;