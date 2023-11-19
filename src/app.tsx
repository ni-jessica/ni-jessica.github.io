import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Background } from "./components/Background";

export const App = () => {
  // prevent scrolling on first 8 seconds of load
  document.body.setAttribute("style", "overflow:hidden;");
  setTimeout(function () {
    document.body.setAttribute("style", "overflow:visible;");
  }, 8000);

  // refresh brings user back to top of page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Navbar />
      <Landing />
      <Background />
      <Projects />
      <Contact />
      <div className="align-bottom text-center">
        <p>created by Jessica Ni | updated November 2023</p>
        <a
          href={process.env.REACT_APP_DIGITALS}
        >
          <p className="pt-4">{`\u{1F4F8}`}</p>
        </a>
      </div>
    </div>
  );
}
