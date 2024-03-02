import React from "react";
import dd from '../images/dd.jpg'
export default function Service(){
    return (
        <section className="service">
            <div className="service-img">
                <img src={dd} alt="img"></img>
            </div>
            <div className="service-content">
                <h1>Detect your Crop Disease</h1>
                <h2>Using the powers of Deep Learning to detect disease of your crop.</h2>
                <button className="btn"><a href="https://www.google.com/" className="service-btn">Detect</a></button>
            </div>
        </section>
    )
}