import React from 'react'
import { Link } from 'react-router-dom'
import main_img from '../images/hero-img.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className=' w-[100%] flex hero-section justify-between h-screen' style={{ backgroundImage: `url(${main_img})` }}>
            <div className='py-[22%] flex flex-col gap-8 w-[70%] items-center hero-section-inner'>
                <div className='flex flex-col gap-4 items-center hero-section-left '>
                    <h1 className='regular-48'>Stirling Grady Photography</h1>
                    <hr className='w-1/2 h-[1px] bg-white' />
                    <p>Professional photographer traveling the United States.</p>
                </div>
                <Link href="/" className='px-20 py-4 border-[1px] border-white book-btn'>Book Now</Link>
            </div>
            <div className='pt-[8%] flex flex-col items-center gap-8 pr-[5%] hero-section-right '>
                <hr className='w-[2px] h-[50%] bg-white' />
                <Link href="/">
                    <FaFacebookF className='text-2xl social-icons' />
                </Link>
                <Link href="/">
                    <FaInstagram className='text-2xl social-icons' />
                </Link>
                <Link href="/">
                    <FaTwitter className='text-2xl social-icons' />
                </Link>
                <hr className='w-[2px] h-[50%] bg-white' />
            </div>
        </section>
    )
}
