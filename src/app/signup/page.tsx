import React from 'react'
import styles from './signupStyles.module.css'
import Link from 'next/link'

const Signup = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.form_Container}>
                <h1 className='text-3xl font-light'>Signup to your account</h1>
                <div className={styles.form_card}>
                    <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                    <div className='px-8 py-6'>
                        <label className={styles.label}>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                        />
                        <label className={styles.label}>Email <p className='text-red-500'>*</p></label>
                        <input
                            type="text"
                            placeholder="Email"
                            className={styles.input}
                            required
                        />
                        <label className={styles.label}>Password <p className='text-red-500'>*</p></label>
                        <input
                            type="text"
                            placeholder="Password"
                            className={styles.input}
                            required
                        />
                        <label className={styles.label}>Confirm Password <p className='text-red-500'>*</p></label>
                        <input
                            type="text"
                            placeholder="Confirm Password"
                            className={styles.input}
                            required
                        />
                        <div className='flex justify-between items-baseline'>
                            <button type='submit' className={styles.button}>Signup</button>
                            <Link className='text-sm hover:underline' href='/login'>Alredy have account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup