import { SocialIcon } from "react-social-icons";

export const Contact = () => {
  return (
    <div id="contact" className="mt-6 sm:mt-24 mb-24 text-center">
      <h1 className="text-accent text-4xl md:text-7xl text-center font-extrabold mt-12">
        Contact Info
      </h1>
      <div className="pt-8 sm:pt-12">
        <p className="text-lg md:text-2xl">Let's connect!</p>
        <ul className="mt-6 space-x-12 flex flex-row justify-center text-base md:text-lg">
          <li>
            <SocialIcon
              target="_blank"
              url="https://www.linkedin.com/in/jessica-ni-45b8001a9/"
              bgColor="currentColor"
              className="text-accent hover:scale-105 transition duration-300"
            />
          </li>
          <li>
            <SocialIcon
              target="_blank"
              url="https://github.com/ni-jessica"
              bgColor="currentColor"
              className="text-accent hover:scale-105 transition duration-300"
            />
          </li>
          <li>
            <SocialIcon
              target="_blank"
              url="mailto:jessica_ni@brown.edu"
              bgColor="currentColor"
              className="text-accent hover:scale-105 transition duration-300"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
