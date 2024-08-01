import codeImg from "../assets/c1.jpg";
import { PiCheckCircleLight } from "react-icons/pi";
import { workflowSteps } from "../Constants/index";

function WorkFlow() {
  return (
    <div id="Workflow" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate Your
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Coding Journey
        </span>
      </h2>
      <div className="flex flex-wrap justify-center ">
        <div className="p-2 pt-20 w-full lg:w-1/2">
          <img src={codeImg} alt="codingImage" />
        </div>
        <div className="pt-20 w-full lg:w-1/2">
          {workflowSteps.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <PiCheckCircleLight />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-sm">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
