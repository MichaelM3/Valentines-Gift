import DateCounter from './components/DateCounter'
import Header from './components/Header'
import ValentineCard from './components/ValentineCard'
import Modal from './components/Modal'

const App = () => {

    return (
        <main className="flex flex-col items-center p-6 space-y-6">
            <Header />
            <hr className="border-1 w-full border-purple-400" />
            <div className="flex justify-evenly items-center w-full">
                <DateCounter />
                <ValentineCard />
                <Modal />
            </div>
        </main>
    )
}

export default App
