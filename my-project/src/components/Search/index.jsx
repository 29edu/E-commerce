import React from "react";
// import "../Search/style.css"

const Search = () => {
    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input className=" w-[100%] h-[35px] focus:outline-none p-[2] text-[15px]" type="text" placeholder="Search for Products..."/>
        </div>
    )
}

export default Search;