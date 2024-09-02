import Profile from "../assets/alex.jpg";
import { IoFlagSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Activities = () => {
  return (
    <section className=" bg-white rounded-2xl px-8 py-12">
      <p className="text-[20px] font-bold">Activities</p>
      <div className="mt-6 flex flex-col gap-4 justify-center">
        <div className="flex gap-6">
          <img
            src={Profile}
            alt="profile pic"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="flex gap-2 items-center">
              <IoFlagSharp color="green" />
              <p className="text-green-500">New Invoice</p>
            </div>
            <p className="text-[20px] mt-4">
              Francisco Gibbs <span className="text-gray-600">created</span>
            </p>
            <p className="text-gray-600">Invoice PQ-4491C</p>
            <p className="text-gray-600 mt-4">Just Now</p>
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex justify-center items-center mt-6">
            <IoMdNotificationsOutline className=" text-white" />
          </div>
          <div>
            <p className="text-[20px] mt-4">
              Invoice-JL34328<span className="text-gray-600"> reminder </span>
            </p>
            <p className="text-gray-600 text-[18px] mt-4">
              Was send to{" "}
              <span className="text-black font-semibold"> Chester Corps</span>
            </p>
            <p className="text-gray-600 mt-4">Friday 12:30 am</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
