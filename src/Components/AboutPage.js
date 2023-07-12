import React from "react";

const AboutPage = () => {
  return (
    <section className="">
      <div className="lg:flex lg:flex-row p-8 sm:flex  sm:flex-col">
        
        <div className="left-div w-1/2 mt-16 p-8 flex-col">
          <div className="max-w-fit flex ml-36">
            <div className="border rounded-full  p-2 flex gap-2 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="lightblue"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span> Customers’ Needs Above All Else</span>
            </div>
          </div>

          <div className="flex flex-col mt-8 lg:text-4xl leading-16 font-semibold">
            <h1 className="text-5xl">Take Control</h1>
            <h1 className="text-red-400 mt-4">
              Monitor Usage & Change Filters
            </h1>
            <h1 className="text-5xl mt-3">No Technician Needed</h1>
          </div>
          <div className="mt-10">
            <span className="text-gray-600 text-md">
              We have crafted a product that addresses the real frustrations of
              a customer. The first step is to ensure there are zero service
              delays.
            </span>
          </div>

          <div className="mt-3">
            <div className="">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" className="mt-4" fill="none">
                <path d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z" fill="#39C69B"></path>
              </svg>
                <div className="flex flex-col m-2">
                  <h1 className=" text-xl font-semibold">
                    Smart Water Purifier With Self Servicing Capability
                  </h1>{" "}
                  <p className="text-gray-500 mt-2 ">
                    Say goodbye to the hassle of scheduling a technician for
                    purifier maintenance with our self-replacing filters.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="mt-3" fill="none">
                <path d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z" fill="#39C69B"></path>
              </svg>
                <div className="flex flex-col m-2">
                  <h1 className=" text-xl font-semibold">
                    Compensation For Service Delays
                  </h1>{" "}
                  <p className="text-gray-500 mt-2 ">
                    You are entitled to a compensation of 100 Rs/Day if service
                    is delayed for more than 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 ml-32">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full font-mono text-white bg-blue-500 p-5 ">
              Next: Smart Water Generation
            </button>
          </div>
        </div>

        <div className="right-div w-1/2 mt-16">
          <img
            className="transition-all  hover:-translate-y-3 "
            src="https://ik.imagekit.io/aq3ybtarw/landing/water-lg.webp?updatedAt=1684088939335" alt=""
          />
        </div>
      </div>

{/*page -3 */}
<div className="page3 w-full">


<div className="lg:flex lg:flex-row p-8 sm:flex  sm:flex-col">

<div className="leftdiv w-1/2 mt-16 p-2 ">
          <img
            className="rounded-3xl   transition-all hover:-translate-y-3"
            src="https://gauge.ro./static/media/pure-water.a6d8aff1dcf1675e2594.webp" alt=""
          />
        </div>
        
        <div className="rightdiv w-1/2 mt-16 p-8 flex-col">
          <div className="max-w-fit flex ml-36">
            <div className="border rounded-full  p-2 flex gap-2 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="lightblue"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span> Pure water, smartly conserved</span>
            </div>
          </div>

          <div className="flex flex-col mt-8 lg:text-4xl leading-16 font-semibold">
            <h1 className="text-3xl font-sans ">Water Purifier Just Got <span className="text-red-400">Smarter</span></h1>
           
          </div>
          <div className="mt-4">
            <span className="text-gray-600 text-md font-sans ">
            The only purifier to recover 65% water, self-troubleshoot and do much more.
            </span>
          </div>

          <div className="mt-3">
            <div className="">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" className="h-12" fill="none">
                <path d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z" fill="#39C69B"></path>
              </svg>
                <div className="flex flex-col m-2">
                <p className="text-gray-500 text-lg ">

                  <span className="text-gray-700 font-semibold">
                  Ultimate water saver: 
                  </span>{" "}
                    Say goodbye to the hassle of scheduling a technician for
                    purifier maintenance with our self-replacing filters.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" className="" fill="none">
                <path d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z" fill="#39C69B"></path>
              </svg>
                <div className="flex flex-col m-1">
                <p className="text-gray-500 text-lg ">
                  <span className="text-gray-700 font-semibold">
                  Track water consumption and much more:
                  </span>{" "}
                  Monitor the daily amount of water that is filtered and wasted on your mobile phone. Also check TDS, flow rate, filters status.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" className="" fill="none">
                <path d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z" fill="#39C69B"></path>
              </svg>
                <div className="flex flex-col m-2">
                <p className="text-gray-500 text-lg ">

                  <span className="text-gray-700 font-semibold">
                  Auto-Troubleshooting: 
                  </span>{" "}
                  Monitor the daily amount of water that is filtered and wasted on your mobile phone. Also check TDS, flow rate, filters status.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 ml-32">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full font-mono text-white bg-blue-500 p-5 ">
              Next: 100 Days Money back
            </button>
          </div>
        </div>

      
      </div>
</div>

    </section>
  
    
  );
};

export default AboutPage;
