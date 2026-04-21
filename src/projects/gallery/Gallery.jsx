import { useNavigate } from "react-router-dom";
import { FaBars, FaPlus, FaSearch } from "react-icons/fa";
import { useEffect, useId, useState } from "react";
import { ImageCard } from "../../Components/UI/ImageCard";
export function Gallery() {
  const navigate = useNavigate();
  const id = useId();
  const env = import.meta.env.VITE_Gallery_API_KEY;
  const [api, setApi] = useState([]);
  const [type, setType] = useState("beautiful");
  const [data, setData] = useState([]);
  const [cat, setCat] = useState("nature");
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch( `https://api.unsplash.com/search/photos/?query=${type} ${cat}&per_page=29&client_id=${env}`);
        const data = await res.json();
        setApi(data.results);
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [type,cat]);
  const handleNav = (e) => {
    setCat(e.target.innerText);
  };
  const handleType = (e) => {
    setType(e.target.value); 
  };
  const handleInput = (e) => {
    setInput(e);
    const filter = api.filter((item) =>
      (item.alt_description || item.description)
        .toLowerCase()
        .includes(e.toLowerCase())
    );
    setData(filter);
  }; 
  return (
    <div className="h-dvh w-dvw bg-gray-100 grid md:place-items-center">
      <div className="h-dvh w-dvw  overflow-hidden  bg-slate-100">
        <header className="w-full mb-5 h-[clamp(2rem,10vw,3rem)] bg-slate-200 flex justify-evenly items-center ">
          <div className="h-full flex items-center px-3 py-1 font-bold text-xl">
            <h1>Image Gallery</h1>
          </div>
          <nav className="max-xs:hidden w-[clamp(40%,10vw,30%)] grid place-items-center">
            <ul className=" text-black font-semibold [&>*]:cursor-pointer  [&>*]:border-black [&>*]:transition [&>*]:px-2 capitalize w-full flex justify-evenly items-center">
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                nature
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                food
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                places
              </li>
              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                events
              </li>

              <li className="hover:border-b-2" onClick={(e) => handleNav(e)}>
                sea animal
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 justify-evenly items-center">
            <button
              onClick={() => navigate("/projects/signup")}
              type="button"
              className="  max-[480px]:hidden border border-gray-300 h-[90%] text-gray-700 px-6 py-1 rounded-lg hover:bg-gray-100 transition"
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
        <section className="flex justify-evenly items-center p-1">
          <div className="relative w-2/3 flex flex-col justify-between items-start p-2 ml-1">
            <input
              id={id}
              name="search"
              type="text"
              className="bg-gray-300 peer focus:border focus:border-slate-300 h-[clamp(0.9rem,5vw,2rem)] w-2/3 text-xl rounded-md py-1 px-2 group-focus:border-cyan-900 "
              required
              autoComplete="off"
              value={input}
              onChange={(e) => handleInput(e.target.value)}
              placeholder="search .."
            />
            <label htmlFor={id}></label>
            <span className="absolute left-[59%] top-4 peer-focus:hidden text-xl">
              <FaSearch />
            </span>
          </div>
          <div className="flex gap-4">
            <label htmlFor="options">
              <select
                name="filter"
                id="options"
                onChange={(e) => handleType(e)}
                className="font-normal [&>*]:font-normal  bg-gray-300 w-32 h-7 px-2 rounded-sm"
              >
                <option value="buetiful">All</option>
                <option value="latest buetiful">Latest</option>
                <option value="oldest buetiful">Oldest</option>
                <option value="popular buetiful">Popular</option>
              </select>
            </label>
            <label htmlFor="sort">
              <select
                id="sort"
                className="font-normal  [&>*]:font-normal  bg-gray-300 w-32 h-7 px-2 rounded-sm"
              >
                <option value="sort">Sort</option>
                <option value="name">Name</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </label>
          </div>
        </section>
        <main className="mt-1 w-full  h-[79%]  mx-auto">
          <ul className="ul h-full w-full overflow-y-auto ">
            <li className="group relative h-80   w-full  bg-white rounded-sm overflow-hidden shadow cursor-pointer">
              <input type="file" accept="image/*" id={id} className="hidden" />

              <label
                htmlFor={id}
                className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-gray-100 transition"
              >
                <FaPlus className="text-3xl text-gray-600" />
                <p className="text-gray-700 font-semibold">Upload</p>
              </label>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Add Image</p>
              </div>
            </li>

            {data.map((items) => (
              <ImageCard key={items.id} image={items} input={input} />
            ))}
          </ul>
        </main>
        {/* <footer className="flex justify-between px-5 bg-gray-200 w-full h-[clamp(2rem,10vw,3rem)]">
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
        </footer> */}
      </div>
    </div>
  );
}
