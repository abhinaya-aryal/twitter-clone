import { AiFillLock } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

// need to make code better readable and clean
const Profile = () => {
  return (
    <>
      <div
        className={
          "hover:bg-[rgb(231,231,232)] h-max w-max p-1 mb-1 rounded-full flex items-center space-x-2 cursor-pointer"
        }
      >
        <div className="flex items-center">
          <div className={`bg-black h-4.4 w-4.4 rounded-full`}></div>
          <div className="h-max w-max flex flex-col justify-center ml-0.6 text-1.6">
            <div className={`font-semibold flex space-x-0.2`}>
              <div>Abhinaya Aryal</div>
              <AiFillLock className="text-1.8" />
            </div>
            <div className={`text-[#536471] text-1.4`}>@abhinaya_aryal</div>
          </div>
        </div>
        <BiDotsHorizontalRounded className="text-2" />
      </div>
    </>
  );
};

export default Profile;
