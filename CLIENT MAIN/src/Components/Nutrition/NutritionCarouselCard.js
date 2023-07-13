import React from 'react'

const NutritionCard = ({ image, title }) => {
    return (
        <>
            <div className='bg-white shadow w-24 h-full px-3 md:px-4 md:w-64'>
                <div className='w-full h-12 md:h-36'>
                    <img
                        src={image}
                        alt='food'
                        className='w-full h-full object-cover rounded-t-lg'
                    />
                </div>

                <div>
                    <h3 className='text-sm my-1 text-center font-normal lg:text-xl lg:font-normal'>{title}</h3>
                </div>
            </div>
        </>
    )
}


const NutritionCarousalCard = (props) => {
    return (
        <>
            <NutritionCard {...props} />
        </>
    )
}

export default NutritionCarousalCard;