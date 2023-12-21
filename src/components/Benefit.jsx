import "./Benefit.css";
import { FaChartBar, FaCode, FaPalette, FaUsers } from "react-icons/fa";
import { HiOfficeBuilding, HiSpeakerphone } from "react-icons/hi";
import { BsBank2 } from "react-icons/bs";
import { MdAddToPhotos } from "react-icons/md";
const Benefit = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-3 py-8 ">
      <div className="max-w-3xl mb-8 text-center mx-auto space-y-4">
        <h2 className="text-4xl md:text-6xl text-gray-300 font-bold text-center">
          TaskMaster: For Every Professional
        </h2>
        <p className="text-xl text-gray-300">
          What would you like to manage with TaskMaster Work OS?
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="card space-y-4 min-h-44">
          <FaPalette className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10  font-bold text-xl category-text ">
            Creative & design
          </h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <FaCode className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10  font-bold text-xl category-text ">
            Development
          </h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <HiOfficeBuilding className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10  font-bold text-xl category-text ">
            Corporate Professionals
          </h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <BsBank2 className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10 font-bold text-xl category-text ">Bankers</h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <HiSpeakerphone className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10  font-bold text-xl category-text ">Marketing</h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <FaChartBar className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10 font-bold text-xl category-text ">
            Project Management
          </h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <FaUsers className="text-gray-50 text-4xl z-10" />
          <h2 className="z-10  font-bold text-xl category-text ">HR</h2>
        </div>
        <div className="card space-y-4 min-h-44">
          <MdAddToPhotos className="text-gray-50 text-4xl z-10 " />
          <h2 className="z-10  font-bold text-xl category-text ">More</h2>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
