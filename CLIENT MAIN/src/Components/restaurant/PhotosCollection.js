import React from 'react'

const PhotosCollection = (props) => {

    return (
        <>
            <div
                className='flex flex-col w-32 h-32 md:w-48 md:h-48'
                onClick={props.openViewer}
            >
                <div className='w-full h-full overflow-hidden'>
                    <img
                        src={props.image}
                        alt="menu"
                        className='w-full h-full transform transition duration-400 rounded-lg hover:scale-110' />
                </div>
            </div>
        </>
    )
}

export default PhotosCollection;