import React from "react";
import {formatIconMain } from "../utils";

export default function Weekly(props) {
    const dailyWeather = props.data.list.reduce((acc, item) => {
        const date = new Date(item.dt_txt).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = item;
        }
        return acc;
    }, {});

    return (
        <>
            {Object.values(dailyWeather).slice(1, 6).map((item, i) => {
                const date = new Date(item.dt_txt);
                const dateString = date.toLocaleDateString('en-US', { weekday: 'short' });
                console.log(item)
                return (
                    <div key={i} className="next-day center">
                        <p className="small">{dateString.toUpperCase()}</p>
                        <img
                            src={`../images/day/day ${formatIconMain(item.weather?.[0].icon)}.png`}
                            alt="weather-icon"
                        />
                        <h4>{Math.round(item.main?.temp - 273.15)}</h4>
                    </div>
                );
            })}
        </>
    );
}