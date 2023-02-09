import React from 'react'
import img from '../toronto.jpeg'

const ValentineCard = () => {
    return (
        <div>
            <div className="flex justify-center h-[400px] w-[400px]">
                <img className="object-cover" src={img} alt="Couple Picture" />
            </div>
        </div>
    )
}

export default ValentineCard
