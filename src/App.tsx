import Contact from "./components/Contact"
import DivisionBar from "./components/DivisionBar"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Main from "./components/Main"
import Projects from "./components/Projects"

const App = () => {
  return (
    <>
    <div className="max-w-screen-lg mx-auto p-5 lg:px-0">
    <Header/>
    <Main />
    <DivisionBar />
    <Experience />
    <DivisionBar />
    <Projects />
    <DivisionBar />
    <Contact />
    </div>
    </>
  )
}

export default App