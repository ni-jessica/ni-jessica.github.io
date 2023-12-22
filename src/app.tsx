import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Background } from "./components/Experience";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const App = () => {
  // refresh brings user back to top of page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // get user's system theme
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState<boolean>(
    getCurrentTheme()
  );
  const [colorTheme, setColorTheme] = useState<string>("purple");

  return (
    <body className={`app ${darkMode && "dark"} ${colorTheme}`}>
      <div className="md:grid md:grid-cols-[40%,60%] md:gap-14">
        <div className="md:border-r-[1px] md:border-muted/10">
          <Nav
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
            mode={"nav"}
          />
        </div>
        <div className="space-y-24 pt-8 md:pt-0 md:space-y-36">
          <About />
          <Background />
          <Projects />
          <div
            id="footer"
            className="align-bottom flex justify-between text-center md:text-left text-muted"
          >
            <p>
              created with{" "}
              <FavoriteIcon className="text-secondary -translate-y-0.5 scale-75" />{" "}
              by Jessica Ni &nbsp;|&nbsp; updated December 2023
            </p>
          </div>
        </div>
      </div>
    </body>
  );
};
