"use client"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { Inter } from "next/font/google";


import { GoogleOAuthProvider } from "@react-oauth/google"
import React from "react"


const inter = Inter({ subsets: ["latin"] });

const queryClient=new QueryClient();
export const Provider=({children}:{children:React.ReactNode})=>{
    return (
    <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="786323574832-gevus1bus9v1qe816ce478q2fgjiopae.apps.googleusercontent.com">
            {children}
            <ReactQueryDevtools/>
        </GoogleOAuthProvider>
      </QueryClientProvider>
      </body>
    );
}