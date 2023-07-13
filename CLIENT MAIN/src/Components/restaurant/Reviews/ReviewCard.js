import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../Redux/Reducer/User/user.action';
import dayjs from "dayjs";

const ReviewCard = (props) => {
    const [user, setUser] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(props.user)).then((data) =>
            setUser(data.payload.user.fullname)
        )
    }, [])

    return (
        <>
            <div className='my-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <img src="https://b.zmtcdn.com/data/user_profile_pictures/f8b/9c08775cf73074ee84b144783059cf8b.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                                alt="avatar"
                                className='w-full h-full rounded-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>{user}</h3>
                            <small className='text-gray-500'>5 Reviews &#8226; 3 Followers</small>
                        </div>
                    </div>
                    <button className='text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg'>Follow</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <span className='text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center'>
                            3<TiStarFullOutline />
                        </span>
                        <h5 className='font-regular uppercase'>{props.isRestaurantReview ? "Dining" : "Delivery"}</h5>
                        <small className='text-gray-500'>{dayjs(props.createdAt).format("DD MM YYYY")}</small>
                    </div>
                    <div className='w-full'>
                        <p className='w-full text-gray-600 font-light text-base'>
                            {props.reviewText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard;