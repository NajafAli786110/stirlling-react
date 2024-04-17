import React from 'react'
import { Link } from 'react-router-dom'
import imgMain from "../images/Rectangle-122.jpg"

export default function Services() {
    return (
        <div className="py-12 w-[90%] flex flex-col items-center justify-center" id='services'>
            <div className="w-full flex flex-col items-center justify-center gap-16 services-inner">
                <h2 className='regular-42'>Services</h2>
                <div className="w-full flex items-center gap-10 border-gray-400 border-y-2">
                    <div className="flex my-[-30px] services-grid-container">
                        <div className="flex flex-col gap-4 p-16 services-gird-boxes border-r-2 border-gray-400">
                            <h4 className="uppercase font-bold">baby photography</h4>
                            <p> Capturing the innocence and wonder of your little ones, creating timeless memories you'll cherish forever.</p>
                            <img src={imgMain} alt='Girl Smilling Face' />
                            <Link href="/" className="secondary-btn">Book Now</Link>
                        </div>
                        <div className="flex flex-col gap-4 p-16 services-gird-boxes border-r-2 border-gray-400">
                            <h4 className="uppercase font-bold">baby photography</h4>
                            <p> Capturing the innocence and wonder of your little ones, creating timeless memories you'll cherish forever.</p>
                            <img src={imgMain} alt='Girl Smilling Face' />
                            <Link href="/" className="secondary-btn">Book Now</Link>
                        </div>
                        <div className="flex flex-col gap-4 p-16 services-gird-boxes grid-box-left-border">
                            <h4 className="uppercase font-bold">baby photography</h4>
                            <p> Capturing the innocence and wonder of your little ones, creating timeless memories you'll cherish forever.</p>
                            <img src={imgMain} alt='Girl Smilling Face' />
                            <Link href="/" className="secondary-btn">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
