import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
const Projects = () => {
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
          delay: 0.5,
        }}
      >
        <h2 className="text-primary text-sm leading-5 pb-5">SIDE PROJECTS</h2>
        <ProjectCard />
      </motion.div>
    </>
  );
};

export default Projects;
