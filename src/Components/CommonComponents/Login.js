import React from "react";
import image1 from './../../assets/images/card1.jpg'
import {Link} from "react-router-dom";
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import  './../../assets/css/login.css'
export  default function LoginPage(){
    return(
        <>
            <div className='main-login-section'>
                <div className="login-container">
                    <div className="image-section">
                        <img src={image1} alt="Room"/>
                    </div>
                    <div className="login-section">
                        <h2>Welcome back!</h2>
                        <p>Sign in to access your dashboard, settings and projects:</p>
                        <Formik
                            initialValues={{email: '', password: ''}}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                                password: Yup.string()
                                    .min(6, 'Must be 6 characters or more')
                                    .required('Required'),
                            })}
                            onSubmit={async(values,{setErrors}) => {}}
                        >
                            {({errors})=>(
                                <Form>
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" placeholder="hello@123d.one" required/>
                                {errors.email && <div className="error text text-danger">{errors.email}</div>}
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" placeholder="********" required/>
                                {errors.password && <div className="error text text-danger">{errors.password}</div>}
                                <div className="options">
                                    <a href="#">Forgot password?</a>
                                </div>

                                <button type="submit" className="sign-in-btn">Sign In</button>
                                <Link to='/' type="button" className="google-sign-in-btn">Back to Home Page</Link>
                            </Form>
                            )}
                        </Formik>

                        <p className="sign-up">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}