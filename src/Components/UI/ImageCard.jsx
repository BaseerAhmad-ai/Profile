import { useState, useEffect } from "react";
export const ImageCard = ({ image}) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLiked(storedLikes[image.id] === true);
  }, [image.id]);

  const toggleLike = () => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    storedLikes[image.id] = !liked;
    localStorage.setItem("likes", JSON.stringify(storedLikes));
    setLiked(!liked);
  };
  return (
    <li className="hover:scale-105 bg-gray-200 rounded-sm h-80 shadow-2xl overflow-hidden transition ">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className="w-full h-60 "
      />
      <div className="p-2 my-1">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {image.description || image.alt_description || "Untitle" }
        </h2>
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={toggleLike}
            className={` border border-slate-300 text-sm  px-3 py-1 rounded-full ${
              liked
                ? "bg-red-500 text-white"
                : "bg-slate-50 text-black"
            }`}
          >
            {liked ? "♥ Liked" : "♡ Like"}
          </button>
          <a
            href={image.links.download}
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-slate-300 text-sm bg-slate-50 text-black px-3 py-1 rounded-full"
          >
            Download
          </a>
        </div>
      </div>
    </li>
  );
};

