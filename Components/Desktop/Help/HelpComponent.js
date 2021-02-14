import React from 'react';
import Link from 'next/link';
import styles from './HelpComponent.module.css';
import FooterHelp from '../FooterComponents/FooterHelp';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';

const HelpComponent = () => {

    return(
        <div className={styles.desktopHelp}>
            <Navigation/>
            <div className={styles.help}>
                <h2>Hi! How can we help?</h2>
                <div className={styles.contentDoubleOne} style={{paddingTop:`0`}}>
                    <div className={styles.text}>
                        <h2 style={{padding:`0`}}>FAQ</h2>
                        <ul className={styles.list}>
                            <Link className={styles.link} href='/auto-invest-one'><li><a>Settings of Auto Invest</a></li></Link>
                            <Link className={styles.link} href='/auto-invest-two'><li><a>How do +0.5% count for my future investments</a></li></Link>
                            <Link className={styles.link} href='/auto-invest-three'><li><a>Can I still invest manually if I have have Auto Invest</a></li></Link>
                            <Link className={styles.link} href='/auto-invest-four'><li><a>Are they any limitations on investment amount?</a></li></Link>
                            <Link className={styles.link} href='/auto-invest-five'><li><a>When and how can I withdraw my funds?</a></li></Link>
                        </ul>
                    </div>

                    <div className={styles.image}>
                        <img src="./assets/help.svg" alt="help" />
                    </div>

                </div>
                

                <h2>Popular Topics</h2>
                <Link className={styles.link} href='/more-topics'>
                    <p className={styles.moreText}>
                        Click for more topics
                        <img src="./assets/icons/arrow-orange.svg" alt="arrow" />
                    </p>
                </Link>
               
                <div className={styles.contentTripleOne}>
                    <div><div className={styles.tab}>
                       <div className={styles.tabTopics}>
                            <div className={styles.title}>Guarantee</div>
                            <p>Adispiscing eliute liuttuester adispiscing eliuttuester</p>
                       </div>
                    </div></div>
                    
                    <div><div className={styles.tab}>
                        <div className={styles.tabTopics}>
                            <div className={styles.title}>Investment</div>
                            <p>Adispiscing eliute liuttuester adispiscing eliuttuester</p>
                        </div>
                    </div></div>
                    
                    <div><div className={styles.tab}>
                        <div className={styles.tabTopics}>
                        <div className={styles.title}>Withdrawal</div>
                        <p>Adispiscing eliute liuttuester adispiscing eliuttuester</p>
                        </div>
                    </div></div>
                </div>
                <h2>Helpful Videos</h2>
                <Link className={styles.link} href='/synergy-tv'>
                    <p className={styles.moreText}>
                        Click for more Videos
                        <img src="./assets/icons/arrow-orange.svg" alt="arrow" />
                    </p>
                </Link>
                <div className={styles.contentTripleOne}>
                    <div><div
                        style={{
                            backgroundImage: `url(./assets/images/one.jpg)`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }} className={styles.tab}
                    >
                        <div className={styles.overlay}></div>
                        <div className={styles.image}>
                            <img src="./assets/icons/video.svg" alt="video" />
                        </div>
                        <p>Informational Tips on How to Invest With Synergy</p>
                    </div></div>
                    
                    <div><div
                        style={{
                            backgroundImage: `url(./assets/images/one.jpg)`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }} className={styles.tab}
                    >
                        <div className={styles.overlay}></div>
                        <div className={styles.image}>
                            <img src="./assets/icons/video.svg" alt="video" />
                        </div>
                        <p>Informational Tips on How to Invest With Synergy</p>
                    </div></div>
                    
                    <div><div
                        style={{
                            backgroundImage: `url(./assets/images/one.jpg)`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }} className={styles.tab}
                    >
                        <div className={styles.overlay}></div>
                        <div className={styles.image}>
                            <img src="./assets/icons/video.svg" alt="video" />
                        </div>
                        <p>Informational Tips on How to Invest With Synergy</p>
                    </div></div>
                    
                    <div><div
                        style={{
                            backgroundImage: `url(./assets/images/one.jpg)`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }} className={styles.tab}
                    >
                        <div className={styles.overlay}></div>
                        <div className={styles.image}>
                            <img src="./assets/icons/video.svg" alt="video" />
                        </div>
                        <p>Informational Tips on How to Invest With Synergy</p>
                    </div></div>
                    
                </div>
                <FooterHelp/>
            </div>
            <Footer/>
        </div>
    );
};


export default HelpComponent;