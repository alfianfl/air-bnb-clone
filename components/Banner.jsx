import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px]  xxl:h-[800px]">
            <Image src="https://links.papareact.com/0fm" 
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-large">Not sure where to go? Perfect,</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full bold my-3 hover:shadow-xl active:scale-95 duration-150 outline-none">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
