import React from 'react'
import imgMain from "../images/Rectangle-134.jpg"
import SecimgMain from "../images/Rectangle-132.jpg"

export default function Reviews() {
  return (
    <div className="py-12 w-[90%] flex flex-col items-start justify-start">
            <div className="w-full flex flex-col items-start justify-start gap-12">
                <h2 className='regular-42'>Reviews</h2>
                <div className='flex items-center justify-center gap-10'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-start justify-center gap-8'>
                            <div className="text flex flex-col gap-4">
                                <p>Stirling Gradys baby photography is simply magical. He has a special talent for capturing those fleeting moments of childhood joy and innocence. Our photos are absolutely stunning and we will treasure them for years to come.</p>
                                <h4> Emily R.</h4>
                            </div>
                            <img src={SecimgMain} alt='Girl Smilling at corner'/>
                        </div>
                        <img src={imgMain} alt='Hello World'/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img src={imgMain}  />
                        <div className='flex items-start justify-center gap-8'>
                            <div className="text flex flex-col gap-4">
                                <p>Stirling Gradys baby photography is simply magical. He has a special talent for capturing those fleeting moments of childhood joy and innocence. Our photos are absolutely stunning and we will treasure them for years to come.</p>
                                <h4> Emily R.</h4>
                            </div>
                            <img src={SecimgMain} alt='Girl Smilling at corner'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
