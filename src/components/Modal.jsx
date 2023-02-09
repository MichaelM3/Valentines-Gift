import { useState } from 'react';
import LoveLetter from './LoveLetter'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75">
                    <LoveLetter setIsOpen={setIsOpen} />
                </div>
            )}
        </>
    );
};

export default Modal;

