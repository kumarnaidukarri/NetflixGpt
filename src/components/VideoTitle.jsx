// video title of Main Container of Browse Page

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="title-container  pt-36 px-6">
      <h1 className="text-6xl font-bold">{title} </h1>
      <p className="text-lg py-6 w-1/4"> {overview} </p>
      <div className="buttons-container">
        <button className="px-9 py-3 text-lg text-white bg-gray-400 opacity-80 rounded-md">
          ▶️ Play
        </button>
        <button className="mx-2 px-9 py-3 text-lg text-white bg-gray-400 opacity-80 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
