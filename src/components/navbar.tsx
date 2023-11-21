export const Navbar = ({ state, setState }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div id="show">
        <ul className="flex text-center justify-center items-center bg-accent-foreground px-4 mobile:py-4 sm:p-6 shadow-xl text-sm sm:text-base self-stretch gap-4 sm:gap-8 md:gap-16">
          <li>
            <a
              className="text-muted dark:text-primary hover:text-muted-foreground  hover:underline hover:underline-offset-2"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-muted dark:text-primary  hover:text-muted-foreground  hover:underline hover:underline-offset-2"
              href="#background"
            >
              Background
            </a>
          </li>
          <li>
            <a
              className="text-muted dark:text-primary  hover:text-muted-foreground  hover:underline hover:underline-offset-2"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-muted dark:text-primary  hover:text-muted-foreground hover:underline hover:underline-offset-2"
              href="#contact"
            >
              Contact
            </a>
          </li>

          <li className="translate-y-1 sm:absolute sm:right-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={state}
                onChange={() => setState((state) => !state)}
                className="sr-only peer"
              />
              <div className="w-12 md:w-14 h-6 md:h-7 bg-secondary-foreground peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 md:after:h-6 md:after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
