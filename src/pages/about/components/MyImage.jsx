import { about_image } from "../../../assets";

const MyImage = () => {
  return (
    <div className="mt-20 w-full max-container">
      <div className="px-5">
        <img className="object-cover w-full max-h-[800px] object-[-50%] rounded-2xl" src={about_image} alt="" />
      </div>
    </div>
  );
};

export default MyImage;
