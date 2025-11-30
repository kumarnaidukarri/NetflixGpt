// Gpt search bar component

import lang from "../utils/languageConstants.js";

const GptSearchBar = () => {
  return (
    <div className="Gpt-Searchbar  pt-[7.5%]  flex justify-center">
      <form className="w-1/2 bg-black  grid grid-cols-12">
        <input
          type="text"
          placeholder={lang.telugu.gptSearchPlaceholder}
          className="m-4 p-4 bg-white rounded-sm  col-span-9"
        />
        <button className="px-4 py-2 m-4 text-white bg-red-700 rounded-lg cursor-pointer hover:bg-red-600  col-span-3">
          {lang.telugu.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
