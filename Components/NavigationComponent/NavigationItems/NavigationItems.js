import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Link from 'next/link';


const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem>
            <Link href="/" active>Home</Link>
        </NavigationItem>
        <NavigationItem>
            <Link href="/invest">Invest</Link>
        </NavigationItem>
        <NavigationItem >
        <Link href="/how-it-works">How</Link>
            
              {/* <div className="dropdown">
                <div   id="dropdownMenuButtona" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link href="/">
                How
                </Link>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtona">
                    <Link href="/who-can-invest"><a className="dropdown-item" >Who can invest</a></Link>
                    <Link href="/invest"><a className="dropdown-item" >Invest in 5 easy steps</a></Link>
                    <Link href="/feature-offer"><a className="dropdown-item">Feature offers</a></Link>
                    <Link href="/investment-offer"><a className="dropdown-item">Investment offers</a></Link>
                </div>
                </div> */}
           
        </NavigationItem>
        <NavigationItem>
            
                 <div className="dropdown">
                <div   id="dropdownMenuButtonb" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link href="/">
                     Media
                </Link>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonb">
                    <Link href="/investors-stories"><a className="dropdown-item" >Investors Stories</a></Link>
                    <Link href="/synergy-tv"><a className="dropdown-item" >Synergy TV</a></Link>
                    <Link href="/photos"><a className="dropdown-item">Photos</a></Link>
                </div>
                </div>
        </NavigationItem>
        <NavigationItem>
            <Link href="/help">Help</Link>
        </NavigationItem>
        <NavigationItem>
            <Link href="/resources">Resources</Link>
        </NavigationItem>
        <NavigationItem>
            <Link href="/signin">
                <button className={styles.login}>Login</button>
            </Link>
        </NavigationItem>
        <NavigationItem>
            <Link href="/signup" className={styles.signup}>
            <button className={styles.getstarted}>Signup</button>
            </Link>
        </NavigationItem>
    </ul>
);

export default NavigationItems;