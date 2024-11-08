import DivisionBar from "./components/DivisionBar"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  return (
    <>
    <div className="max-w-screen-lg mx-auto p-5 md:px-0">
    <Header/>
    <Main />
    <DivisionBar />
    <Experience />
    </div>
    </>
  )
}

export default App