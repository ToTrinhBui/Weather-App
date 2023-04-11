import React from "react";

export default function Search({value,change, submit}) {
    return (
        <div className="search">
            <form className="search-form" onSubmit={submit}>
                <img src="../images/search.png" alt="search-icon" />
                <input className="search-input" placeholder="Search for a city or airport" value={value} onChange={change} />
            </form>
        </div>
    )
}