import DivisionBar from "./components/DivisionBar"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  return (
    <>
    <div className="max-w-screen-lg mx-auto p-5">
    <Header/>
    <Main />
    <DivisionBar />
    </div>
    </>
  )
}

export default App