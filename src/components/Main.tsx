import { HEADER } from "../constants";
import { motion } from "framer-motion";
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
          className="text-tertiary leading-[1.6rem] text-sm md:text-base md:text-justify"
        >
          {HEADER.descriptionTwo}
        </motion.p>
      </section>
    </>
  );
};

export default Main;
