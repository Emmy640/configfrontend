import React from 'react';
import styles from './InvestInAfrica.module.css';


const InvestInAfrica = () => {

    return (
        <div className={styles.DesktopInvestInAfrica}>
            <div className={styles.contentSingleOne}>
                <div 
                    className={styles.investInAfrica}
                        style={{
                            backgroundImage: `url(./assets/investinafrica.svg)`,
                            backgroundSize:`100%`,
                            backgroundPosition:`center`,
                            backgroundRepeat:`no-repeat`
                        }}
                >
                    <div className={styles.head}>Invest in the AFRICA you Love!</div>
                    <div className={styles.body}>The advantages of investing with Synergy don’t end with earning high returns. You are creating life changing opportunities, impacting businesses and building wealth in Africa for Africans.</div>
                 </div>
            </div>
        </div>
    );
};

export default InvestInAfrica;