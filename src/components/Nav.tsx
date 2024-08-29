import { ContactInfo } from "./Contact";
import MenuIcon from "@mui/icons-material/Menu";
import { Customizations, CustomizationProps } from "./Customizations";
import { useState, useRef } from "react";

export const Nav = (props: CustomizationProps) => {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  const close = (e) => {
    if (
      dropdownRef.current &&
      open &&
      !dropdownRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", close);

  return (
    <div className="flex md:fixed md:h-screen md:w-[30%]">
      <div className="space-y-8 text-2xl md:text-3xl">
        <p> Hello! {"\u{1F44B}"}</p>
        <p>
          I'm <span className="font-bold">Jessica Ni</span> , <br />
          welcome to my website.
        </p>
        <div className="text-xl flex flex-col md:space-y-2">
          <a
            className="hover:text-accent group hidden md:inline-flex"
            href="#about"
          >
            <span className="scale-105 -ml-2 hidden group-hover:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height=""
                width="24"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </span>
            About
          </a>
          <a
            className="hover:text-accent group hidden md:inline-flex"
            href="#experience"
          >
            <span className="scale-105 -ml-2 hidden group-hover:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height=""
                width="24"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </span>
            Experience
          </a>
          <a
            className="hover:text-accent group hidden md:inline-flex"
            href="#projects"
          >
            <span className="scale-105 -ml-2 hidden group-hover:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height=""
                width="24"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </span>
            Projects
          </a>
          <ContactInfo />
        </div>

        <Customizations
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
          colorTheme={props.colorTheme}
          setColorTheme={props.setColorTheme}
          mode="nav"
          className="hidden md:block md:fixed md:bottom-[10vh] text-lg md:text-2xl space-y-4"
        />
      </div>

      {/* dropdown menu for mobile */}
      <div
        id="dropdownMenu"
        className="fixed right-8 top-8 z-50 inline-block text-left text-base sm:text-lg md:hidden"
        ref={dropdownRef}
      >
        <button
          className={`${
            open ? "text-secondary" : "text-primary"
          } bg-secondary-foreground/40 backdrop-blur-xl rounded-lg p-1 drop-shadow-xl`}
          onClick={() => setOpen((open) => !open)}
        >
          <MenuIcon />
        </button>

        <div
          className={`${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          } absolute w-64 right-0 z-10 mt-2 rounded-lg bg-white/80 dark:bg-muted/60 backdrop-blur-xl drop-shadow-2xl shadow-2xl transition-all duration-300 `}
          id="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-2 px-2 divide-y-[0.5px] divide-muted/50">
            <a href="#about" className="block p-2">
              About
            </a>
            <a href="#experience" className="block p-2">
              Experience
            </a>
            <a href="#projects" className="block p-2">
              Projects
            </a>
            <div className="p-2">
              <Customizations
                darkMode={props.darkMode}
                setDarkMode={props.setDarkMode}
                colorTheme={props.colorTheme}
                setColorTheme={props.setColorTheme}
                mode="dropdown"
                className="space-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
