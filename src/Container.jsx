import Head from "./Head"
import hotImg from '/src/assets/weather-img1.png'
import rainyImg from '/src/assets/weather-img2.png'
import coldImg from '/src/assets/weather-img3.png'
import './Container.css'
import { useState } from "react"
import Card from "./Card"
import { info } from "autoprefixer"
function Container() {
    let [result, setResult] = useState({
        city: "",
        feels_like: "",
        humidity: "",
        pressure: "",
        temp: "",
        description: "",
        country: "",
        timezone: "",
        windSpeed: ""
    });
    console.log(result)
    let updateInfo = (res) => {
        setResult(res);
    }
    const weatherImage = result.temp < 15 ? coldImg :
        result.humidity > 70 ? rainyImg :
            hotImg;
            const weatherIconClass = result.temp < 15 ? "fa-snowflake" :
        result.humidity > 70 ? "fa-umbrella":
            "fa-sun";
    return (
        <>
            <div className='px-3 py-4  relative flex gap-8 container items-center justify-evenly flex-col '>
                <Head updateInfo={updateInfo} />
                <div className="flex w-[100%] relative items-center justify-start">
                    <h1 className="text-2xl font-semibold mr-2 text-rose-50">{result.city.toUpperCase()}</h1>
                    <i className="fa-solid fa-location-dot text-[1vw] text-rose-50"></i>
                    <i className={`fa-regular ${weatherIconClass} absolute end-0 text-xl text-[1vw] text-rose-50`}></i></div>
                <div className="flex justify-start w-full">
                    <h1 className="text-7xl text-stone-50">{Math.floor(result.temp)}&deg;</h1>
                    <div className="flex justify-start items-end">
                        <p className="text-[1.3vw] font-normal text-rose-50 mr-3">{result.description.toUpperCase()}</p>
                        <p className="text-[1vw]  text-rose-50">UTC+0{Math.floor(result.timezone / 3600)}:{Math.floor((result.timezone % 3600) / 60)}</p>
                    </div>
                </div>
                <div className="w-full h-32 flex">
                    <img src={weatherImage} alt="Weather Condition"
                        className='w-full h-full object-cover object-center' />
                </div>
                <div className="flex w-full h-[50vh] flex-col gap-2 bg-blue-500 px-7 py-3 rounded-2xl">
                    <Card value={result.humidity} metric="%" name="Humidity" icon="fa-cloud" />
                    <Card value={result.pressure} metric="hPa" name="Pressure" icon="fa-bolt-lightning" />
                    <Card value={result.windSpeed} metric="m/s" name="Wind Speed" icon="fa-umbrella " />
                </div>
            </div>
        </>
    )
}
export default Container