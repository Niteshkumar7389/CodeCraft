import { PricingPlans } from "../Constants/index";
import { PiCheckCircleLight } from "react-icons/pi";

function Pricing() {
  return (
    <div id="Pricing" className="mt-20 ">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap ">
        {PricingPlans.map((PricingPlans, index) => (
          <div key={index} className="w-full sm:w-1/2  lg:w-1/3 p-2 ">
            <div className="box bg-white/5 transition-bg-transform duration-500  py-4 px-4 rounded-lg hover:bg-white/5 hover:scale-105 border border-neutral-700 p-10">
              <p className="text-2xl mb-8">
                {PricingPlans.title}
                {PricingPlans.title === "Pro" && (
                  <span className="text-xl mb-4 ml-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl mt-6 mr-2">{PricingPlans.price}</span>
                <span className="text-neutral-400 tracking-tight">/month</span>
              </p>
              <ul>
                {PricingPlans.features.map((feature, index) => (
                  <li key={index} className=" mt-8 flex items-center">
                    <PiCheckCircleLight className="text-green-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
