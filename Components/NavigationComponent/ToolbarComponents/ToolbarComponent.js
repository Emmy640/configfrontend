import React from 'react';
import styles from './ToolbarComponent.module.css';
import Logo from '../../Logo/Logo';
import Link from 'next/link';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}>
            <Link href="/">
                <a><Logo/></a>
            </Link>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems/>
        </nav>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
    </header>
);

export default Toolbar;