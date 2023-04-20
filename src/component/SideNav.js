import React, { useState, useEffect } from "react";
import "../css/SideNav.css";

import plantIcon from "../Assets/plant.png";
import Profile from "../Assets/Icons/Profile.png";
import Portfolio from "../Assets/Icons/portfolio.png";
import Explore from "../Assets/Icons/Explore.png";
import Bidding from "../Assets/Icons/Bidding.png";
import Logout from "../Assets/Icons/Logout.png";
import StartUp from "../Assets/Icons/Startup.png";
import Funds from "../Assets/Icons/Funds.png";
import { Link } from "react-router-dom";

const SideNav = () => {
    const [isExpended, setExpendState] = useState(false);

    const [pageType, setPageType] = useState(null);

    useEffect(() => {
        const signupType = localStorage.getItem("role");
        setPageType(signupType);
    }, []);


    const VcItems = [
        
        {
            text: "Profile",
            Icons: Profile,
        },
        {
            text: "Portfolio",
            Icons: Portfolio ,
        },
        {
            text: "Explore",
            Icons: Explore ,
            link: "login",
        },
        {
            text: "Bid Now",
            Icons:  Bidding ,
        },
        {
            text: "Logout",
            Icons: Logout,
        },
    ];

    const StartupItems = [

        {
            text: "Profile",
            Icons: Profile,
        },
        {
            text: "My StartUp",
            Icons: StartUp ,
        },
        {
            text: "Explore",
            Icons: Explore ,
            link: "login",
        },
        {
            text: "Funds",
            Icons:  Funds ,
        },
        {
            text: "Logout",
            Icons: Logout,
        },
    ];

    const NavItems = () => {
        if (pageType === "1") 
        {
            return VcItems;
        } 
        else if (pageType === "2") 
        {
            return StartupItems;
        }
        else 
        {
            return [];
        }

        //  else {
        //     return StartupItems;
        // }
    }
    

    return (
        <div
            className={
                isExpended
                    ? "side-nav-container"
                    : "side-nav-container side-nav-container-nx"
            }>
            <div className="nav-upper">
                <div className="nav-heading">
                    <div className="nav-brand">
                        <img src={plantIcon} alt="loding"></img>
                        {isExpended && <h2>Nine Seeders</h2>}
                    </div>
                    <button
                        className={
                            isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
                        }
                        onClick={() => setExpendState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* <div className="nav-menu">
                    {menuItems.map(({ text, Icons }) => (
                        <a href="#" className="menu-Item">
                            <img src={Icons} alt="" srcSet="" />
                            <p>{text}</p>
                        </a>
                    ))}
                </div> */}

                <div className="nav-menu">
                    {NavItems().map(({ text, Icons,link}) => (
                        // <a className="menu-Item"
                            // href={`/${link}`}>

                            <Link className="menu-Item" to={`/${link}`} key={text}>
                                

                            <img className="menu-item-icon" src={Icons} alt="" srcset="" />
                            {isExpended && <p>{text}</p>}

                            </Link> 
                        // </a>
                        
                    ))}
                </div>

            </div>

        </div>
    );
};

export default SideNav;
