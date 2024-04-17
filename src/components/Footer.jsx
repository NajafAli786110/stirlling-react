import React from 'react';
import imgMain from "../images/Rectangle-135.jpg"

export default function Footer() {
    return (
        <div className="py-12 w-[90%] flex flex-col items-start justify-start border-t-[1] border-gray-300">
            <div className="w-full flex items-center justify-center gap-12 footer-main">
                <div className="w-[50%] footer-left">
                    <img src={imgMain} alt="showing an girl with smille" />
                </div>
                <div className="w-[50%] flex flex-col gap-4 footer-right">
                    <h3 className="text-[20px] uppercase font-bold ">stirlinggradyphotography</h3>
                    <p className="font-italic">family/ Baby / portraits</p>
                    <form className="flex flex-col w-full gap-4">
                        <input type="text" className="border-b-1 border-gray-300 bg-transparent" placeholder="Name" />
                        <input type="number" className="border-b-1 border-gray-300 bg-transparent" placeholder="Contact" />
                        <input type="submit" value="Book Now" className="secondary-btn text-2xl" />
                    </form>
                </div>
            </div>
        </div>
    )
}
