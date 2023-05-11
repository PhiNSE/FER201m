import React, { Component } from "react";
export default class Navigation extends Component{
    render(){
        return(
            <div>
                <nav>
                    <ul className="nav">
                        <li className="nav-ele active"><a href="#home"><span class="text-dec-none">Home</span></a></li>
                        <li  className="nav-ele"><a herf="#news">News</a></li>
                        <li  className="nav-ele"><a herf="#about">About</a></li>
                        <li  className="nav-ele"><a herf="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}