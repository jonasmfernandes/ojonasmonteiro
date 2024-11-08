import { HEADER } from "../constants";

const Main = () => {
  return (
    <>
      <section className=" flex flex-col gap-7">
        <p className="text-tertiary leading-[1.6rem] text-sm md:text-base md:text-justify">
          {HEADER.descriptionOne}
        </p>

        <p className="text-tertiary leading-[1.6rem] text-sm md:text-base md:text-justify">
          {HEADER.descriptionTwo}
        </p>
      </section>
    </>
  );
};

export default Main;
