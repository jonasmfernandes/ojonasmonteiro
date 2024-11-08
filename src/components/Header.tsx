import { HEADER } from "../constants";
import Logo from "../assets/pfp.png";

const Header = () => {
  return (
    <>
      <header className="py-8 flex items-center space-x-3">
        <img 
        className="rounded-full size-16"
        src={Logo} 
        alt="Jonas Monteiro Fernandes"
         />
         <div>
            <h1 className="text-primary font-medium">{HEADER.name}</h1>
            <h2 className="text-secondary text-sm">{HEADER.role}</h2>
         </div>
      </header>
    </>
  );
};

export default Header;