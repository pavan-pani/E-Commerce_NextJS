"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVefied] = useState(false)
    const [error, setError] = useState(false)

    const VerifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token })
            setVefied(true)
        } catch (error: any) {
            setError(true)
            console.log(error.response.data);

        }
    }

    useEffect(()=>{
        const urlToken=window.location.search.split("=")[1]
        setToken(urlToken || "")
    },[])

    useEffect(() => {
        if (token.length > 0) VerifyUserEmail()
    }, [token])

    return(
        <div className=" flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className=" text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-600 text-black">{token ? `${token}`:"no token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email verified</h2>
                    <Link className="text-blue-500" href='/login'>Login</Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-600">Error</h2>
                </div>
            )}

        </div>
    )
}