// video title of Main Container of Browse Page

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="title-container w-full absolute text-white bg-linear-to-r from-black aspect-video pt-[20%] px-6 md:px-24">
      <h1 className="text-2xl md:text-6xl font-bold">{title} </h1>
      <p className="text-lg py-6 w-1/4  hidden lg:inline-block"> {overview} </p>
      <div className="buttons-container  my-4">
        <button className="px-6 py-2 text-lg text-black bg-white rounded-md  hover:opacity-80 hover:cursor-pointer">
          ▶️ Play
        </button>
        <button className="mx-2 px-6 py-2 text-lg text-white bg-gray-400 opacity-80 rounded-md  hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
