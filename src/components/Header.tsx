import { HEADER } from "../constants";
import { HEADER_PT } from "../constants";
import Logo from "../assets/pfp.png";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  
    const {toggleLanguage, language} = useLanguage()
  return (
    <>
      <header className="flex items-center space-x-3 mb-10 w-full">
        <img
          className="rounded-full w-[70px] h-[70px]"
          src={Logo}
          alt="Jonas Monteiro Fernandes"
        />
        <div className="flex-grow">
          <h1 className="text-primary font-medium">{HEADER.name}</h1>
          <h2 className="text-secondary text-sm">{HEADER.role}</h2>
        </div>
        <button
          onClick={toggleLanguage}
          className="ml-auto text-blue cursor-pointer"
        >
          <Languages />
        </button>
      </header>
    </>
  );
};

export default Header;
