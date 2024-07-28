import Image from "next/image";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const FeedCard:React.FC = ()=>{
    return (
        <div className="border border-gray-600 border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 transition-all">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/124462709?v=4" className="rounded-full" height={50} width={50} alt="user-image"/>
                </div>
                <div className="col-span-11">
                    <h5>
                        Aditya Pandey
                    </h5>
                    <p>
                        hello iam aditya pandey i am currently pursuimhg btech from national institute of technology
                    </p>
                    <div className="flex justify-between  mt-5 text-xl items-center w-[80%]">
                        <div>
                        <AiOutlineMessage />

                        </div>
                        <div>
                            <FaRetweet/>
                        </div>
                        <div>
                            <FaRegHeart/>
                        </div>
                        <div>
                            <FiUpload/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard