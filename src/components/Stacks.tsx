import { STACKS } from "../constants";
const Stacks = () => {
  return (
    <>
      <h2 className="text-primary text-sm leading-5 pb-5">STACKS & TOOLS</h2>
      <nav>
        <ul className="flex justify-start flex-wrap gap-4">
          {STACKS.stack.map((tech, index) => (
            <li
              key={index}
              className="shadow md:mt-1 bg-[#161B27] text-blue py-1 px-9 border border-[#1E222C] text-xs rounded hover:bg-[#1f242c] duration-150 cursor-pointer"
            >
              {tech}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Stacks;
