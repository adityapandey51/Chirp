"use client"

import { useCurrentUser } from "@/hooks/user"
import Image from "next/image";

export const LoggedInBatch=()=>{
    const {user}=useCurrentUser();

    return <div className="flex items-center gap-4 mt-44 bg-gray-800 py-2 px-3 rounded-full">
        {user && user.profileImageURL && <Image src={user?.profileImageURL} className="rounded-full" height={50} width={50} alt="user-image"/>}
        <h3 className="text-xl font-semibold">{user?.firstName} {user?.lastName}</h3>
    </div>
}