import React from 'react'
import styles from './FooterHelp.module.css'

const FooterHelp = () => {
    return (
        <div className={styles.desktopFootHelp}>
            <div className={styles.footerHelp}>
                <div className={styles.head}>Can't Find What You Need?</div>
                <div className={styles.subhead}>Feel free to reach out via any of our channels</div>

                <div className={styles.columns}>
                    <div><div className={styles.tab}>
                        <div className={styles.image}>
                            <img src="./assets/help-footer/live-chat.svg" alt='call us' />
                        </div>
                        <p>Live Chat</p>
                    </div></div>
                    
                    <div><div className={styles.tab}>
                        <div className={styles.image}>
                            <img src="./assets/help-footer/send-email.svg" alt='call us' />
                        </div>
                        <p>Send Us an Email</p>
                    </div></div>
                    
                    <div><div className={styles.tab}>
                        <div className={styles.image}>
                            <img src="./assets/help-footer/call-us.svg" alt='call us' />
                        </div>
                        <p>Call Us</p>
                    </div></div>
                    
                    <div><div className={styles.tab}>
                        <div className={styles.image}>
                            <img src="./assets/help-footer/send-us-a-dm.svg" alt='call us' style={{height:`3vh`, marginTop:`3vh`}} />
                        </div>
                        <p style={{marginBottom:`1vh`}}>Send Us a Dm</p>
                    </div></div>
                </div>
            </div>
            
        </div>
    )
}

export default FooterHelp
