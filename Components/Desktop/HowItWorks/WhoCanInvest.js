import React from 'react';
import styles from './WhoCanInvest.module.css';
import Link from 'next/link';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';


const WhoCanInvestComponent = () => {
    return(
        <div className={styles.whoCanInvest}>
             <Navigation />
            <div className={styles.howitworks}>
                <div className={styles.contentsingleone}>
                    <div className={styles.navigateback}>
                        
                            <img src="./assets/icons/arrow-black.svg" alt="return back"/>
                            <Link href='/how-it-works' className={styles.links}>
                                <a>Go Back</a>
                            </Link>
                    </div>
                    
                    <div className={styles.head}>
                        Who Can Invest
                    </div>
                    
                    <div className={styles.image}>
                        <img src="./assets/who-can-invest.svg" alt="Who can invest" style={{width:`50%`}} />
                    </div>

                    <div className={styles.text}>tuester adispiscing eliuttuester adispiscing eliuttuester adispiscing eliuttuester adispiscing tuester adispiscing eliuteliuttuester adispiscing eliuttuester adispiscing eliut tuester adispiscing eliut tuester adispiscing eliuttuester adispiscing eliuttuester adispiscing eliut</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WhoCanInvestComponent;
