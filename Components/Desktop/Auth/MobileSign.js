import React , {useState, useEffect} from 'react';
import {Signin, authenticate, isAuth} from '../../../Action/Auth';
import Navigation from '../../NavigationComponent/ToolbarComponents/ToolbarComponent';
import InvestNow from '../InvestNow/InvestNow';
import Router from 'next/router';
import styles from './Signin.module.css';
import Link from 'next/link';
import Footer from '../FooterComponents/Footer';

const MobileSigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {email, password, nerror, loading, message, showForm} = values

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);
    const handleSubmit = e => {
        e.preventDefault();
        //console.table({firstname, lastname, email, phonenumber, password, confirmpassword,howdidyouknowaboutus, error, loading, message, showForm});
        setValues({...values, loading: true, error: false});
        const user = {email, password};

        Signin(user)
        .then(data => {
            
            if(data.error){
                setValues({...values, error: data.error, loading: false });
            }else{
                //save user token to cookie
                //save user info to localstorage
                //authenticate user
                authenticate(data, () => {
                    Router.push(`/`)
                });  
            }
        });

    };

    const handleChange = name => e => {
        setValues({...values, error: false, [name]: e.target.value})
    };

    const showLoading = () => (loading ? 
        <div className="alert alert-info">Loading...</div> : ''
    );
    
    //const showError = () => (error ? 
       // <div className="alert alert-danger">{error}</div> : ''
    //);

    const showMessage = () => (message ? 
        <div className="alert alert-info">{message}</div> : ''
    );

    const signinForm = () => {
        return(
            <div className={styles.mobileSignin}>
                <Navigation />
                <div className={styles.signinText}>
                        <div className={styles.head}>
                            A Smarter Way to Grow Together<br />
                            Let Your Money Walk The Talk
                        </div>
                        <div className={styles.subhead}>
                            Synergy connects you to life changing offers with higher returns
                        </div>
                        </div>
                <div className={styles.signIn}>
                    <div className={styles.contentDoubleOne}>
                        <div className={styles.text}>
                          <div className={styles.head}>Login</div>
                          <div className={styles.form}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formSignin}>
                                    <div className={styles.tab}>
                                    <label>Email:</label>
                                        <div className={styles.input}>
                                            <input 
                                                value={email} 
                                                onChange={handleChange('email')} 
                                                type="email"  
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.tab}>
                                    <label>Password:</label>
                                    <div className={styles.input}>
                                    <input value={password}  onChange={handleChange('password')} 
                                        type="password" required/>
                                        
                                    </div>
                                        <div className={styles.forgot-password} style={{textAlign:`right`}}>
                                            Forgot Password?
                                        </div>
                                        
                                    </div>

                                    <div className={styles.tab}>
                                    <div className={styles.button}>
                                        <button className={styles.login}>LOGIN</button>
                                        <div className={styles.forgotPassword}>Don't have an account? <Link href="/signup">Get started</Link></div>
                                    </div>
                                </div>
                                </div>

                            </form>

                          </div>
                          
                        </div>
                   
                    </div>
                    <div className={styles.invest}>
                    <div className={styles.contentSingleOne}>
                        <div className={styles.head}>
                            INVESTMENT OFFERS
                        </div>
                        <div className={styles.subhead}>WE'VE CREATED THE OPPORTUNITY. THE NEXT ACTION IS YOURS</div>
                    </div>

                    <InvestNow/>
        
                </div>
                </div>
                <Footer/>
            </div>
        );
    };
    return(
        <React.Fragment>
            {/* {showError()} */}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </React.Fragment>
    );
};

export default MobileSigninComponent;