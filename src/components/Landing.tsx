import { TypingStep } from "typing-effect-reactjs";
import Stars from "../images/stars.gif";

export const Landing = () => {
  return (
    <div className="h-screen justify-center flex flex-col mobile:mt-12 mobile:h-full">
      <div className="grid grid-flow-row">
        <div>
          <div className="text-4xl mobile:text-4xl text-center sm:text-5xl font-semibold">
            <TypingStep
              sequence={[
                {
                  content: "Hi! ",
                },
                {
                  content: 600,
                },
                {
                  content: "I'm Jessica,\n",
                },
                {
                  content: 600,
                },
                {
                  content: "welcome to my website.",
                },
              ]}
              cursorColor={"currentColor"}
              typeSpeed={120}
              blinkingSpeed={800}
              cursorThickness={0.075}
              disableBlinkingOnEnd={1}
            />
          </div>
        </div>
        <div
          id="show"
          className="mt-6 md:mt-1 inline-flex max-h-[8rem] md:max-h-[16rem] xl:max-h-[16rem]"
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
          className="text-center space-y-2 text-base sm:text-lg mb-24"
        >
          <h1 className="text-accent text-4xl md:text-7xl font-extrabold mt-12 md:mt-10">
            About Me
          </h1>
          <div className="pt-4">
            <p>
              {"\u2794 "} I'm a junior at Brown University studying
              Applied Math and Computer Science.
            </p>
            <p>
              {"\u2794 "} I have experience in full-stack software
              engineering, and my career interests primarily lie in
              computer systems and data management.
            </p>
            <p>
              {"\u2794 "} My other interests include photography,
              fitness, and trying new foods!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
