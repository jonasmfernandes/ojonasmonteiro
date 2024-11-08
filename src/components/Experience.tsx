import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <>
      <section className="space-y-2">
        {EXPERIENCE.map((experience) => (
          <div key={experience.id} className="space-y-2">
            <p className="text-sm text-blue">{experience.date}</p>
            <h3 className="text-primary text-md leading-5">
              {experience.company}
            </h3>
            <p className="text-tertiary leading-6 text-sm md:text-base md:text-justify">
              {experience.description}
            </p>

            {experience.stack && (
              <ul className="flex flex-wrap items-center pb-10 gap-[6px] mt-3  md:mt-0">
                {Array.isArray(experience.stack) ? (
                  experience.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-2 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer"
                    >
                      {tech}
                    </li>
                  ))
                ) : (
                  <li className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-2 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer">
                    {experience.stack}
                  </li>
                )}
              </ul>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
