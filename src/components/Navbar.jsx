import logo from "../assets/danielOrtizLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsEnvelopePaperFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="" /> 
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-100">
        <a 
          href="https://www.linkedin.com/in/daniel-ortiza/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-neutral-300 active:text-neutral-400">
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/dano796" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-neutral-300 active:text-neutral-400">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
