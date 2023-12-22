import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col max-w-7xl justify-center items-center space-y-3 w-full">
            <div className="flex flex-col md:items-start items-center justify-center space-y-3 px-8 text-center">
              <div className="text-3xl md:text-7xl font-bold">
                Master Your Tasks: Elevate Your Productivity Journey
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6 w-full items-center justify-center">
              <div className="lg:w-40 w-64 h-40 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-32 lg:w-40 h-48 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-60 w-64 h-96 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-48 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-32 lg:w-40 h-32 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1590402494727-0375eeaacf68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-40 w-64 h-40 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2">
          <div className="text-3xl font-medium">Meet Our Team</div>
          <div className="text-sm mx-2 md:text-xl text-stone-400">
            Meet the team members who have contributed their designs for this
            website.
          </div>
          <div className="text-sm mx-2 md:text-xl mb-2 text-stone-400">
            Resource person of Tailblocks community
          </div>
          <div className="md:grid flex">
            <div className="flex items-center justify-center md:flex-row flex-col space-x-4 p-2">
              <div className="flex-col px-6 py-2 max-w-7xl">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?man,businessman"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-300 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div className="italic text-gray-400">CEO, Tailblocks</div>
              </div>
              <div className="flex-col px-6 py-2">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?boy"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-300 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div className="italic text-gray-400">Executive Producer</div>
              </div>
              <div className="flex-col px-6 py-2">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-300 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div className="italic text-gray-400">HR</div>
              </div>
            </div>
            <div className="flex space-x-4 p-2 items-center justify-center md:flex-row flex-col">
              <div className="flex-col px-6 py-2">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?kid"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-300 cursor-pointer hover:text-stone-400">
                  Clay Johnson
                </div>
                <div className="italic text-gray-400">Manager</div>
              </div>
              <div className="flex-col px-6 py-2">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-300 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div className="italic text-gray-400">Marketing Producer</div>
              </div>
              <div className="flex-col px-6 py-2">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?woman"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-300 cursor-pointer hover:text-stone-400">
                  Wednesday Addams
                </div>
                <div className="italic text-gray-400">Financer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center items-center max-w-7xl w-full p-4">
          <div className="flex flex-col items-center justify-around w-3/4 md:flex-row">
            <div className="flex flex-col md:items-start space-y-3 md:w-full text-gray-300 mx-4 text-sm font-medium">
              <div className="text-2xl">Contact Us</div>
              <div>Our mailing address is:</div>
              <div className="font-bold">admin@taskmaster.org</div>
              <div>152A Chaelotte Street,</div>
              <div>Peterborough ON</div>
              <div>Phone: 705-784-3221</div>
              <div className="flex text-2xl space-x-3 font-medium">
                <a href="">
                  <FaFacebook className="hover:text-blue-500" />
                </a>

                <FaTwitter className="hover:text-blue-700" />

                <FaInstagram className="hover:text-fuchsia-600" />

                <FaReddit className="hover:text-red-600" />
              </div>
            </div>
            <div className="text-gray-300 m-4 items-start border-gray-900 flex flex-col md:w-full space-y-3">
              <div className="text-xl font-medium">Let us work together</div>
              <input
                placeholder="Enter your Name"
                className="border border-gray-400 rounded px-2 py-1 w-48 md:w-96"
              />
              <input
                placeholder="Enter a valid Email address"
                className="border border-gray-400 rounded py-1 px-2 w-48 md:w-96"
              />
              <textarea
                placeholder="Enter your message"
                type="text"
                className="border border-gray-400 rounded py-1 px-2 w-48 md:w-96 h-20 md:h-40"
              ></textarea>
              <button className="text-white px-4 rounded font-medium hover:bg-yellow-600 py-1 bg-yellow-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
