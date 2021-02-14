import React from 'react';
import styles from './HomeSlider.module.css';
import Carousel from 'react-bootstrap/Carousel';


const HomeSlider = (props) => {

    return(
        <div className={styles.DesktopHomeSlider}>
            <Carousel>
                <Carousel.Item>
                   <div 
                       className={styles.contentSingleOne}
                            style={{
                                backgroundImage: `url(./assets/home-one.svg)`,
                                backgroundSize:`100%`,
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
                            backgroundImage: `url(./assets/home-two.svg)`,
                            backgroundSize:`90%`,
                            backgroundPosition:`center`,
                            backgroundRepeat:`no-repeat`
                        }}
                    >

                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div 
                        className={styles.contentSingleOne}
                        style={{
                            backgroundImage: `url(./assets/home-three.svg)`,
                            backgroundSize:`90%`,
                            backgroundPosition:`center`,
                            backgroundRepeat:`no-repeat`
                        }}
                    >

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div 
                        className={styles.contentSingleOne}
                            style={{
                                backgroundImage: `url(./assets/home-four.svg)`,
                                backgroundSize:`100%`,
                                backgroundPosition:`center`,
                                backgroundRepeat:`no-repeat`
                            }}
                    ></div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeSlider;