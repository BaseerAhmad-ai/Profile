import { useEffect, useState } from "react";
import "./styles/index.css";
import style from "./styles/Weather.module.css";
import VITE_WEATHER_API_KEY from "../../.env"
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';   
export function Weather() {
  const month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const [API, setAPI] = useState({});
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [URL, setURL] = useState(`http://api.openweathermap.org/data/2.5/weather?q=islamabad&APPID=${VITE_WEATHER_API_KEY}`)
  document.title = "Weather App";
  let intervalId;
 useEffect(() => {
   intervalId=setInterval(() => {
    setTime(new Date().toLocaleTimeString())
   }, 1000);
   return () => {
     clearInterval(intervalId);
   }
 }, [])
 
  const data = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setAPI(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    data();
  }, [URL]);
  const handleSubmition=(e)=>{
    e.preventDefault();
    setURL(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=20e88d74a36f545ce9f4a754c76a5f08`)
 setInput("")
  }
    if (loading) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    return (
  <>
      <h1 style={{ padding: "12px" }}>
        {/* Please check your conection and try again.. */}
        Failed to fetch
      </h1>
      <button style={{ margin: "12px",padding:"4px" }} onClick={()=>location.reload()}>Refresh</button>
      </>
    );
  }
  const { weather, main, clouds, wind, visibility } = API;
  const { temp, humidity, pressure, sea_level, feels_like } = main;
  const img=`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
//   const graphData = [
//   {
//     name: 'temperature',
//     value:temp
//   },
//   {
//     name: 'humidity',
//     value:humidity
    
//   },
//   {
//     name: 'pressure',
//     value:pressure

//   },
//   {
//     name: 'visibility',
//     value:visibility

//   },
// ];
  return (
  <>
          <header>
        <form onSubmit={e=>handleSubmition(e)}>
          <input
            type="text"
            name=""
            id=""
            autoFocus={true}
            placeholder="Search city.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span>🔎</span>
        </form>
        <section>
          <p>
            <img
              src={img}
              alt="icon"
            />
            {API.name},{" "}
            {new Intl.DisplayNames(["en"], { type: "region" }).of(
              API.sys.country
            )}
          </p>

          <h1>{Math.round(temp - 273.15)}&deg;C</h1>
          <h2>
            <img
              src={img}
              alt="icon"
            />
            {weather[0].description}
          </h2>
          <p>
            today {new Date().getDate()} {month[new Date().getMonth()]}
          </p>
        </section>
      </header>
      <h2>
        <img
          src={img}
          alt="icon"
        />
        {time}
      </h2>
      <main>
        <h2>More details of today's weather</h2>
        <section>
        <div className={style.card}>
            <div>
              <h3>chance of rain</h3> <span>🌥</span>
            </div>
            <h4>{Math.round(clouds.all * 0.6 + humidity * 0.4)}%</h4>
            <div>
              <p>no</p>
              <p>possble</p>
              <p>highly</p>
              <p>Heavily</p>
            </div>
            <progress
              min="0"
              max="100"
              value={Math.round(clouds.all * 0.6 + humidity * 0.4)}
            ></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>humidity</h3> <span>🌥</span>
            </div>
            <h4>{humidity}%</h4>
            <div>
              <p>dry</p>
              <p>comfort</p>
              <p>humid</p>
              <p>very humid</p>
            </div>
            <progress min="0" max="100" value={humidity}></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>pressure</h3> <span>🌥</span>
            </div>
            <h4>{pressure}hPa</h4>

            <div>
              <p>low</p>
              <p>normal</p>
              <p>high</p>
            </div>
            <progress min="0" max="100" value={((pressure-950)/(1050-950))*100}></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>feels like</h3> <span>🌥</span>
            </div>
            <h4>{Math.round(feels_like - 273.15)}&deg;C</h4>
            <div>
              <p>cold</p>
              <p>normal</p>
              <p>warm</p>
              <p>hot</p>
            </div>
            <progress
              min="-20"
              max="50"
              value={Math.round(feels_like - 273.15)}
            ></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>clouds</h3> <span>🌥</span>
            </div>
            <h4>{clouds.all}%</h4>
            <div>
              <p>clear</p>
              <p>partly.cloudy</p>
              <p>cloudy</p>
              <p>overcast</p>
            </div>
            <progress min="0" max="100" value={API.clouds.all}></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>sea level</h3> <span>🌥</span>
            </div>
            <h4>{sea_level}hPa</h4>
            <div>
              <p>low</p>
              <p>normal</p>
              <p>high</p>
            </div>
            <progress min="0" max="100" value={((sea_level-950)/(1050-950))*100}></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>wind speed</h3> <span>🌥</span>
            </div>
            <h4>{Math.round(wind.speed * 3.6)}km/h</h4>
            <div>
              <p>calm</p>
              <p>breeze</p>
              <p>windy</p>
              <p>storm</p>
            </div>
            <progress min="0" max="100" value="70"></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>wind direction</h3> <span>🌥</span>
            </div>
            <h4>{((wind.deg % 360) + 360) % 360}&deg;</h4>
            <div>
              <p>North</p>
              <p>East</p>
              <p>South</p>
              <p>West</p>
            </div>
            <progress
              min="0"
              max="270"
              value={((wind.deg % 360) + 360) % 360}
            ></progress>
          </div>
          <div className={style.card}>
            <div>
              <h3>visibility</h3> <span>🌥</span>
            </div>
            <h4>{visibility / 1000}km</h4>
            <div>
              <p>foggy</p>
              <p>poor</p>
              <p>normal</p>
              <p>clear</p>
            </div>
            <progress min="0" max="20" value={visibility / 1000}></progress>
          </div>
          
        </section>
        {/* <hr />
        <footer>
          <h5>welcome weather  graph</h5>
          <p>check out todays weather information</p>
          <section>
          <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={graphData}
      margin={{
        top: 20,
        right: 10,
        left: 10,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" niceTicks="snap125" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      <RechartsDevtools />
    </AreaChart>
          </section>
        </footer> */}
      </main>
  </>
  );
}
