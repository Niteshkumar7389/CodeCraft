import { testimonials } from "../Constants";

function Testimonials() {
  return (
    <div id="Testimonials" className="mt-10 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
        What People
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          are saying
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800  font-thin">
              <p>{item.testimonial}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6  rounded-full border border-neutral-300"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h6>{item.name}</h6>
              <span className="text-sm font-normal italic text-neutral-600 ">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
