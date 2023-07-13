import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

// Components
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants)

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants)
    }, [reduxState.restaurants])

    return (
        <>
            <DeliveryCarousel />
            {/* <Brand /> */}
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in Shashtri Nagar
            </h1>
            <div className='flex justify-between flex-wrap'>
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))
                }
            </div>
        </>
    )
}

export default Delivery;