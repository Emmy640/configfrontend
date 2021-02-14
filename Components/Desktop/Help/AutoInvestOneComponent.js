import React from 'react';
import styles from './AutoInvest.module.css';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import FootHelp from '../FooterComponents/FooterHelp';
import Footer from '../FooterComponents/Footer';
import Link from 'next/link';

const AutoInvestOneComponent = () => {

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
                    <div className={styles.head}>Auto Invest</div>
                    <ul>
                        <li>How does Auto Invest work?</li>
                        <li>How to set up an Auto Invest strategy</li>
                        <li>The most common issues</li>
                    </ul>
                    
                    <div className={styles.head}>Getting Started</div>
                    <ul>
                        <li>About Synergy and how to become an investor on Synergy</li>
                        <li>How to start an investing journey</li>
                        <li>Register as a company</li>
                    </ul>
                </div>

                <div className={styles.mainContainer}>
                    <div className={styles.autoInvestNavigation}>
                        Home &gt; <span>Auto Invest</span>
                    </div>

                    <div className={styles.head}>Settings of Auto Invest</div>

                    <div className={styles.items}>
                        <span className={styles.title}>Portfolio size - </span> all amount of funds which investor prefers to invest using auto invest strategy.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Maximum investment in one loan - </span> maximum amount of money investor prefers to invest in one loan.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Interest rate - </span> annual interest (%).
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Remaining loan term (loans) - </span> the duration of the loan which investorprefers to invest in.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Remaining principal amount - </span> the remaining (unsold) amount of listed loan investor prefers to invest in.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Minimum funds in account - </span> the amount of money investor prefers to keep in the account (do not invest).
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Loan status - </span> current or late. Current means that the investment is active, not finished yet. Late loan means that loan is overdue. Please bear in mind, that overdue loans generate the same interest per annum and are counting for all delayed periods – till the borrower makes a repayment or till the loan originator executes buyback, depending on what happens first.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Country - </span> Investor can select countries in which loans are issued.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Loan originator - </span> investor can select their loans to invest in.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Buyback guarantee - </span> The buyback guarantee is the loan originator’s obligation to exercise a buyback of the claim at the end of 60 days of delay.
                    </div>

                    <div className={styles.items}>
                        <span className={styles.title}>Do you want to reinvest - </span> all available funds which you receive after investment will be reinvested in available loans according current auto invest strategy.
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
            <FootHelp/>
            <Footer/>
        </div>

    );
    
}

export default AutoInvestOneComponent;