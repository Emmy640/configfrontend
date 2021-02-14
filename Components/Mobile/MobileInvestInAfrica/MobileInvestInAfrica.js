import React from 'react';
import styles from './MobileInvestInAfrica.module.css';



const MobileInvestInAfrica = () => {

    return(
        <div className={styles.Mobile}>
            <div 
                className={styles.contentSingleOne}
                    style={{
                        backgroundImage: `url(./mobile/world-map.svg)`,
                        backgroundSize:`100%`,
                        backgroundPosition:`center`,
                        backgroundRepeat:`no-repeat`
                    }}
             >
            <img src="./mobile/africa-map.svg" alt="map"/>
            <div className={styles.text}>
                <div className={styles.head}>We protect what is most important to you</div>
                <div className={styles.subhead}>Your Investments, Your Data and Your Returns</div>
            </div>
            </div>
            {/* <div  className="container-fluid">
                <div><div className={styles.investitemimage}>
                    <div className={styles.imagecontainer}>
                        <img src="./mobile/africa-map.svg" className="main-image"/>
                        <div className={styles.head}>Invest in the AFRICA you Love!</div>
                        <div className={styles.body}>The advantages of investing with Synergy don’t end with earning high returns. You are creating life changing opportunities, impacting businesses and building wealth in Africa for Africans.</div>
                    </div>                            
                </div></div>
            </div> */}
        </div>
    );
};

export default MobileInvestInAfrica;