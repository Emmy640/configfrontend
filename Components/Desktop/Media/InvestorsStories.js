import React, {useState} from 'react';
import styles from './InvestorsStories.module.css';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import Footer from '../FooterComponents/Footer';

const InvestorsStories = () => {
    const [investorsStories, setInvestorsStories] = useState(false)
    return(
        <div className={styles.Deskstopinvestorstory}>
            <Navigation/>
            <div className={styles.investorstory}>
                <div className={styles.contentsingleone}>
                    <div className={styles.head}>
                        Exciting Stories from Amazing Investors
                    </div>

                    <div className={styles.investorstories}>

                        <div className={styles.button}>
                            <button onClick={() => setInvestorsStories(!investorsStories)}>Add Your Story</button>
                        </div>

                        <div className={styles.tableft}>
                            <div className={styles.image}>
                                <img src="./assets/icons/user.svg" alt="user" />
                            </div>
                            <div className={styles.text}>
                                <h2>PATRICK O.</h2>
                                <div className={styles.content}>“Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut, sed diam no Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut,sed dia.....<span className="read-more"> read more </span>"</div>
                                <i className={styles.sub}>tuester adispiscing eliutrt tuester </i>
                            </div>
                            <div></div>
                        </div>
                        
                        <div className={styles.tabright}>
                            <div></div>
                            <div className={styles.image}>
                                <img src="./assets/icons/user.svg" alt="user" />
                            </div>
                            <div className={styles.text}>
                                <h2>PATRICK O.</h2>
                                <div className={styles.content}>“Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut, sed diam no Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut,sed dia.....<span className="read-more"> read more </span>"</div>
                                <i className={styles.sub}>tuester adispiscing eliutrt tuester </i>
                            </div>
                        </div>
                        
                        <div className={styles.tableft}>
                            <div className={styles.image}>
                                <img src="./assets/icons/user.svg" alt="user" />
                            </div>
                            <div className={styles.text}>
                                <h2>PATRICK O.</h2>
                                <div className={styles.content}>“Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut, sed diam no Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut,sed dia.....<span className="read-more"> read more </span>"</div>
                                <i className={styles.sub}>tuester adispiscing eliutrt tuester </i>
                            </div>
                            <div></div>
                        </div>
                        
                        <div className={styles.tabright}>
                            <div></div>
                            <div className={styles.image}>
                                <img src="./assets/icons/user.svg" alt="user" />
                            </div>
                            <div className={styles.text}>
                                <h2>PATRICK O.</h2>
                                <div className={styles.content}>“Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut, sed diam no Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut,sed dia.....<span className="read-more"> read more </span>"</div>
                                <i className={styles.sub}>tuester adispiscing eliutrt tuester </i>
                            </div>
                        </div>
                        
                        <div className={styles.tableft}>
                            <div className={styles.image}>
                                <img src="./assets/icons/user.svg" alt="user" />
                            </div>
                            <div className={styles.text}>
                                <h2>PATRICK O.</h2>
                                <div className={styles.content}>“Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut, sed diam no Lorem ipsum dolor Sit amet, consecutuester adispiscing eliut,sed dia.....<span className="read-more"> read more </span>"</div>
                                <i className={styles.sub}>tuester adispiscing eliutrt tuester </i>
                            </div>
                            <div></div>
                        </div>
                                    
                        
                        {/* <div className={investorsStories ? "popup-toggle popup" : "popup"}>
                            <div className={styles.background} onClick={() => setInvestorsStories(!investorsStories)}></div>
                            <div className={styles.inner}>
                                <div className={styles.content}>
                                    <label>Name:</label>
                                    <input type="text" />

                                    <label>Share a brief of your story:</label>
                                    <textarea></textarea>

                                    <label>Email Address:</label>
                                    <input type="email" />

                                    <button onClick={() => setInvestorsStories(!investorsStories)}>SUBMIT <img src="./assets/icons/submit.svg" /></button>
                                </div>
                            </div>
                        </div> */}
                    
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default InvestorsStories;