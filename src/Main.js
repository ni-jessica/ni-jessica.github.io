import "./Main.css";
import Heading from "./components/Heading.js";
import Nav from "./components/Nav.js";
import Meetkai from "./components/meetkai.webp";
import HackAtBrown from "./components/hackbrown.png";
import Stars from "./components/stars.gif";
import { SocialIcon } from "react-social-icons";

function Main() {
  // prevents scrolling on first 10 seconds of load
  document.body.setAttribute("style", "overflow:hidden;");
  setTimeout(function () {
    document.body.setAttribute("style", "overflow:visible;");
  }, 10000);

  // refreshing will bring user back to top of page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const Welcome = () => {
    return (
      <div className="h-screen justify-center flex flex-col">
        <div className="grid grid-flow-row md:grid-flow-col">
          <div>
            <Heading />
          </div>
          <div
            id="show"
            className="md:-mt-12 xl:-mt-16 inline-flex max-h-[5rem] md:max-h-[16rem] xl:max-h-[20rem]"
          >
            <img
              src={Stars}
              alt="stars"
              className="h-full w-full object-contain"
            ></img>
          </div>
        </div>

        <div id="show">
          <div
            id="about"
            className="text-center md:text-left space-y-2 text-base sm:text-lg pb-24"
          >
            <h1 className="text-2xl md:text-5xl mt-24 text-[#0C058A] ">
              About Me
            </h1>
            <p className="md:pt-4">
              {"\u2794 "} I'm a rising junior at Brown University studying
              Applied Math and Computer Science.
            </p>
            <p>
              {"\u2794 "} I have experience in full-stack software engineering,
              and my career interests primarily lie in machine learning and
              system security.
            </p>
            <p>
              {"\u2794 "} My other interests include ethical AI, film,
              photography, and culinary!
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Background = () => {
    return (
      <div id="background" className="text-base md:text-lg md:mt-4 mb-32">
        <h1 className="text-center md:text-left text-2xl md:text-5xl text-[#0C058A] ">
          Background
        </h1>
        <div id="work experience" className="lg:max-h-full pb-8">
          <div className="md:pt-2 grid grid-flow-row auto-cols-[minmax(0,_1fr)] lg:grid-flow-col lg:gap-x-12">
            <div>
              <h2 className="text-xl md:text-3xl pt-6 text-[#7A0050] ">
                Work Experience
              </h2>

              <p className="pt-4 font-semibold text-base md:text-xl text-[#7A0050]">
                Meetkai: Software Engineer Intern
              </p>
              <p className="text-sm md:text-base text-[#7A0050] -mt-1">
                Languages & Tools used: Javascript, React, Node.js, HTML, CSS,
                TailwindCSS, AWS, Prisma Client, Jest, Docker
              </p>

              <div className="pt-2">
                <p className="font-semibold"> Summer 2022:</p>

                <ul className="list-disc ml-6">
                  <li>
                    Full-stack web development for Metaverse Services Cloud
                    platform
                  </li>
                  <li>
                    Implemented UI/UX design for site-wide components, webpages,
                    and primary user-dashboard
                  </li>
                  <li>
                    Connected backend API and database to dynamically display
                    data on frontend
                  </li>
                  <li>
                    Worked with mock data to prototype and test nonplayable
                    character (NPC) product feature
                  </li>
                  <li>
                    Continued part-time until November 2022 helping with
                    miscellaneous updates and bug-fixes
                  </li>
                </ul>
              </div>

              <div className="pt-2 pb-6">
                <p className="font-semibold"> Summer 2023:</p>
                <ul className="list-disc ml-6">
                  <li>Returning to work on more awesome projects! </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center lg:mt-20 mb-8">
              <a
                href="https://meetkai.com/vip"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300 rounded-lg overflow-hidden max-w-[40rem]">
                  <img
                    src={Meetkai}
                    alt="meetkai"
                    className="h-full w-full object-cover"
                  ></img>
                </div>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div id="activites">
          <div className="pt-8 grid grid-flow-row auto-cols-[minmax(0,_1fr)] lg:grid-flow-col lg:gap-x-12">
            <div className="flex justify-center lg:justify-start items-center lg:mt-20 mt-8 mb-8 order-last lg:order-first">
              <a
                href="https://2023.hackatbrown.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300 rounded-lg overflow-hidden max-w-[40rem] ">
                  <img
                    src={HackAtBrown}
                    alt="hack at brown logo"
                    className="max-h-[24rem] object-cover"
                  ></img>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-xl md:text-3xl pt-6 text-[#7A0050] ">
                Activities
              </h2>
              <p className="font-semibold text-base md:text-xl pt-4 text-[#7A0050]">
                Hack at Brown
              </p>
              <div className="pt-2">
                <p className="font-semibold">2022-2023: Sponsorship Lead</p>
                <ul className="list-disc ml-6">
                  <li>Led team of 6 to acquire funding for 2023 hackathon </li>
                  <li>
                    Communicated and fostered relationships with companies to
                    secure sponsor partnerships
                  </li>
                  <li>
                    Organized team resources and directed weekly team meetings
                  </li>
                  <li>
                    Collaborated with other teams to maintain progress across
                    whole organization
                  </li>
                </ul>
                <p className="pt-2 font-semibold">
                  2023-2024: Development Team
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Working with team to engineer website for Hack at Brown 2024{" "}
                  </li>
                  <li>
                    Check out 2023's iteration{" "}
                    <a
                      href="https://2023.hackatbrown.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline"
                    >
                      here!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Projects = () => {
    const boxFormat = "relative box bg-[#DCD8D0] rounded-lg px-6 py-8 shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300"

    return (
      <div id="projects">
        <h1 className="text-2xl md:text-5xl text-center md:text-left text-[#0C058A] mt-12">
          Projects
        </h1>
        <div className="pt-8 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#31493b] text-center md:text-left">
          <div className={boxFormat}>
            <p className="text-lg md:text-2xl font-semibold">Caching I/O</p>
            <p className="pt-6 pb-12 text-base md:text-xl">
            Implemented single slot cache to reduce system calls and optimize performance for buffered read and write.
            </p>
            <p className="absolute left-0 md:left-6 w-full bottom-8">C</p>
          </div>
          <div className={boxFormat}>
            <p className="text-lg md:text-2xl font-semibold">WeensyOS</p>
            <p className="pt-6 pb-12 text-base md:text-xl">
              Programmed virtual memory architecture in kernel code, including pagetables and fork process isolation, in a minature operating system: WeensyOS.
            </p>
            <p className="absolute left-0 md:left-6 w-full bottom-8">C++</p>
          </div>
          <div className={boxFormat}>
            <p className="text-lg md:text-2xl font-semibold">Dorms at Brown</p>
            <p className="pt-6 pb-12 text-base md:text-xl">
              Engineered and designed web app for Brown University dorms that authenticates users, handles reviews, and ranks based on reviews.
            </p>
            <p className="absolute left-0 md:left-6 w-full bottom-8">Typescript, React, Node, HTML, CSS, Firebase</p>
          </div>
          <div className={boxFormat}>
            <p className="text-lg md:text-2xl font-semibold">Maps</p>
            <p className="pt-6 pb-12 text-base md:text-xl">
              Used MapBox API and public redlining data to visualize history of inequality throughout US cities. Supports bounding box querying to filter data.
            </p>
            <p className="absolute left-0 md:left-6 w-full bottom-8"> Java, Typescript, HTML, CSS</p>
          </div>
          <div className={boxFormat}>
            <p className="text-lg md:text-2xl font-semibold">Search</p>
            <p className="pt-6 pb-12 text-base md:text-xl">
              Created basic search engine that indexes a set of wiki files and ranks results based on TF-IDF and PageRank algorithms.
            </p>
            <p className="absolute left-0 md:left-6 w-full bottom-8">Python</p>
          </div>
          <div className={boxFormat}>
            <p className="text-lg md:text-2xl font-semibold">
              Personal Website
            </p>
            <p className="pt-6 pb-12 text-base md:text-xl">
              What you're on right now!
            </p>
            <p className="absolute left-0 md:left-6 w-full bottom-8">Javascript, React, HTML, CSS</p>
          </div>
        </div>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div id="contact" className="my-24 text-center">
        <h1 className="text-2xl md:text-5xl text-center text-[#0C058A] mt-12">
          Contact Info
        </h1>
        <div className="mt-6">
          <p className="text-lg md:text-2xl">Let's connect!</p>
          <ul className="mt-6 space-x-12 flex flex-row justify-center text-base md:text-lg">
            <li>
              <SocialIcon
                target="_blank"
                url="https://www.linkedin.com/in/jessica-ni-45b8001a9/"
                bgColor="#0A0476"
                className="hover:scale-105 transition duration-300"
              />
            </li>
            <li>
              <SocialIcon
                target="_blank"
                url="https://github.com/ni-jessica"
                bgColor="#0A0476"
                className="hover:scale-105 transition duration-300"
              />
            </li>
            <li>
              <SocialIcon
                target="_blank"
                url="mailto:jessica_ni@brown.edu"
                bgColor="#0A0476"
                className="hover:scale-105 transition duration-300"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  };


  return (
    <div id="main page" className="Main">
      <Nav />
      <Welcome />
      <Background />
      <Projects />
      <Contact />
      <div className="align-bottom text-center">created by Jessica Ni | updated 2023</div>
    </div>
  );
}

export default Main;
