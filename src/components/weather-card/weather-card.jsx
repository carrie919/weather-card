import React from "react";

import './weather-card.css';

const WeatherCard = ({ weatherData }) => {
    const { location, current } = weatherData;
    return(
        <div className='weather-card'>
            <div className='current-location'>
                <h3>{location.name},{location.region},{location.country}</h3>
            </div>
            <div className='today-forecast'>
                <div className='today-image'>
                    <img src={current.condition.icon} alt="weather condition" />
                    <p>{current.condition.text}</p>
                </div>
                <div className='today-temparature'>{current.temp_c}°c</div>
                <div className='today-details'>
                    <p>wind: {current.wind_kph} kmph</p>
                    <p>precipitation: {current.precip_mm} mm</p>
                    <p>pressure: {current.pressure_mb} mb</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;