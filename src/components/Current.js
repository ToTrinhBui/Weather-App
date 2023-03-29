import React from "react";

export default function Current() {
    return (
        <div className="current center">
            <div className="text">
                <h2>Ha Noi</h2>
                <h1 className="degrees">20</h1>
                <p className="small">Mostly Clear</p>
            </div>
            <img src="../images/day/Day Wind.png" alt="current-weather-icon" />
        </div>
    )
}