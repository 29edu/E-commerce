import React from "react";
import "../Search/style.css";
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input className=" w-[100%] h-[35px] focus:outline-none p-[2] text-[15px] pl-[10px]" type="text" placeholder="Search for Products..."/>
            <Button className=" !absolute top-[5px] right-[5px] z-50 !w-[35px] !min-w-[35] h-[40px] !rounded-full text-black">
                <IoSearch className="!text-black text-[20px]"/>
            </Button>   {/*Intially the search was realtive but !absolute is used to remove the relative */}
            
        </div>
        
    )
}

export default Search;