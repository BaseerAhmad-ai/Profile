import { useNavigate } from "react-router-dom";
import { FaBars, FaPlus } from "react-icons/fa";
import { useId } from "react";
export function Gallery() {
  const navigate = useNavigate();
  const id = useId();
  return (
    <div className="h-dvh w-dvw bg-gray-100 grid md:place-items-center">
      <div className="h-dvh w-dvw  overflow-hidden  bg-cyan-500 flex md:shadow-xl md:rounded-xl md:w-3/4 md:h-[90%] ">
        <header className="">
          <div className="bg-slate-200">
            <h1>Image Gallery</h1>
          </div>
          <nav>
            <ul>
              <li>food</li>
              <li>food</li>
              <li>food</li>
              <li>food</li>
              <li>food</li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/projects/signin")}
              type="button"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Sign up
            </button>

            <button
              onClick={() => navigate("/projects/login")}
              type="button"
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              login
            </button>
          </div>
          <div className="">
            <FaBars />
          </div>
        </header>
        <section>
          <div className="">
            <label htmlFor={id}>Search</label>
            <input
              id={id}
              name="search"
              type="text"
              placeholder="Search something.."
              className="input"
              required
              autoFocus={true}
              autoComplete="off"
            />
          </div>
          <div className="">
            <FaPlus/>
            <input type="file" accept="image/*" className="input" value="upload"/>
          </div>
        </section>
        <div className=""></div>
        <main>
        <div className="">
            <FaPlus/>
            <input type="file" accept="image/*" className="input" value="upload"/>
          </div>
          <ul>

          </ul>
        </main>
        <div className=""></div>
        <footer>
        <div className="">
        <button

              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Edit & Show
            </button>
        </div>
        <div className="">
        <button
            
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>

            <button
             
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Select
            </button>
        </div>
        </footer>

      </div>
    </div>
  );
}
