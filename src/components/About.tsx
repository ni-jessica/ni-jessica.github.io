export const About = () => {
  return (
    <div id="about" className="scroll-mt-[8vh] md:scroll-mt-[10vh]">
      <h1>About Me</h1>
      <div className="pt-8 space-y-2 text-base sm:text-lg">
        <div className="flex items-center space-x-2">
          <p className="hover:animate-wiggle">👩🏻‍💻</p>
          <p>Software Engineer</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="hover:animate-wiggle">📍</p>
          <p>New York City</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="hover:animate-wiggle">🎓</p>
          <p>Brown University '25</p>
        </div>
        <div className="flex space-x-2">
          <p className="hover:animate-wiggle">🩷</p>
          <p>Photography, pilates, trying local restaurants</p>
        </div>
      </div>
    </div>
  );
};
