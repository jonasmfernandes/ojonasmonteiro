import Logo from "../assets/pfp.png";
import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Header = () => {

  const {toggleLanguage, texts} = useLanguage()
  return (
    <>
      <header className="flex items-center space-x-3 mb-10 w-full">
        <img
          className="rounded-full w-[70px] h-[70px]"
          src={Logo}
          alt="Jonas Monteiro Fernandes"
        />
        <div className="flex-grow">
          <h1 className="text-primary font-medium">{texts.HEADER.name}</h1>
          <h2 className="text-secondary text-sm">{texts.HEADER.role}</h2>
        </div>
        <button 
        onClick={toggleLanguage}
        className="ml-auto text-blue cursor-pointer">
          {/* {language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"} */}
          <Languages />
        </button>
      </header>
    </>
  );
};

export default Header;
