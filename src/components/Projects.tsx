"use client";
import { CircleIcon } from "@radix-ui/react-icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import PDL from "../images/pdl.png";
import Dorms from "../images/dab.png";
import Weensy from "../images/weensy.png";
import IPTCP from "../images/iptcp.png";
import Cache from "../images/cache.png";

interface ProjectProps {
  title: string;
  description: string;
  languages: string[];
  image: string;
  link?: string;
}

const projectInfo: Record<string, ProjectProps> = {
  pdl: {
    title: "Private Data Lookup",
    description:
      "A web app that allows users to privately query a server-side data set of breached passwords during account creation. Implements a secure multi-party computation technique called Private Set Intersection.",
    languages: ["C++", "Typescript"],
    link: "https://github.com/csirianni/private-data-lookup",
    image: PDL,
  },
  iptcp: {
    title: "IP/TCP",
    description:
      "Abstracts the Link, Network, and Transport Layers of the OSI Model with a virtual IP stack that handles packet forwarding and routing between nodes. An RFC-compliant TCP stack builds off the IP stack to allow host nodes to maintain multiple, concurrent connections. ",
    languages: ["Go"],
    image: IPTCP,
  },
  caching: {
    title: "Caching I/O",
    description:
      "Implements a single-slot cache to optimize performance for file reading and writing. Uses wrappers for standard I/O operations to defer system calls by storing the anticipated data in a circular buffer.",
    languages: ["C"],
    image: Cache,
  },
  weensy: {
    title: "Weensy OS",
    description:
      "Integrates virtual memory architecture into kernel code, including pagetables and fork process isolation, to double the memory capacity of a miniature operating system.",
    languages: ["C++"],
    image: Weensy,
  },
  dorms: {
    title: "Dorms at Brown",
    description:
      "A web app for Brown University dorm rooms that serves information and user reviews from a database. Users can authenticate with a Brown email address to leave reviews, sort based on review rankings, and filter by amenties.",
    languages: ["Typescript", "React", "HTML", "CSS", "Firebase"],
    link: "https://github.com/Dorms-Brown/Dorms-Brown.github.io",
    image: Dorms,
  },
};

const projects = ["pdl", "iptcp", "caching", "weensy", "dorms"];

export function Projects() {
  return (
    <div id="projects" className="scroll-mt-[8vh] md:scroll-mt-[10vh]">
      <h1>Projects</h1>
      <ul className="pt-8 space-y-24 relative">
        {projects.map((project) => (
          <li
            key={projectInfo[project].title}
            className={`flex flex-col hover:scale-[103%] md:hover:translate-x-3 transition-all duration-200 group ${projectInfo[project].link && "hover:cursor-pointer"}`}
          >
            <div className="md:h-[24vw] md:w-[40vw] drop-shadow-md group-hover:shadow-xl group-hover:dark:drop-shadow-glow">
              <img
                src={projectInfo[project].image}
                alt="stars"
                className="opacity-80 group-hover:opacity-100 h-full w-full rounded-lg object-fill"
              ></img>
            </div>
            <span className="pt-6 space-y-2">
              {projectInfo[project].link ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projectInfo[project].link}
                  className="text-xl md:text-2xl font-semibold inline-flex items-center group-hover:text-secondary"
                >
                  {projectInfo[project].title}
                  <span className="ml-3 -translate-y-0.5">
                    <GitHubIcon />
                  </span>
                </a>
              ) : (
                <div className="text-xl md:text-2xl font-semibold inline-flex items-center group-hover:text-secondary">
                  {projectInfo[project].title}
                </div>
              )}
              <p className="text-base md:text-lg md:pr-8">
                {projectInfo[project].description}
              </p>
              <div className="flex flex-row gap-3 flex-wrap pt-2">
                {projectInfo[project].languages.map((language) => (
                  <div className="flex items-center text-muted text-base md:text-lg ">
                    <CircleIcon className="pr-1 h-4 w-4 text-secondary" />
                    {language}
                  </div>
                ))}
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
