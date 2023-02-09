

const LoveLetter = ({ setIsOpen }) => {
    return (
        <div className="mt-20 p-6 m-auto max-w-sm bg-slate-400 text-pink-200">
            <p className="font-extrabold">
                My Dearest,
            </p>
            <p className="text-lg">
                Happy Valentine's Day! I just wanted to take a moment to tell you how much you mean to me. You bring so much joy and happiness into my life, and I feel incredibly lucky to have you by my side.
            </p>
            <p className="text-lg">
                I love you more and more each day, and I promise to always be there for you, through thick and thin. Thank you for being my partner, my friend, and my soulmate.
            </p>
            <p className="font-extrabold">
                All my love,
            </p>
            <p className="text-lg">
                [Your Name]
            </p>
            <button
                className="block mx-auto mt-6 p-2 rounded-lg bg-purple-400"
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
        </div>
    )
}

export default LoveLetter
