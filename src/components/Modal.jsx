import { useState } from 'react';
import LoveLetter from './LoveLetter'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center bg-slate-400  border-4 border-purple-400 text-pink-200 text-center text-4xl rounded-xl sm:w-[250px] sm:h-[200px] xs:w-[150px] xs:h-[150px]">
            <button
                onClick={() => setIsOpen(true)}
                className="hover:transition-transform duration-200 transform hover:scale-125"
            >
               Click Me! 
            </button>
            {isOpen && (
                <div className="text-center fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75">
                    <LoveLetter setIsOpen={setIsOpen} />
                </div>
            )}
        </div>
    );
};

export default Modal;

