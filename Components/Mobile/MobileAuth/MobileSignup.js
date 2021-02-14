import React , {useState, useEffect} from 'react';
import {Signup, isAuth} from '../../../Action/Auth';
import Router from 'next/router';
import styles from './MobileSignup.module.css';
import Link from 'next/link';
let country = require('../../Files/Country.json')



const MobileSignupComponent = (props) => {

    const [confirmEmail, setConfirmEmail] = useState(false)
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        dailingCode: '',
        phonenumber: '',
        password: '',
        confirmpassword: '',
        howdidyouknowaboutus: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {firstname, lastname, email, phonenumber, dailingCode, password, confirmpassword,howdidyouknowaboutus, error, loading, message, showForm} = values

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        //console.table({firstname, lastname, email, phonenumber, password, confirmpassword,howdidyouknowaboutus, error, loading, message, showForm});
        setValues({...values, loading: true, error: false});
        const user = {firstname, lastname, email, dailingCode, phonenumber, password, confirmpassword,howdidyouknowaboutus};

        Signup(user)
        .then(data => {
            
            if(data.error){
                setValues({...values, error: data.error, loading: false });
            }else{
                setValues({
                    firstname: '', 
                    lastname: '', 
                    email: '', 
                    dailingCode: '',
                    phonenumber: '', 
                    password: '', 
                    confirmpassword: '',
                    howdidyouknowaboutus: '', 
                    error: '', 
                    loading: false, 
                    message: data.message, 
                    showForm: false
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

    const showError = () => (error ? 
        <div className="alert alert-danger">{error}</div> : ''
    );

    const showMessage = () => (message ? 
        <div className="alert alert-info">{message}</div> : ''
    );

    const signupForm = () => {
        return(
            <div className={styles.mobileSignup}>
                <div className={styles.signUp}>
                    <div className={styles.contentSingleOne}>
                        <div className={styles.head}>
                            Create a Secured Account
                        </div>
                        <div className={styles.subhead}>
                            Get Started with Creating Wealth!
                        </div>

                        <div className={styles.form}>
                        <form onSubmit={handleSubmit} className={styles.formSignup}>
                            <div className={styles.tab}>
                                <label>First Name:</label>
                                <div className={styles.input}>
                                <input 
                                    value={firstname} 
                                    onChange={handleChange('firstname')} 
                                    type="text" 
                                    required
                                 />
                                </div>
                            </div>

                            <div className={styles.tab}>
                                <label>Last Name:</label>
                                <div className={styles.input}>
                                    <input 
                                        value={lastname} 
                                        onChange={handleChange('lastname')} 
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>

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
                                <label>Phone Number:</label>
                                <div className={styles.input}>
                                    <div className={styles.phoneinput}>
                                    <select 
                                        className={styles.phoneCode}
                                        value={dailingCode}
                                        onChange={handleChange('dailingCode')}
                                        required 
                                    >
                                        {
                                            country.map(item => {
                                                return(
                                                    <option  
                                                        value={item.dailingCode}
                                                        required
                                                    >
                                                        (+{item.dailingCode}) {item.shortCode}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                    <input 
                                        type="phone" 
                                        style={{paddingLeft:`1vw`}}
                                        value={phonenumber} 
                                        onChange={handleChange('phonenumber')}
                                        required  
                                    />
                                    </div>
                                </div>
                               {/*  <div className="input">
                                    <input 
                                        value={phonenumber} 
                                        onChange={handleChange('phonenumber')} 
                                        type="text" 
                                        placeholder="+2347000000000"
                                        required
                                    />
                                </div> */}
                            </div>

                            <div className={styles.tab}>
                            <label>Password:</label>
                                 <div className={styles.input}>
                                 <input value={password}  onChange={handleChange('password')} 
                                  type="password" 
                                  autoComplete="off"
                                  required
                                 />
                                </div>
                            </div>

                            <div className={styles.tab}>
                            <label>Confirm Password:</label>
                            <div className={styles.input}>
                                
                               <input value={confirmpassword} onChange={handleChange('confirmpassword')} 
                                 type="password" 
                                 autoComplete="off"
                                 required
                                />
                            </div>
                            </div>

                            <div className={styles.tab}>
                            <label>How did you hear about us?</label>
                            <select
                                    className={styles.input} 
                                    value={howdidyouknowaboutus}
                                    onChange={handleChange ('howdidyouknowaboutus')}
                                    type="text" 
                                    required
                                >
                                    <option value="Choose" select="true">Choose One</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Email">Email</option>
                                    <option value="LinkedIn" select>LinkedIn</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Google Search">Google Search</option>
                                    <option value="Newspaper">Newspaper</option>
                                    <option value="Blog">Blog</option>
                                    <option value="Event">Event</option>
                                    <option value="Others">Others</option>
                                </select>
                            
                            </div>

                            <div className={styles.tab, styles.checkbox}>
                                <div className={styles.tabInner}>
                                    <input type="checkbox" required />
                                    <label>I confirm that I have read the <Link href="/signup"><a >Privacy Policy</a></Link></label>
                                </div>
                                <div className={styles.tabInner}>
                                    <input type="checkbox" required />
                                    <label>I confirm that I have read and agreed to our <Link href="/signup"><a>Terms of Use</a></Link></label>
                                </div>
                                
                                <div className={styles.button}>
                                    <button className={styles.getStarted} onClick={() => setConfirmEmail(!confirmEmail)}>GET STARTED</button>
                                </div>
                            </div>
                        </form>
                      </div>
                    </div>
                    {!Signup() &&
                      <div className={confirmEmail ? "popup-toggle popup" : "popup"}>
                      <div className={styles.background} onClick={() => setConfirmEmail(!confirmEmail)}></div>
                      <div className={styles.inner}>
                          <div className={styles.content}>
                              <p>You have successfully signed up</p>
                              <p>Check your email address for a confirmation mail to complete your account setup</p>
  
                              <button onClick={() => setConfirmEmail(!confirmEmail)}>DONE</button>
                          </div>
                      </div>
                  </div>
                    }
                  
                </div>
                <div className={styles.footerThree}>
                  &copy; {(new Date().getFullYear())} synergyindustries.org. All rights reserved
                </div>
            </div>
        );
    };
    return(
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </React.Fragment>
    );
};

export default MobileSignupComponent;