import { RadioGroup, RadioGroupItem } from "./Radio";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export interface CustomizationProps {
  darkMode: boolean;
  setDarkMode: (darkMode) => void;
  colorTheme: string;
  setColorTheme: (colorTheme) => void;
  mode: "dropdown" | "nav";
  className?: string;
}

export const colors: Record<string, string> = {
  purple: "#6c65b3",
  coral: "#ff6b7a",
  green: "#187272",
  blue: "#4361ee",
  red: "#9a031e",
};

export const Customizations = (props: CustomizationProps) => {
  return (
    <div id="customize" className={props.className}>
      <RadioGroup
        id="darkMode"
        defaultValue={
          props.darkMode
            ? `${props.mode}-dark`
            : `${props.mode}-light`
        }
        className="space-x-0.5 md:space-x-1 flex flex-row"
      >
        <div key={`${props.mode}-dark`}>
          <RadioGroupItem
            value={`${props.mode}-dark`}
            id={`${props.mode}-dark`}
            className="peer sr-only"
            onClick={() => props.setDarkMode(true)}
          />
          <label
            htmlFor={`${props.mode}-dark`}
            className="w-3 h-3 md:w-6 md:h-6 opacity-70 flex items-center justify-center rounded-full p-4 border-2 border-transparent bg-secondary-foreground peer-data-[state=checked]:scale-105 [&:has([data-state=checked])]:scale-105 md:peer-data-[state=checked]:scale-110 md:[&:has([data-state=checked])]:scale-110 peer-data-[state=checked]:border-secondary [&:has([data-state=checked])]:border-secondary peer-data-[state=checked]:drop-shadow-xl [&:has([data-state=checked])]:drop-shadow-xl dark:peer-data-[state=checked]:drop-shadow-glow dark:[&:has([data-state=checked])]:drop-shadow-glow peer-data-[state=checked]:opacity-100 [&:has([data-state=checked])]:opacity-100 hover:shadow-xl hover:scale-105 transition duration-300 hover:cursor-pointer text-accent"
          >
            <DarkModeOutlinedIcon />
          </label>
        </div>
        <div key={`${props.mode}-light`}>
          <RadioGroupItem
            value={`${props.mode}-light`}
            id={`${props.mode}-light`}
            className="peer sr-only"
            onClick={() => props.setDarkMode(false)}
          />
          <label
            htmlFor={`${props.mode}-light`}
            className="w-3 h-3 md:w-6 md:h-6 opacity-70 flex items-center justify-center rounded-full p-4 border-2 border-transparent bg-secondary-foreground peer-data-[state=checked]:scale-105 [&:has([data-state=checked])]:scale-105 md:peer-data-[state=checked]:scale-110 md:[&:has([data-state=checked])]:scale-110 peer-data-[state=checked]:border-secondary [&:has([data-state=checked])]:border-secondary peer-data-[state=checked]:drop-shadow-xl [&:has([data-state=checked])]:drop-shadow-xl dark:peer-data-[state=checked]:drop-shadow-glow dark:[&:has([data-state=checked])]:drop-shadow-glow peer-data-[state=checked]:opacity-100 [&:has([data-state=checked])]:opacity-100 hover:shadow-xl hover:scale-105 transition duration-300 hover:cursor-pointer text-accent"
          >
            <LightModeOutlinedIcon />
          </label>
        </div>
      </RadioGroup>

      <RadioGroup
        id="colorTheme"
        defaultValue={`${props.mode}-purple`}
        className="space-x-0.5 md:space-x-1 flex flex-row"
      >
        {Object.entries(colors).map(([key, value]) => (
          <div key={`${props.mode}-${key}`}>
            <RadioGroupItem
              value={`${props.mode}-${key}`}
              id={`${props.mode}-${key}`}
              className="peer sr-only"
              onClick={() => props.setColorTheme(key)}
            />
            <label
              htmlFor={`${props.mode}-${key}`}
              className="opacity-70 flex flex-col items-center justify-between rounded-full p-4 border-2 border-transparent peer-data-[state=checked]:scale-105 [&:has([data-state=checked])]:scale-105 md:peer-data-[state=checked]:scale-110 md:[&:has([data-state=checked])]:scale-110 peer-data-[state=checked]:border-secondary [&:has([data-state=checked])]:border-secondary peer-data-[state=checked]:drop-shadow-xl [&:has([data-state=checked])]:drop-shadow-xl  dark:peer-data-[state=checked]:drop-shadow-glow dark:[&:has([data-state=checked])]:drop-shadow-glow peer-data-[state=checked]:opacity-100 [&:has([data-state=checked])]:opacity-100 hover:shadow-xl hover:scale-105 transition duration-300 hover:cursor-pointer"
              style={{ background: value }}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
