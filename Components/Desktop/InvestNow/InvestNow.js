import React, {useState} from 'react';
import styles from './InvestNow.module.css';
import Link from 'next/link';
import {Row, Col } from 'reactstrap';


const InvestNow = () => {
    const [investDesc, setInvestDesc] = useState(false)
    const [investOption, setInvestOption] = useState(false)
    
    return (
        <div className={styles.DesktopInvestNow}>
            <div className="container-fluid">
                <Row>
                    <Col xs="12" sm="4">
                        <div><div className={styles.tab}>
                            <div className={styles.investItem}>
                                <div className={styles.imageContainer}>
                                    <img src="./moutain.jpg" className={styles.mainImage}/>
                                    <img src="./assets/icons/invest-grab-me.svg" alt="Grab me" className={styles.icon} />
                                </div>

                                <div className={styles.range}>
                                    <div className={styles.rangeInner}></div>
                                </div>

                                <div className={styles.rangeText}>89% left</div>


                                <div className={styles.namePrice}>
                                    <div className={styles.name}>
                                        <h1>Plastic PVC Pipes</h1>
                                        <p><img src="./assets/icons/location.svg" alt="location" className={styles.locationIcon} /> Lagos State</p>
                                    </div>

                                    <div className={styles.price}>
                                        <h1>$1200</h1>
                                        <p>Per unit</p>
                                    </div>
                                </div>

                                <div 
                                    className={styles.description} 
                                    onClick={() => setInvestDesc(!investDesc)}
                                >
                                    <h1>Description</h1>
                                <p><img src="./assets/icons/stats.svg" alt="stats" className={styles.statsIcon} /> 16% returns in 5 months</p>
                                </div>

                                <button onClick={() => setInvestOption(!investOption)}>INVEST NOW</button>

                            </div>
                        </div></div>
                    </Col>
                

                    <Col xs="12" sm="4">
                        <div><div className={styles.tab}>
                            <div className={styles.investItem}>
                                <div className={styles.imageContainer}>
                                    <img src="./moutain.jpg" className={styles.mainImage}/>
                                    <img src="./assets/icons/invest-grab-me.svg" alt="Grab me" className={styles.icon} />
                                </div>

                                <div className={styles.range}>
                                    <div className={styles.rangeInner}></div>
                                </div>

                                <div className={styles.rangeText}>89% left</div>


                                <div className={styles.namePrice}>
                                    <div className={styles.name}>
                                        <h1>Plastic PVC Pipes</h1>
                                        <p><img src="./assets/icons/location.svg" alt="location" className={styles.locationIcon} /> Lagos State</p>
                                    </div>

                                    <div className={styles.price}>
                                        <h1>$1200</h1>
                                        <p>Per unit</p>
                                    </div>
                                </div>

                                <div 
                                    className={styles.description} 
                                    onClick={() => setInvestDesc(!investDesc)}
                                >
                                    <h1>Description</h1>
                                <p><img src="./assets/icons/stats.svg" alt="stats" className={styles.statsIcon} /> 16% returns in 5 months</p>
                                </div>

                                <button onClick={() => setInvestOption(!investOption)}>INVEST NOW</button>

                            </div>
                        </div></div>
                    </Col>
               
                    <Col xs="12" sm="4">
                        <div><div className={styles.tab}>
                            <div className={styles.investItem}>
                                <div className={styles.imageContainer}>
                                    <img src="./moutain.jpg" className={styles.mainImage}/>
                                    <img src="./assets/icons/invest-grab-me.svg" alt="Grab me" className={styles.icon} />
                                </div>

                                <div className={styles.range}>
                                    <div className={styles.rangeInner}></div>
                                </div>

                                <div className={styles.rangeText}>89% left</div>


                                <div className={styles.namePrice}>
                                    <div className={styles.name}>
                                        <h1>Plastic PVC Pipes</h1>
                                        <p><img src="./assets/icons/location.svg" alt="location" className={styles.locationIcon} /> Lagos State</p>
                                    </div>

                                    <div className={styles.price}>
                                        <h1>$1200</h1>
                                        <p>Per unit</p>
                                    </div>
                                </div>

                                <div 
                                    className={styles.description} 
                                    onClick={() => setInvestDesc(!investDesc)}
                                >
                                    <h1>Description</h1>
                                <p><img src="./assets/icons/stats.svg" alt="stats" className={styles.statsIcon} /> 16% returns in 5 months</p>
                                </div>

                                <button onClick={() => setInvestOption(!investOption)}>INVEST NOW</button>

                            </div>
                        </div></div>
                    </Col>
                </Row>
           
                <div className={styles.grapMoreStyle}>
                    <Link href="/invest">
                    <a>
                    <div className={styles.grabMoreOffers}><button>Grab more offers</button></div> 
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InvestNow;