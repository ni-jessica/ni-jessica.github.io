"use client";
import {
  useState,
  forwardRef,
  ComponentPropsWithoutRef,
  ElementRef,
} from "react";
import { cn } from "./utils";
import { CircleIcon } from "@radix-ui/react-icons";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import DescriptionIcon from "@mui/icons-material/Description";
import MemoryIcon from "@mui/icons-material/Memory";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    ></RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface ProjectProps {
  title: string;
  icon: any;
  description: string;
  languages: string[];
}

const projectInfo: Record<string, ProjectProps> = {
  snowcast: {
    title: "Snowcast",
    icon: <HeadphonesIcon />,
    description:
      'Simulates the functionality of a radio station using a TCP server. The server accepts and handles connections through UDP sockets and streams file data through these connections to allow clients to "listen to music". Once clients connect to the server, they can also change stations (change their UDP connection) to listen to different songs.',
    languages: ["Go"],
  },
  caching: {
    title: "Caching I/O",
    icon: <DescriptionIcon />,
    description:
      "Implements a single slot cache to reduce system calls and optimize performance for buffered reading from and writing to a file. It uses wrappers for standard I/O operations read, write, seek, and flush to defer the actual operations by storing the data in a circular buffer.",
    languages: ["C"],
  },
  weensy: {
    title: "Weensy OS",
    icon: <MemoryIcon />,
    description:
      "Integrates virtual memory architecture into kernel code, including pagetables and fork process isolation, to double the memory capacity of a miniature operating system, Weensy OS.",
    languages: ["C++"],
  },
  dorms: {
    title: "Dorms at Brown",
    icon: <MapsHomeWorkIcon />,
    description:
      "A web app for Brown University dorms that hosts information and user reviews. The website uses dynamic page routing to generate pages for each dorm and authenticates users to only allow reviews from Brown students. Users can sort dorms based on review rankings and filter by amenities.",
    languages: [
      "Typescript",
      "React",
      "Node",
      "HTML",
      "CSS",
      "Firebase",
    ],
  },
  maps: {
    title: "Maps",
    icon: <MapIcon />,
    description:
      "Uses the MapBox API and public redlining data to visualize history of inequality throughout US cities. Supports bounding box querying to filter the data by region.",
    languages: ["Java", "Typescript", "HTML", "CSS"],
  },
  personal: {
    title: "Personal Website",
    icon: <FavoriteIcon />,
    description:
      "What you're on right now \u263a Thanks for stopping by!",
    languages: ["Typescript", "React", "HTML", "CSS"],
  },
};

const projects = [
  "snowcast",
  "caching",
  "weensy",
  "dorms",
  "maps",
  "personal",
];

export function Projects() {
  const [project, setProject] = useState("snowcast");

  return (
    <div id="projects" className="mb-32">
      <div className="flex flex-col space-y-1.5">
        <h1 className="text-accent text-4xl md:text-7xl text-center font-extrabold">
          Projects
        </h1>
      </div>
      <div className="grid grid-flow-row gap-6 pt-8 sm:pt-12 md:pt-16">
        <div className="grid gap-6">
          <RadioGroup
            defaultValue="snowcast"
            className="grid grid-flow-row md:grid-rows-2 md:grid-cols-2 gap-4"
          >
            {projects.map((name) => (
              <div key={name}>
                <RadioGroupItem
                  value={name}
                  id={name}
                  className="peer sr-only "
                  onClick={() => setProject(name)}
                />
                <label
                  htmlFor={name}
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-lg border-2 border-secondary-foreground bg-secondary-foreground p-4 text-xl md:text-2xl peer-data-[state=checked]:border-secondary [&:has([data-state=checked])]:border-secondary peer-data-[state=checked]:shadow-lg [&:has([data-state=checked])]:shadow-lg  dark:peer-data-[state=checked]:drop-shadow-glow dark:[&:has([data-state=checked])]:drop-shadow-glow hover:shadow-lg hover:scale-[1.03] transition duration-300 hover:cursor-pointer text-gray-900"
                >
                  <span className="flex items-center gap-1.5">
                    {projectInfo[name].title}
                    {projectInfo[name].icon}
                  </span>
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="text-center text-base md:text-lg space-y-12 rounded-lg shadow-xl p-4 border border-muted-foreground bg-white/10">
          <p>{projectInfo[project].description}</p>
          <div>
            <p className="text-secondary">Languages/Tools:</p>
            <div className="flex flex-row gap-2 justify-center sm:items-center flex-wrap">
              {projectInfo[project].languages.map((language) => (
                <div className="flex items-center text-muted-foreground text-base md:text-lg">
                  <CircleIcon className="pr-1 h-4 w-4 fill-secondary text-secondary" />
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
