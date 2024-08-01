import video from "../assets/video.mp4";
import video1 from "../assets/video1.mp4";

function Hero() {
  return (
    <div id="Hero" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Empower Your Coding Journey with
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          an Interactive Platform
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Experience coding like never before with a platform designed for
        effortless development and collaboration. Elevate your skills and bring
        your ideas to life with seamless tools and a supportive community.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for Free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          src={video}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="rounded-lg w-2/5 border border-orange-700 shadow-orange-400 mx-2 my-4"
        ></video>
        <video
          src={video1}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="rounded-lg w-2/5 border border-orange-700 shadow-orange-400 mx-2 my-4"
        ></video>
      </div>
    </div>
  );
}

export default Hero;
