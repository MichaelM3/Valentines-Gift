
const LoveLetter = ({ setIsOpen }) => {
    return (
        <div className="mt-20 p-6 m-auto max-w-sm bg-slate-400 text-pink-200">
            <p className="font-extrabold">
                My Dearest,
            </p>
            <p className="text-lg">
                Happy Valentine's Day! I just wanted to tell you how much I love you! I wanted to do something special for you and I hope this card puts a smile on your face!
            </p>
            <p className="text-lg">
                I love you more and more each day, and we've come so far from where we started! Now I'm a permanent resident and I cannot wait for us to go on vacation, save for our future wedding, and a house! I know we're in a bit of a tight spot right now but I'm so hopeful about what our future is gonna bring. I can handle anything as long as I have you by my side.
            </p>
            <p className="font-extrabold">
                All my love and soul,
            </p>
            <p className="text-lg">
                Michael
            </p>
            <button
                className="block mx-auto mt-6 p-2 rounded-lg bg-purple-400 hover:bg-red-400 text-white"
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
        </div>
    )
}

export default LoveLetter
