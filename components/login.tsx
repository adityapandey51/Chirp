"use client"
import {CredentialResponse, GoogleLogin} from "@react-oauth/google"
import { useCallback } from "react"

export const LoginButton=()=>{
    const handleLoginWithGoogle=useCallback((cred:CredentialResponse)=>{
        
    },[])
    return (
        <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Chirp</h1>
            <GoogleLogin onSuccess={(cred)=>console.log(cred)}/>
        </div>
    )
}