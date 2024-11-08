import Contact from "./components/Contact";
import DivisionBar from "./components/DivisionBar";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageContext";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Stacks from "./components/Stacks";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <div className="max-w-screen-lg mx-auto p-5 lg:px-0">
          <Header />
          <Main />
          <DivisionBar />
          <Stacks />
          <DivisionBar />
          <Experience />
          <DivisionBar />
          <Projects />
          <DivisionBar />
          <Contact />
        </div>
      </LanguageProvider>
    </>
  );
};

export default App;
