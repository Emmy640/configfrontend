import React, {useState} from 'react';
import styles from  './InvestSteps.module.css';

const InvestSteps = () => {
    return (
        <div className={styles.InvestSteps}>
             <div className={styles.contentsingleone}>
                    <div className={styles.head}>Investing in 5 Easy Steps</div>

                    <div className={styles.investin5easystepsdoubletab}>
                        <div className={styles.tabcontainer}>
                            <div className={styles.number}>(1)</div>
                            <div className={styles.tab} style={{padding:`12.5vh 2vw`}}>
                                <img src="./assets/icons/how-it-works/account.svg" alt="account" />

                                <div className={styles.title}>Create an Account</div>

                                <p>To start investing click <b>Get Started</b> to begin your journey, it takes less than 2 minutes to complete the form.</p>
                            </div>
                        </div>
                        
                        <div className={styles.tabcontainer}>
                            <div className={styles.number}>(2)</div>
                            <div className={styles.tab} style={{padding:`7.5vh 2vw`}}>
                                <img src="./assets/icons/how-it-works/invest.svg" alt="login/invest" />

                                <div className={styles.title}>Login/Invest</div>

                                <p>Once you have signed up, you will be required to click <b>Log In</b> to gain access to your dashboard where you will have a chance to select from as many offers upon clicking <b>Investment Offers</b>. Alternatively, you can navigate to the Investpage to grab any of the offers by clicking <b>Invest Now</b>. </p>
                            </div>
                        </div>
                        
                        <div className={styles.tabcontainer}>
                            <div className={styles.number}>(3)</div>
                            <div className={styles.tab}>
                                <img src="./assets/icons/how-it-works/grab.svg" alt="grab an offer" />

                                <div className={styles.title}>Grab An Offer</div>

                                <p>Once you accessed the investment offers on your dashboard or navigated to the invest page, you can grab as many offers as you will need, simply click <b>invest now </b>and eventually, you will be redirected to your shopping carts then proceed to check out or return to <b>grab more offers</b> before checkout. If you are yet to set up a debit/credit card on your dashboard, you will be required to do so upon checkout if selected as your preferred means of payment. </p>
                            </div>
                        </div>
                        
                        <div className={styles.tabcontainer}>
                            <div className={styles.number}>(4)</div>
                            <div className={styles.tab} style={{padding:`11.5vh 2vw`}}>
                                <img src="./assets/icons/how-it-works/growth.svg" alt="growth" />

                                <div className={styles.title}>Track the Growth of Your Investments</div>

                                <p>View your dashboard daily to track your investments and returns.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.investin5easystepssingletab}>
                        <div className={styles.tabcontainer}>
                            <div className={styles.number}>(5)</div>
                            <div className={styles.tab}>
                                <img src="./assets/icons/how-it-works/earn.svg" alt="earn" />

                                <div className={styles.title}>Receive Invested Amount plus Earned Interest</div>

                                <p>Funds are accessible from your wallet to your bank account as soon as the investment is completed. You may choose to grab more offers upon completion. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default InvestSteps;