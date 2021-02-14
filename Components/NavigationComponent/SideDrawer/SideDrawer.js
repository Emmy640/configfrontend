import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import Link from 'next/link';
import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';


const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={styles.Logo}>
                <Link href="/"><a><Logo/></a></Link>
            </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
};

export default SideDrawer;