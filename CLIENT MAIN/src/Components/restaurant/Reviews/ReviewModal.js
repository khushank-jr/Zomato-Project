import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Rating from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { postReviews } from '../../../Redux/Reducer/Reviews/reviews.action';

export default function ReviewModal({ isOpen, setIsOpen, ...props }) {

    const [reviewData, setReviewData] = useState(
        {
            subject: "",
            reviewText: "",
            isRestaurantReview: false,
            isFoodReview: false,
            rating: 0,
        }
    );

    const { id } = useParams();
    const dispatch = useDispatch();

    const handleChange = (e) =>
        setReviewData((prev) => ({ ...prev, [e.target.id]: e.target.value }))

    function closeModal() {
        setIsOpen(false)
    }

    const handleRating = (rating) => {
        setReviewData((prev) => ({ ...prev, rating }))
    }

    const toggleDining = () => {
        setReviewData((prev) =>
            ({ ...prev, isFoodReview: false, isRestaurantReview: !reviewData.isRestaurantReview }))
    }

    const toggleDelivery = () => {
        setReviewData((prev) =>
            ({ ...prev, isRestaurantReview: false, isFoodReview: !reviewData.isFoodReview }))
    }

    const submit = () => {
        dispatch(postReviews({
            ...reviewData, restaurant: id
        }))
        setReviewData(
            {
                subject: "",
                reviewText: "",
                isRestaurantReview: false,
                isFoodReview: false,
                rating: 0,
            }
        )
        closeModal();
    }
    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Review
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-2">
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type="radio"
                                                    name="review"
                                                    id='dinning'
                                                    checked={reviewData.isRestaurantReview}
                                                    onChange={toggleDining}
                                                />
                                                <label htmlFor="dinning">Dinning</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type="radio"
                                                    name="review"
                                                    id='delivery'
                                                    checked={reviewData.isFoodReview}
                                                    onChange={toggleDelivery}
                                                />
                                                <label htmlFor="delivery">Delivery</label>
                                            </div>
                                        </div>
                                        <Rating
                                            count={5}
                                            size={24}
                                            value={reviewData.rating}
                                            onChange={handleRating}
                                        />

                                        <form className='flex flex-col gap-4'>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="subject">Subject</label>
                                                <input
                                                    type="text"
                                                    id='subject'
                                                    placeholder='Amazing food'
                                                    value={reviewData.subject}
                                                    onChange={handleChange}
                                                    className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400'
                                                />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="reviewText">Review Text</label>
                                                <textarea
                                                    id='reviewText'
                                                    placeholder='Amazing food'
                                                    value={reviewData.reviewText}
                                                    onChange={handleChange}
                                                    rows="5"
                                                    className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400'
                                                >
                                                </textarea>
                                            </div>
                                        </form>

                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={submit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
