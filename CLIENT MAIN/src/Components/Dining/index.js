import React from 'react'

// Components
import DiningCarousel from './DiningCarousel';

const Dining = () => {
    return (
        <div>
            <DiningCarousel />
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
                Dine-Out Restaurants in Shashtri Nagar
            </h1>
        </div>
    )
}

export default Dining;