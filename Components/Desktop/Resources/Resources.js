import React from 'react';
import styles from './Resources.module.css';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';
import Link from 'next/link';
//import ResourcesItem from './ResourcesItem';

const Resources = () =>{
    return(
        <div className={styles.desktopResources}>
            <Navigation/>
            <div className={styles.contentsingleone}>
                <div className={styles.head}>
                    <div className={styles.resourceshead}>
                     Resources
                    </div>
                </div>
            </div>
            
            <div className={styles.resources}>
               {/*  <ResourcesItem /> */}
                
                <div className={styles.contentsingleone}>
                    <div className={styles.title}>Catogeries</div>
                    <ul>
                        <li>Settings of Auto Invest</li>
                        <li>How do +0.5% count for my future investments</li>
                        <li>Can I still invest manually if I have Auto Invest</li>
                        <li>Are there any limitations on investment amount?</li>
                    </ul>

                    <div className={styles.title}>Contact for communication matters</div>
                    <div className={styles.contactcard}>
                        <div className={styles.image}></div>

                        <p>John Doe</p>
                        <p>Head of Marketing and Communication</p>
                        <p>John@synergyindustries.org</p>
                    </div>
                </div>
            </div>

            <div className={styles.resourcesvideo}>
                <div className={styles.resourcesvideohead}>
                    <h2>Helpful Videos</h2>
                    <Link className={styles.links} href='/synergy-tv'>
                        <a>
                        <p className={styles.moretext}>
                            Click for more Videos
                            <img src="./assets/icons/arrow-orange.svg" alt="arrow" />
                        </p>
                        </a>
                    </Link>
                    
                </div> 
                
                <div className={styles.contenttripleone}>
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
                </div>

            </div>
           
            <Footer/>
        </div>
    );
};

export default Resources;