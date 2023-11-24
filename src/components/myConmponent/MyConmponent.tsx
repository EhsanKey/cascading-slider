import MyComponentType from "./MyConmponent.types";

const MyConmponent: MyComponentType = ({ description, image, title }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-2 w-full h-36 text-center text-white font-bold flex justify-between items-center border-2 border-gray-900 hover:border-gray-500 transition-all duration-300">
      <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden border-4 border-white">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-center h-full w-[calc(100%-80px)] md:w-[calc(100%-120px)]">
        <h1 className="text-xl md:text-2xl">{title}</h1>
        <p className="text-sm md:text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MyConmponent;
