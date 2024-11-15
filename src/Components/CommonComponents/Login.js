import React, {useState} from "react";
import image1 from './../../assets/images/card1.jpg'
import {Link, useNavigate} from "react-router-dom";
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import  './css/login.css'
import {signIn} from "../../BackendFunctions/Auth";
import {Spinner} from "react-bootstrap";
export  default function LoginPage(){
   const [loading,setLoading] = useState(false);
   const navigate = useNavigate();
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
                                initialValues={{ email: '', password: '' }}
                                validationSchema={Yup.object({
                                  email: Yup.string().email('Invalid email address').required('Required'),
                                  password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
                                })}
                                onSubmit={async (values, { setErrors }) => {
                                  setLoading(true);
                                  const result = await signIn(values.email, values.password);
                                  setLoading(false);

                                  if (result.success) {
                                    localStorage.setItem('user', result.user.name);
                                    navigate('/');
                                  } else {
                                    setErrors({ email: "Invalid email or password" });
                                  }
                                }}
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
                                    <Link to="#">Forgot password?</Link>
                                </div>

                                <button type="submit" className="sign-in-btn" disabled={loading}>
                                  {loading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
                                </button>
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