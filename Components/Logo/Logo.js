import React from 'react';
import styles from './Logo.module.css';
import Link from 'next/link';


const Logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <Link href="/">
          <img src="./assets/logo.svg" alt="Synergy Industries"/>
        </Link>  
    </div>
);

export default Logo;