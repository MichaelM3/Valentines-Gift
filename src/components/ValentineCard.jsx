import React from 'react'
import img from '../assets/toronto.jpeg'

const ValentineCard = () => {
    return (
        <div>
            <div className="flex justify-center sm:h-[400px] sm:w-[400px] xs:h-[200px] xs:w-[200px]">
                <img
                    className="object-cover rounded-xl border-4 border-purple-400"
                    src={img}
                    alt="Couple Picture"
                />
            </div>
        </div>
    )
}

export default ValentineCard
