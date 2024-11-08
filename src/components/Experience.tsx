import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <div className="space-y-2">
        {EXPERIENCE.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 0.6,
              bounce: 0.6,
              delay: 0.7,
            }}
            className="space-y-2"
          >
            <p className="text-sm text-blue">{experience.date}</p>
            <h3 className="text-primary text-md leading-5">
              {experience.company}
            </h3>
            <p className="text-tertiary leading-6 text-sm md:text-base md:text-justify">
              {experience.description}
            </p>

            {experience.stack && (
              <motion.ul className="flex flex-wrap items-center pb-10 gap-[6px] mt-3  md:mt-0">
                {Array.isArray(experience.stack) ? (
                  experience.stack.map((tech, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: 45 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{delay: index * 0.105}}
                      key={index}
                      className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-2 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer"
                    >
                      {tech}
                    </motion.li>
                  ))
                ) : (
                  <motion.li
                    initial={{ opacity: 0, x: 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-2 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer"
                  >
                    {experience.stack}
                  </motion.li>
                )}
              </motion.ul>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
