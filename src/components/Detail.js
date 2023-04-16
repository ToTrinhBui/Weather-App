import React, { useState, useEffect } from "react";

export default function Detail(props) {

    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [wind, setWind] = useState('')
    const [feel, setFeel] = useState('')
    const [visibility, setVisibility] = useState('')
    const [humidity, setHumidity] = useState('')

    useEffect(() => {
        setSunrise(new Date((props.data.sys?.sunrise + props.data.timezone) * 1000).toUTCString().slice(16, 22));
        setSunset(new Date((props.data.sys?.sunset + props.data.timezone) * 1000).toUTCString().slice(16, 22));
        setWind(props.data.wind?.speed);
        setFeel(Math.round(props.data.main?.feels_like - 273.15));
        setVisibility(props.data.visibility / 1000);
        setHumidity(props.data.main?.humidity);
    }, [props.data])
    
    return (
        <div className="detail">
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Sunrise.png" alt="title-icon" />
                    <h6>SUNRISE</h6>
                </div>
                {props.error ? <span>Not Found</span> : <h1>{sunrise}</h1>}
                <p>Have a good day</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Sunset.png" alt="title-icon" />
                    <h6>SUNSET</h6>
                </div>
                {props.error ? <span>Not Found</span> : <h1>{sunset}</h1>}
                <p>Good night</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Wind.png" alt="title-icon" />
                    <h6>WIND</h6>
                </div>
                {props.error ? <span>Not Found</span> : <h1>{wind}<span> m/s</span></h1>}
                <p>Expect strong gusts</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Thermometer.png" alt="title-icon" />
                    <h6>FEELS LIKE</h6>
                </div>
                {props.error ? <span>Not Found</span> : <h1>{feel}<span> °C</span></h1>}
                <p>Dress for chill</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/visibility.png" alt="title-icon" />
                    <h6>VISIBILITY</h6>
                </div>
                {props.error ? <span>Not Found</span> : <h1>{visibility}<span> km</span></h1>}
                <p>Drive carefully</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Drop.png" alt="title-icon" />
                    <h6>HUMIDITY</h6>
                </div>
                {props.error ? <span>Not Found</span> : <h1>{humidity}<span> %</span></h1>}
                <p>Sticky and damp</p>
            </div>
        </div>
    )
}