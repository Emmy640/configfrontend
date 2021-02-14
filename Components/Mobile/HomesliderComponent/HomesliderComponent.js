import React from 'react';
import styles from './HomesliderComponent.module.css';
import Carousel from 'react-bootstrap/Carousel';

const HomesliderComponent = () => {

    return(
        <div className={styles.Mobile}>
            <Carousel>
                <Carousel.Item>                    
                <div 
                       className={styles.contentSingleOne}
                            style={{
                                backgroundImage: `url(./mobile/homeone.svg)`,
                                backgroundSize:`50%`,
                                backgroundPosition:`center`,
                                backgroundRepeat:`no-repeat`
                            }}
                        >
                            <div className={styles.text}>
                                <div className={styles.head}>We protect what is most important to you</div>
                                <div className={styles.subhead}>Your Investments, Your Data and Your Returns</div>
                            </div>
                   </div>
                                       
                </Carousel.Item>

                <Carousel.Item>                    
                <div 
                       className={styles.contentSingleOne}
                            style={{
                                backgroundImage: `url(./mobile/hometwo.svg)`,
                                backgroundSize:`80%`,
                                backgroundPosition:`center`,
                                backgroundRepeat:`no-repeat`
                            }}
                        >
                            <div className={styles.text}>
                                <div className={styles.head}>Pay for your investments from any country</div>
                                <div className={styles.subhead}>You are not limited by boundaries! Make payments from any country using your debit or credit card</div>
                            </div>
                       </div>
                                       
                </Carousel.Item>

                <Carousel.Item>                    
                <div 
                       className={styles.contentSingleOne}
                            style={{
                                backgroundImage: `url(./mobile/homethree.svg)`,
                                backgroundSize:`50%`,
                                backgroundPosition:`center`,
                                backgroundRepeat:`no-repeat`
                            }}
                        >
                        <div className={styles.text}>
                            <div className={styles.head}>We can write Africa's success story one investiment at a time</div>
                            <div className={styles.subhead}>Your Investments, Your Data and Your Returns</div>
                        </div>
                       </div>
                                       
                </Carousel.Item>

                <Carousel.Item>                    
                <div 
                       className={styles.contentSingleOne}
                            style={{
                                backgroundImage: `url(./mobile/homefour.svg)`,
                                backgroundSize:`80%`,
                                backgroundPosition:`center`,
                                backgroundRepeat:`no-repeat`
                            }}
                        >
                        <div className={styles.text}>
                            <div className={styles.head}>Earn up to 15% interest</div>
                            <div className={styles.subhead}>Access high-yield investment offers</div>
                        </div>
                       </div>
                                       
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomesliderComponent;