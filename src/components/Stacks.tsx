import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
const Stacks = () => {

  const { texts } = useLanguage();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.6,
          bounce: 0.6,
          delay: 0.7,
        }}
      >
        <h2 className="text-primary text-sm leading-5 pb-5">{texts.STACKS.name}</h2>
        <nav>
          <ul className="flex justify-start flex-wrap gap-4">
            {texts.STACKS.stack.map((tech, index) => (
              <li
                key={index}
                className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-9 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer"
              >
                {tech}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};
export default Stacks;
