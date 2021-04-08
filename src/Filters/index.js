import React from "react";
import "./style.css";

export const Filters = () => (
    <div className="container">
        <p className="flexElement">
            <input className="input" placeholder='Seach for a country...' name="country" type="text" />
        </p>
        <p>
            <select className="input" name="region">
                <option value="" disabled selected hidden>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </p>
    </div>
);