import { HEADER } from "../constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
const Main = () => {
  return (
    <>
      <section className=" flex flex-col gap-7">
        <motion.p
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 0.6,
            bounce: 0.6,
            delay: 0.3,
          }}
          className="text-tertiary leading-[1.6rem] text-sm md:text-base md:text-justify"
        >
          {HEADER.descriptionOne}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 0.6,
            bounce: 0.6,
            delay: 0.3,
          }}
          className="text-tertiary leading-[1.6rem] text-sm md:text-base md:text-justify mb-5"
        >
          {HEADER.descriptionTwo}
        </motion.p>

        
      </section>
      <a href="/public/CV - Jonas Monteiro.pdf" download="CV - Jonas Monteiro.pdf">
      <button className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-2 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer flex items-center gap-3">
        <Download size={20}/>
        Download CV</button>
      </a>
    </>
  );
};

export default Main;
