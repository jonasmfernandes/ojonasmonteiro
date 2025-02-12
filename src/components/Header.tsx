import Logo from "../assets/pfp.png";
import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
const Header = () => {

  const {toggleLanguage, texts} = useLanguage()
  return (
    <>
      <motion.header 
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.6,
        bounce: 0.6,
        delay: 0.3,
      }}
      className="flex items-center space-x-3 mb-10 w-full">
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
        title="Change language/Mudar Idioma"
        onClick={toggleLanguage}
        className="ml-auto text-blue cursor-pointer hover:text-[#87bca8]">
          <Languages />
        </button>
      </motion.header>
    </>
  );
};

export default Header;
