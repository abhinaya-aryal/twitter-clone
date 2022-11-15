import { AiOutlineTwitter } from "react-icons/ai";

const Logo = () => {
  return (
    <>
      <div
        className={`h-max w-max rounded-full p-1 mt-0.2 hover:bg-[rgb(232,245,253)] cursor-pointer`}
      >
        <AiOutlineTwitter className={`text-3.6 text-[rgb(29,155,240)]`} />
      </div>
    </>
  );
};

export default Logo;
