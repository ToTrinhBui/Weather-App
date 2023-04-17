import React, { useState, useEffect } from "react";
import { formatIconMain, formatIconTime } from '../utils'

export default function Current(props) {
    const [degrees, setDegrees] = useState('')
    const [description, setDescription] = useState('')
    const [iconTime, setIconTime] = useState('')
    const [iconMain, setIconMain] = useState('')

    useEffect(() => {
        setDegrees(Math.round(props.data.main?.temp - 273.15));
        setDescription(props.data.weather?.[0].description);
        setIconTime(formatIconTime(props.data.weather?.[0].icon));
        setIconMain(formatIconMain(props.data.weather?.[0].icon));
    }, [props.data])


    return (
        <div className="current center">
            {props.error ? <img src={process.env.PUBLIC_URL+"/images/NotFound.png"} alt="NotFound" className="error-image" /> :
                <div>
                    <div className="text">
                        <h2>{props.data.name}</h2>
                        <h1 className="degrees">
                            {degrees}
                            <span className="celsius"> °C</span>
                        </h1>
                        <p className="small">{description}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL+`/images/${iconTime}/${iconTime} ${iconMain}.png`}
                        alt="current-weather-icon" />
                </div>
            }
        </div>
    )
}