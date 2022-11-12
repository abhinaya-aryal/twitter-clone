import heebo from "../../lib/fonts/heebo";

const TweetButton = () => {
  return (
    <>
      <button
        className={`${heebo.className} bg-[rgb(29,155,240)] hover:bg-[rgb(26,140,216)] w-max h-max py-1 px-8 rounded-full my-1.6 text-1.8 font-semibold text-white`}
      >
        Tweet
      </button>
    </>
  );
};

export default TweetButton;
