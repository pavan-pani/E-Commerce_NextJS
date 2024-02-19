"use client"
import React, { useState } from 'react'
import styles from './signupStyles.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Signup = () => {

    const router = useRouter()
    const [signUpBtnDisabled, setSignUpBtnDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onSignup = async (event: any) => {
        event.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", signup);
            console.log("Signup success", response.data);
            router.push("/login");

        } catch (error) {
            console.log("sign-up failed", error);
        }
        finally {
            setLoading(false)
        }
        console.log(signup);

    }


    return (
        <div className={styles.loginContainer}>
            <div className={styles.form_Container}>
                <h1 className='text-3xl font-light'>Signup to your account</h1>
                <div className={styles.form_card}>
                    <div className='h-2 bg-indigo-400 rounded-t-md'></div>

                    <div className='px-8 py-6'>
                        <label className={styles.label}>Name <p className='text-red-500'>*</p></label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Name"
                            value={signup.name}
                            onChange={(e) => setSignup({ ...signup, name: e.target.value })}
                            required
                        />
                        <label className={styles.label}>Email <p className='text-red-500'>*</p></label>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Email"
                            value={signup.email}
                            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
                            required
                        />
                        <label className={styles.label}>Password <p className='text-red-500'>*</p></label>
                        <input
                            className={styles.input}
                            type="password"
                            placeholder="Password"
                            value={signup.password}
                            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
                            required
                        />
                        <label className={styles.label}>Confirm Password <p className='text-red-500'>*</p></label>
                        <input
                            className={styles.input}
                            type="password"
                            placeholder="Confirm Password"
                            value={signup.confirmPassword}
                            onChange={(e) => setSignup({ ...signup, confirmPassword: e.target.value })}
                            required
                        />
                        <div className='flex justify-between items-baseline'>
                            <button type='submit' className={styles.button} onClick={onSignup}>{loading ? "Submitting..." : "Signup"}</button>
                            <Link className='text-sm hover:underline' href='/login'>Already have account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup