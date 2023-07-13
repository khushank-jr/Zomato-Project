import React from "react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import gravatar from "gravatar";

const CheckoutNavbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const reduxState = useSelector((global) => global.user.user)

    return <>
        <nav className="p-4 bg-white shadow-md lg:shadow-none flex w-full items-center justify-between">
            <div className="container mx-auto px-4 md:px-40">
                <div className="flex w-full items-center justify-between">
                    <AiOutlineArrowLeft />
                    <div className="w-28">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full">
                            <img
                                src={gravatar.url(reduxState?.user?.email)}
                                alt={reduxState?.user?.email}
                                className="w-full h-full"
                            />
                        </div>
                        {reduxState?.user?.fullname}
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default CheckoutNavbar;