export const Background = () => {
  return (
    <div id="background" className="md:mt-4 mb-32">
      <h1 className="text-center text-4xl md:text-7xl font-extrabold text-[#0C058A] ">
        Background
      </h1>
      <div className="lg:w-3/5 md:m-auto sm:pl-4 pt-12 md:pt-16">
        <ol className="relative border-s-2 border-muted-foreground">
          <li className="mb-16 ms-7 md:ms-9">
            <span className="absolute flex items-center justify-center w-9 h-9 bg-[#DDDBF1]  rounded-full -start-5  dark:bg-[#0C058A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-[#0C058A] dark:fill-[#DDDBF1]"
                width="2500"
                height="2389"
                viewBox="0 5 1036 990"
              >
                <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
              </svg>
            </span>
            <h3 className="translate-y-0.5 md:-translate-y-0.5 mb-2 flex items-center text-2xl md:text-4xl font-semibold dark:text-white">
              LinkedIn
              <span className="bg-[#DDDBF1] text-[#0C058A] text-sm md:text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-[#0C058A] dark:text-[#DDDBF1] ms-3">
                Incoming
              </span>
            </h3>
            <p className="block mb-2 text-base md:text-lg font-normal leading-none ">
              Software Engineer Intern
            </p>
            <time className="block mb-2 text-base md:text-lg font-normal leading-none">
              Summer 2024
            </time>
          </li>
          <li className="mb-16 ms-7 md:ms-9">
            <span className="absolute flex items-center justify-center w-9 h-9 bg-[#DDDBF1] rounded-full -start-5 dark:bg-[#0C058A]">
              <svg
                className="w-5 h-5 text-[#0C058A] dark:text-[#DDDBF1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
                />
              </svg>
            </span>
            <h3 className="translate-y-0.5 md:-translate-y-0.5 mb-2 text-2xl md:text-4xl font-semibold dark:text-white">
              Meetkai
            </h3>
            <p className="block mb-2 text-base md:text-lg font-normal leading-none ">
              Software Engineer Intern, Metaverse Engineering
            </p>
            <time className="block mb-4 text-base md:text-lg font-normal leading-none">
              Summer 2023
            </time>

            <ul className="list-disc ml-3 text-base md:text-lg font-normal text-muted-foreground ">
              <li>
                Streamlined end-to-end integration testing workflow
                using GitHub actions.
              </li>
              <li>
                Planned and programmed in-world asset search feature
                with filter and sort.
              </li>
              <li>
                Improved upon tech stack by converting frontend
                codebase to React and incorporating best practices.
              </li>
            </ul>
          </li>
          <li className="mb-16 ms-7 md:ms-9">
            <span className="absolute flex items-center justify-center w-9 h-9 bg-[#DDDBF1] rounded-full -start-5 dark:bg-[#0C058A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#0C058A] dark:text-[#DDDBF1]"
              >
                <path
                  fill="currentColor"
                  d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96z"
                />
              </svg>
            </span>
            <h3 className="translate-y-0.5 md:-translate-y-0.5 mb-2 text-2xl md:text-4xl font-semibold dark:text-white">
              Meetkai
            </h3>
            <p className="block mb-2 text-base md:text-lg font-normal leading-none ">
              Software Engineer Intern, Metaverse Cloud Services
            </p>
            <time className="block mb-4 text-base md:text-lg font-normal leading-none">
              Summer 2022
            </time>
            <ul className="list-disc ml-3 text-base md:text-lg font-normal text-muted-foreground">
              <li>
                Implemented UI/UX design for site-wide components,
                webpages, and primary user-dashboard
              </li>
              <li>
                Connected backend API and database to dynamically
                display data on frontend
              </li>
              <li>
                Worked with mock data to prototype and test
                nonplayable character (NPC) chat product feature
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};
