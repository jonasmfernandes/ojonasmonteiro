import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

const ProjectCard = () => {
  return (
    <>
      <article className="flex flex-col gap-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2 p-7 bg-[#15181E] rounded-lg border border-zinc-800"
          >
            <div className="flex justify-between">
              <h1 className="text-primary text-sm">{project.name}</h1>
              <div className="text-[#557CE1]">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <p className="text-secondary text-sm w-[85%]">
              {project.description}
            </p>
            <p className="text-[#557CE1] text-xs mt-5">{project.stacks}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ProjectCard;
