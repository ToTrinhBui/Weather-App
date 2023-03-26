import React from "react";

export default function Search(){
    return(
        <div className="search">
            <img src="../images/search.png" alt="search-icon" />
            <input className="search-input" placeholder="Search for a city or airport"/>
        </div>
    )
}