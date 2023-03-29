import React from "react";

export default function Detail() {
    return (
        <div className="detail">
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Sun.png" alt="title-icon" />
                    <h6>UV INDEX</h6>
                </div>
                <h1>3</h1>
                <p>Description</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Wind.png" alt="title-icon" />
                    <h6>WIND</h6>
                </div>
                <h1>3</h1>
                <p>Description</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Thermometer.png" alt="title-icon" />
                    <h6>FEELS LIKE</h6>
                </div>
                <h1>3</h1>
                <p>Description</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/SunHorizon.png" alt="title-icon" />
                    <h6>SUNRISE</h6>
                </div>
                <h1>3</h1>
                <p>Description</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/CloudRain.png" alt="title-icon" />
                    <h6>RAINFALL</h6>
                </div>
                <h1>3</h1>
                <p>Description</p>
            </div>
            <div className="card">
                <div className="title">
                    <img src="../images/detail/Drop.png" alt="title-icon" />
                    <h6>HUMIDITY</h6>
                </div>
                <h1>3</h1>
                <p>Description</p>
            </div>
        </div>
    )
}