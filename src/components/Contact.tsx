import { SocialIcon } from "react-social-icons";

export const ContactInfo = () => {
  return (
    <ul className="-mt-4 md:mt-0 md:-translate-x-3.5 flex flex-row justify-center md:justify-start">
      <li>
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/ni-jessica/"
          fgColor="currentColor"
          bgColor="transparent"
          className="text-accent hover:scale-125 transition duration-300"
        />
      </li>
      <li>
        <SocialIcon
          target="_blank"
          url="https://github.com/ni-jessica"
          fgColor="currentColor"
          bgColor="transparent"
          className="text-accent hover:scale-125 transition duration-300"
        />
      </li>
      <li>
        <SocialIcon
          target="_blank"
          url="mailto:jessica_ni@brown.edu"
          fgColor="currentColor"
          bgColor="transparent"
          className="text-accent hover:scale-125 transition duration-300"
        />
      </li>
    </ul>
  );
};
