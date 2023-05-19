import { TypingStep } from "typing-effect-reactjs";

const TypeHeading = () => {
    return (
      <div className="font-medium mt-8 text-2xl text-center md:text-left md:text-5xl lg:text-7xl md:mt-0">
        <TypingStep
          sequence={[
            {
              content: "Hello \u{1F44B} \n",
            },
            {
              content: 600,
            },
            {
              content: "I'm Jessica Ni, \n",
            },
            {
              content: 300,
            },
            {
              content: "welcome to my website.",
            },
          ]}
          typeSpeed={120}
          blinkingSpeed={800}
          cursorThickness={0.075}
          disableBlinkingOnEnd={1}
        />
      </div>
    );
  };

  export default TypeHeading;