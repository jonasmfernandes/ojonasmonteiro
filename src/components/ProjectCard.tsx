import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
const ProjectCard = () => {
  const { texts } = useLanguage();
  return (
    <>
      <article className="flex flex-col gap-3">
        {texts.PROJECTS.map((project) => (
          
          <a
            href={`https://snapqr-wheat.vercel.app`}
            target="_blank"
            key={project.id}
            className="flex flex-col gap-2 p-7 bg-[#15181E] rounded-lg border border-zinc-800 hover:bg-[#1f242c] duration-150 cursor-pointer"
          >
            <div className="flex justify-between">
              <h1 className="text-primary text-sm">{project.name}</h1>
              <div className="text-blue">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <p className="text-secondary text-sm w-[85%]">
              {project.description}
            </p>
            <p className="text-blue text-xs mt-5">{project.stacks}</p>
          </a>
        ))}
      </article>
    </>
  );
};

export default ProjectCard;
