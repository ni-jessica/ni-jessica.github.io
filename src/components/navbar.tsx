const Navbar = () => {
    return (
      <div className="fixed top-0 left-0 w-full z-10">
        <div id="show">
          <ul className="flex text-center md:text-right justify-center md:justify-end items-center bg-[#080357] p-6 shadow-xl text-sm sm:text-base">
            <li className="mr-6">
              <a
                className="text-[#F9F7F1] hover:text-[#848089] hover:underline hover:underline-offset-2"
                href="#about"
              >
                About me
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-[#F9F7F1] hover:text-[#848089] hover:underline hover:underline-offset-2"
                href="#background"
              >
                Background
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-[#F9F7F1] hover:text-[#848089] hover:underline hover:underline-offset-2"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-[#F9F7F1] hover:text-[#848089] hover:underline hover:underline-offset-2"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Navbar;