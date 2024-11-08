const Contact = () => {
  return (
    <>
      <footer className="mb-6">
        <ul className="flex flex-col gap-8 justify-center items-center text-tertiary text-sm md:flex-row">
          <li>
            <a
              href="https://www.instagram.com/ojonasmonteiro/"
              target="_blank"
              className="hover:text-primary duration-150"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/jonasmfernandes/"
              target="_blank"
              className="hover:text-primary duration-150"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonas-monteiro-fernandes/"
              className="hover:text-primary duration-150"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Contact;
