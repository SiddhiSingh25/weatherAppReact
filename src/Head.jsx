import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function Head({ updateInfo }) {
    const [city, setCity] = useState("Ballia");

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const key = '18a75f7432dbfe33513b2c3a7889f91f'; // Replace with your actual API key

    const generateData = async (cityName) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('City not found');
            }
            let data = await response.json();
            return {
                city: cityName,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                temp: data.main.temp,
                description: data.weather[0].main,
                country: data.sys.country,
                timezone: data.timezone,
                windSpeed: data.wind.speed
            };
        } catch (error) {
            alert('OopS!! City not found', error);
            return null;
        }
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let info = await generateData(city);
        if (info) {
            updateInfo(info);
        }
        setCity("");
    }

    useEffect(() => {
        async function fetchInitialData() {
            if (city) {
                let info = await generateData(city);
                if (info) {
                    updateInfo(info);
                }
            }
        }
        fetchInitialData();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex w-full items-center justify-between'>
                    <input 
                        type="text"
                        className='rounded bg-slate-100 outline-none px-2 py-2 mr-2 w-60'
                        value={city}
                        required
                        onChange={handleCity}
                        placeholder='Enter city name...'
                    />
                    <Button variant="contained" type="submit" endIcon={<SearchIcon />}>
                        Send
                    </Button>
                </div>
            </form>
        </>
    );
}

export default Head;
