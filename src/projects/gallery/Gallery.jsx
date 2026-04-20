import { useNavigate } from "react-router-dom";
import { FaBars, FaPlus, FaSearch } from "react-icons/fa";
import { useEffect, useId, useState } from "react";
import { ImageCard } from "../../Components/UI/ImageCard";
export function Gallery() {
  const navigate = useNavigate();
  const id = useId();
  const env = import.meta.env.VITE_Gallery_API_KEY;
  const [api, setApi] = useState([]);
  const [input, setInput] = useState("");
  const [URL, setURL] = useState(
    `https://api.unsplash.com/search/photos/?query=nature&per_page=5&client_id=${env}`
  );
  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setApi(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNav = (e) => {
    setURL(
      `https://api.unsplash.com/search/photos/?query=${e.target.innerText}&per_page=5&client_id=${env}`
    );
  };
  useEffect(() => {
    fetchData();
  }, [URL]);
  return (
    <div className="h-dvh w-dvw bg-gray-100 grid md:place-items-center">
      <div className="h-dvh w-dvw  overflow-hidden  bg-cyan-500  ">
        <header className="w-full mb-5 h-[clamp(2rem,10vw,3rem)] bg-slate-200 flex justify-evenly items-center ">
          <div className="h-full flex items-center px-3 py-1 font-bold text-xl">
            <h1>Image Gallery</h1>
          </div>
          <nav className="max-xs:hidden w-[clamp(40%,10vw,30%)] grid place-items-center">
            <ul className=" text-cyan-500 font-semibold  [&>*]:border-cyan-500 [&>*]:transition [&>*]:px-2 capitalize w-full flex justify-evenly items-center">
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                food
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                park
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                game
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                uk
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                pakistan
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 justify-evenly items-center">
            <button
              onClick={() => navigate("/projects/signup")}
              type="button"
              className=" max-[480px]:hidden bg-cyan-600 text-white px-6 py-1 h-[90%] rounded-lg hover:bg-cyan-700 transition"
            >
              Sign up
            </button>

            <button
              onClick={() => navigate("/projects/login")}
              type="button"
              className=" max-[480px]:hidden border border-gray-300 h-[90%] text-gray-700 px-6 py-1 rounded-lg hover:bg-gray-100 transition"
            >
              login
            </button>
          </div>
          <div className="min-[480px]:hidden p-2 text-bold texl-2xl hover:bg-gray-100 transition border border-gray-300">
            <FaBars />
          </div>
        </header>
        <section className="flex justify-evenly items-center p-2">
          <div className="relative w-2/3 flex flex-col justify-between items-start p-2 ml-5">
            <input
              id={id}
              name="search"
              type="text"
              className="bg-gray-200 peer focus:border focus:border-cyan-900 h-[clamp(0.9rem,5vw,2rem)] w-2/3 text-xl rounded-md py-1 px-2 group-focus:border-cyan-900 "
              required
              autoComplete="off"
              value={input}
              onChange={(e) => handleInput(e.target.value)}
            />
            <label
              htmlFor={id}
              className="peer-focus:top-[-13px]  transition peer-focus:text-gray-700 peer-placeholder-shown:text-[clamp(0.5rem,5vw,1.2rem)] peer-placeholder-shown:top-2 text-[clamp(0.7rem,5vw,1.4rem)] absolute  left-4 "
            >
              Search
            </label>
            <span className="absolute left-[59%] top-4 peer-focus:hidden text-xl">
              <FaSearch />
            </span>
          </div>
          <div className="">
            <label
              htmlFor="upload"
              className="bg-gray-200 hover:bg-gray-100 flex  items-center border gap-1 border-gray-500 h-[2.2rem] text-gray-700  px-6 py-1 rounded-lg transition"
            >
              <FaPlus />
              <p className="text-xl font-semibold ">Upload</p>
            </label>
            <input
              type="file"
              accept="image/*"
              id="upload"
              className="hidden"
            />
          </div>
        </section>
        <div className="h-1 bg-gray-100 w-full"></div>
        <main className="mt-3  w-full  h-[79%]  mx-auto">
          <ul className="ul h-full w-full overflow-y-auto ">
            <li className="group relative h-auto  w-full aspect-square bg-white rounded-xl overflow-hidden shadow cursor-pointer">
              <input
                type="file"
                accept="image/*"
                id="upload-image"
                className="hidden"
              />

              <label
                htmlFor="upload-image"
                className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 transition"
              >
                <FaPlus className="text-3xl text-gray-600" />
                <p className="text-gray-700 font-semibold">Upload</p>
              </label>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Add Image</p>
              </div>
            </li>

            {api.map((items) => (
              <ImageCard key={items.id} image={items} />
            ))}
          </ul>
        </main>
        <div className="h-1 bg-gray-100 w-full"></div>

        <footer className="flex justify-between px-5 bg-gray-200 w-full h-[clamp(2rem,10vw,3rem)]">
          <button className="h-[2.2rem] bg-cyan-600 text-white px-6 py-2 rounded-lg transition">
            Edit & Show
          </button>
          <div className="flex justify-right gap-5 px-5 items-center">
            <button className="h-[2.2rem] bg-cyan-600 text-white px-6 py-2 rounded-lg transition">
              Delete
            </button>

            <button className="h-[2.2rem] border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Select
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
