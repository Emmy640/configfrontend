import React from 'react';
import styles from './MobileFooter.module.css';


import Link from 'next/link';


const MobileFooter = () => {

    return (
        <div className={styles.Mobile}>
            <div className={styles.footer}>
               <div className={styles.footerone}>
                   <div>
                    <div className={styles.text}>Experience Wealth.
                    <br />Get Started for Free!</div>

                   </div>
                    <div className={styles.button}>
                        <Link className={styles.link} href="/invest">
                            <button>
                                <a>Invest Now</a>
                            </button>
                        </Link>
                    </div>
                </div>


                <div className={styles.footertwo}>
                    <div className="container-fluid">
                        <div className="row g-2">
                            <div className="col-8">
                                <div className={styles.list}>
                                    <div className={styles.head}>LEGAL</div>
                                    <div className={styles.content}>
                                        <span>User Agreement</span>
                                        <span>Privacy Policy</span>
                                        <span>Cookie Policy</span>
                                        <span>Terms & Conditions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-2">
                            <div className="col-8">
                            <div className={styles.list}>
                        <div className={styles.head}>QUICK LINKS</div>
                        <div className={styles.content}>
                            <Link className={styles.link} href="/invest">
                                <span>
                                    <a>Invest</a>
                                </span>
                            </Link>
                            <Link className={styles.link} href="/team">
                                <span>
                                    <a>Who we are</a>
                                </span>
                            </Link>
                            <Link className={styles.link} href="/help">
                                <span>
                                    <a>Help</a>
                                </span>
                            </Link>
                            <Link className={styles.link} href="/investors-stories">
                                <span>
                                    <a>Investors Stories</a>
                                </span>
                            </Link>
                            <Link className={styles.link} href="/resources">
                                <span>
                                    <a>Resources</a>
                                </span>
                            </Link>
                        </div>
                    </div>
                            </div>
                        </div>

                        <div className="row g-2">
                            <div className="col-8">
                                <div className={styles.list}>
                                    <div className={styles.head}>CONTACT US</div>
                                    <div className={styles.subhead}>
                                        10 Christ Embassy Road, Asese, Along Lagos-Ibadan Expressway
                                    </div>
                                    <div className={styles.subhead}>+2347049192396</div>
                                    <div className={styles.content}>
                                        <span>info@synergyindustries.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-2">
                            <div className="col-8">
                                <div className={styles.list}>
                                    <div className={styles.head}>WORKING HOURS</div>
                                    <div className={styles.subhead}>Days (Monday-Friday)</div>
                                    <div className={styles.subhead}>Time (9am - 5pm)</div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-2">
                            <div className={styles.lastfooter}>
                                <div className={styles.list}>
                                    <div className="col-8">
                                    <div className={styles.head} style={{marginTop:`5vh`}}>FOLLOW US</div>
                                    <div className={styles.social}>
                                    <img src="./assets/icons/instagram.svg" alt="instagram" />
                                        <img src="./assets/icons/facebook.svg" alt="facebook" />
                                        <img src="./assets/icons/twitter.svg" alt="twitter" />
                                        <img src="./assets/icons/linkedin.svg" alt="linkedin" />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className={styles.logo}>
                                     <img src="./assets/logo.svg" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footerthree}>
                 &copy; {(new Date().getFullYear())} synergyindustries.org. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default MobileFooter;