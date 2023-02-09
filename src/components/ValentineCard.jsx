import React from 'react'
import img from '../assets/toronto.jpeg'

const ValentineCard = () => {
    return (
        <div>
            <div className="flex justify-center h-[400px] w-[400px]">
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
