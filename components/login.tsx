"use client"
import { graphqlClient } from "@/clients/api"
import { verifyUserGoogleTokenQUery } from "@/graphql/query/user"
import {CredentialResponse, GoogleLogin} from "@react-oauth/google"
import { useCallback } from "react"
import {toast} from "react-hot-toast"

export const LoginButton=()=>{
    const handleLoginWithGoogle=useCallback(async(cred:CredentialResponse)=>{
        const googleToken=cred.credential;
        if(!googleToken){
            return toast.error(`Google Token not Found`)
        }
        const { verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQUery,{token: googleToken})

        toast.success("Verified Successfully")

        if(verifyGoogleToken){
            window.localStorage.setItem('__Chirp_token',verifyGoogleToken)
        }
    },[])
    return (
        <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Chirp</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle}/>
        </div>
    )
}