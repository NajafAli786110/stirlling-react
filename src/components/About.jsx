import React from 'react'
import imgMain from "../images/Rectangle-119.jpg"

export default function About() {
    return (
        <div className='py-12 w-[90%] flex flex-col justify-center gap-2'>
            <h2 className='regular-42'>About</h2>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-4 w-[55%]'>
                    <div className='flex gap-4 items-center'>
                        <h4 className='w-[20%]'>Stirling Grady</h4>
                        <hr className='w-full' />
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione doloremque aspernatur molestias sit culpa quis rem amet, ipsam numquam excepturi.</p>
                </div>
                <div className='flex gap-2 overflow-hidden'>
                    <img src={imgMain} alt='showing an girl with smille' />
                    <img src={imgMain} alt='showing an girl with smille' />
                </div>
            </div>
        </div>
    )
}
