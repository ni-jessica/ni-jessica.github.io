import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Background } from "./components/Background";
import { useState, useEffect } from "react";

export const App = () => {
  // refresh brings user back to top of page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // get user's system theme
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // prevent scrolling on first 8 seconds of load
  useEffect(() => {
    document.body.setAttribute("style", "overflow:hidden;");
    setTimeout(function () {
      document.body.setAttribute("style", "overflow:visible;");
    }, 8000);
  }, []);

  const [darkMode, setDarkMode] = useState<boolean>(
    getCurrentTheme()
  );

  return (
    <body className={`app ${darkMode && "dark"}`}>
      <Navbar state={darkMode} setState={setDarkMode} />
      <Landing />
      <Background />
      <Projects />
      <Contact />
      <div className="align-bottom text-center">
        <p>created by Jessica Ni | updated November 2023</p>
        <a href={process.env.REACT_APP_DIGITALS}>
          <p className="pt-4">{`\u{1F4F8}`}</p>
        </a>
      </div>
    </body>
  );
};
