import React from "react";
import { Link } from "react-router-dom";
import img from '../assets/img/github.png'
export function Navigator (){
    const img = {
    }
    return(
        <nav className="flex justify-between items-center h-[50px] px-5 bg-gray-800 text-white">
            <h3 className="font-bold">Github Search</h3>
            <Link to ="/" className="mr-2" >

            <img  className="w-[40px]" src={require('../assets/img/github.png')} />
            </Link>


        <span>
            <Link to ="/" className="mr-2" >Home</Link>
            <Link className="mr-2" to ="/favorites" >Favorites</Link>
        </span>
        </nav>
    )
}