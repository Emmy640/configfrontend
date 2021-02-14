import React, {Component} from 'react';
import styles from './Layouts.module.css';
import SideDrawer from '../NavigationComponent/SideDrawer/SideDrawer';
import Toolbar from '../NavigationComponent/ToolbarComponents/ToolbarComponent';
import HomeSlider from '../Desktop/HomeSlider/HomeSlider';
import InvestNow from '../Desktop/InvestNow/InvestNow';
import Testimonials from '../Desktop/Testimonials/Testimonials';
import InvestInAfrica from '../Desktop/InvestInAfrica/InvestInAfrica';
import Footer from '../Desktop/FooterComponents/Footer';
import MobileHomeSlider from '../Mobile/HomesliderComponent/HomesliderComponent';
import MobileTestimonial from '../Mobile/Testimonials/MobileTestimonial';
import MobileInvestInAfrica from '../Mobile/MobileInvestInAfrica/MobileInvestInAfrica';
import MobileFooter from '../Mobile/MobileFooter/MobileFooter';
import MobileInvestSteps from '../Mobile/mobileInvestSteps/MobileInvestSteps';
import InvestSteps from '../Desktop/InvestSteps/InvestSteps';

class Layout extends Component {

    state = {
      showSideDrawer: false  
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}  
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>
                    {this.props.children}
                    <HomeSlider/>
                    <MobileHomeSlider/>
                    <InvestNow/>
                    <Testimonials/>
                    <MobileTestimonial/>
                    <InvestInAfrica/>
                    <MobileInvestInAfrica/>
                    <InvestSteps/>
                    <MobileInvestSteps/>
                    <Footer/>
                    <MobileFooter/>
                </main>
            </React.Fragment>
        );
    };
};

export default Layout;