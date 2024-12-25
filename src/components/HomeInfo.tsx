import { Link } from "react-router";

import { arrow } from "../assets/icons/index.ts";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Srini</span>
        👋
        <br />A Full Stack Software Engineer from 🇮🇳
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Building scalable web apps and solving problems at AT&T and beyond.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Know more about me
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          From crafting seamless UIs with React to building robust backends with
          Node.js, <br />
          I've led teams to deliver cutting-edge solutions.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Explore my work
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Have a project in mind? Need a dev who can turn ideas into code?
          <br /> Let's build something amazing together.
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Get in touch
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
