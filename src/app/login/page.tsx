"use client"
import React, { useState } from 'react'
import styles from './loginStyles.module.css'
import Link from 'next/link'

const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const onlogin = (formData: any) => {
        console.log(formData);
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.form_Container}>
                <h1 className='text-3xl font-light'>Login to your account</h1>
                <div className={styles.form_card}>
                    <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                    <div className='px-8 py-6'>
                        <label className={styles.label}>Username or Emial<p className='text-red-500'>*</p></label>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Username or Email"
                            value={login.email}
                            onChange={(e) => setLogin({ ...login, email: e.target.value })}
                        />
                        <label className={styles.label}>Password<p className='text-red-500'>*</p></label>
                        <input
                            className={styles.input}
                            type="password"
                            placeholder="Password"
                            value={login.password}
                            onChange={(e) => setLogin({ ...login, password: e.target.value })}
                        />
                        <div className='flex justify-between items-baseline'>
                            <button type='submit' className={styles.button} onClick={() => onlogin({ ...login })}>Login</button>
                            <Link className='text-sm hover:underline' href='/forgetpassword'>Forgot Password?</Link>
                        </div>
                        <div className='mt-3 text-center font-medium'>
                            <Link className='text-sm hover:underline mt-5' href='/signup'>Don't have account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login