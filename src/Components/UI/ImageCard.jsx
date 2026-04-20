import { useState, useEffect } from "react";
export const ImageCard = ({ image }) => {
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
    <li className="hover:scale-105 bg-white rounded-lg h-80 shadow-xl overflow-hidden transition ">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className="w-full h-52 "
      />
      <div className="p-2 my-1">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {image.description || image.alt_description || "Untitled"}
        </h2>
        <div className="flex items-center gap-3">
          <img
            src={image.user.profile_image.small}
            alt={image.user.name}
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm text-gray-600">{image.user.name}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={toggleLike}
            className={`px-3 py-1 rounded-full text-sm ${
              liked
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {liked ? "♥ Liked" : "♡ Like"}
          </button>
          <a
            href={image.links.download}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Download
          </a>
        </div>
      </div>
    </li>
  );
};

