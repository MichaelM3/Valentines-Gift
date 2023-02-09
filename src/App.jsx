import Header from './components/Header'
import ValentineCard from './components/ValentineCard'

const App = () => {

    return (
        <main className="flex flex-col items-center p-6 space-y-6">
            <Header />
            <hr className="border-1 w-full border-purple-400" />
            <ValentineCard />
        </main>
    )
}

export default App
