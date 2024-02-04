import React from 'react'
import styles from './loginStyles.module.css'
import Link from 'next/link'

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.form_Container}>
                <h1 className='text-3xl font-light'>Login to your account</h1>
                <div className={styles.form_card}>
                    <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                    <div className='px-8 py-6'>
                        <label className={styles.label}>Username or Emial<p className='text-red-500'>*</p></label>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            className={styles.input}
                        />
                        <label className={styles.label}>Password<p className='text-red-500'>*</p></label>
                        <input
                            type="text"
                            placeholder="Password"
                            className={styles.input}
                        />
                        <div className='flex justify-between items-baseline'>
                            <button type='submit' className={styles.button}>Login</button>
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