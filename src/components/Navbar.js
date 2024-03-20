import React, { useState, useEffect, useRef } from "react";
import { scrollToTop, navigateTo } from "../components/utils/Constants";
import { ReactComponent as HomeIcon } from '../assets/svgs/HomeIcon.svg';
import { ReactComponent as MenuIcon } from '../assets/svgs/MenuIcon.svg';
import { ReactComponent as ExitIcon } from '../assets/svgs/ExitIcon.svg';
import { ReactComponent as DownArrowIcon } from '../assets/svgs/DownArrowIcon.svg';
import { Link } from "react-router-dom";
import '../styles/components/Navbar.scss';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showGlidingInfoDropdown, setShowGlidingInfoDropdown] = useState(false);
    const [showLearningDropdown, setShowLearningDropdown] = useState(false);
    const [showMemberDropdown, setShowMemberDropdown] = useState(false);
    const navbarRef = useRef(null);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        setShowGlidingInfoDropdown(false);
        setShowLearningDropdown(false);
        setShowMemberDropdown(false);
    };

    const handleMenuClick = () => {
        setShowNavbar(false);
        navigateTo();
        setShowGlidingInfoDropdown(false);
        setShowLearningDropdown(false);
        setShowMemberDropdown(false);
    };

    // Prevents all dropdown elements from being opened at once when a user clicks a menu item. 
    const toggleGlidingInfoDropdown = () => {
        setShowGlidingInfoDropdown(!showGlidingInfoDropdown);
        setShowLearningDropdown(false);
        setShowMemberDropdown(false);        
    }
    
    const toggleLearningDropdown = () => {
        setShowLearningDropdown(!showLearningDropdown);
        setShowGlidingInfoDropdown(false);
        setShowMemberDropdown(false);        
    }
    
    const toggleMemberDropdown = () => {
        setShowMemberDropdown(!showMemberDropdown);        
        setShowGlidingInfoDropdown(false);
        setShowLearningDropdown(false);
    }

    // Ensures dropdown elements are automatically closed when user clicks away.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current && !
                navbarRef.current.contains(event.target) &&
                !event.target.classList.contains("menu-items")
            ) {
                setShowNavbar(false);

                setShowGlidingInfoDropdown(false);
                setShowLearningDropdown(false);
                setShowMemberDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Allows navbar to change colour when user scrolls down past a certain point. 
    const [colour, setColour] = useState(false);
    const changeColour = () => {
        if (window.scrollY > 100) {
            setColour(true);
        } else {
            setColour(false);
        }
    }
    window.addEventListener("scroll", changeColour);
    
    return (
        <nav className={`navbar ${colour ? 'scrolled' : ''} ${showNavbar ? 'active' : ''}`} ref={navbarRef}>
            <div className="container">
                <Link 
                    to="/" 
                    className="content"
                    onClick={scrollToTop}
                >
                    <div className="header-items">
                        <img
                            src="/assets/gliding-logo.png" 
                            alt="ICGC Logo"
                            className="image"
                        />
                        <h1 className="heading">Imperial College Gliding Club</h1>
                    </div>
                </Link>

                <div className="menu-btn" onClick={handleShowNavbar}>
                    <MenuIcon />
                </div>

                <div className={`menu-elements ${showNavbar && 'active'}`}>
                    <div className="exit-btn" onClick={handleShowNavbar}>
                        <ExitIcon />
                    </div>

                    

                    <ul className="menu-items">
                        <li>
                            <Link 
                                to="/" 
                                onClick={handleMenuClick}
                                className="menu-items"
                            >
                                <HomeIcon />
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/faqs" 
                                onClick={handleMenuClick}
                                className="menu-items"
                            >
                                FAQs
                            </Link>
                        </li>

                        {/* 'What is gliding?' dropdown info */}
                        <li>
                            <div 
                                onClick={toggleGlidingInfoDropdown}  
                                className="menu-items"
                            >
                                What is gliding? <DownArrowIcon />
                            </div>
                            {showGlidingInfoDropdown && (
                                <div className="gliding-dropdown">
                                    <Link
                                        to="/whatisgliding/introduction"
                                        onClick={handleMenuClick}
                                        className="dropdown-items"
                                    >
                                        What's gliding?
                                    </Link>
                                    <Link
                                        to="/whatisgliding/soaring"
                                        onClick={handleMenuClick}
                                        className="dropdown-items"
                                    >
                                        Soaring
                                    </Link>
                                    <Link
                                        to="/whatisgliding/cross-country"
                                        onClick={handleMenuClick}
                                        className="dropdown-items"
                                    >
                                        Cross-country gliding and comps
                                    </Link>
                                    <Link
                                        to="/whatisgliding/aerobatics"
                                        onClick={handleMenuClick}
                                        className="dropdown-items"
                                    >
                                        Aerobatics
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* 'Learing to glide' dropdown info */}
                        <li>
                            <div 
                                onClick={toggleLearningDropdown}  
                                className="menu-items"
                            >
                                Learning to glide <DownArrowIcon />
                            </div>
                            {showLearningDropdown && (
                                <div className="gliding-dropdown">
                                <Link 
                                        to="/learningtoglide/join" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-items"
                                    >
                                        Learn how to glide
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/location" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-items"
                                    >
                                        Where do we fly?
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/first-trip" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-items"
                                    >
                                        First trip
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/pre-solo-training" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-items"
                                    >
                                        Pre solo training
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/post-solo-progression" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-items"
                                    >
                                        Post solo progression
                                    </Link>
                                </div>
                            )}
                        </li>
                        
                        {/* 'Member information' dropdown info */}
                        <li>
                            <div 
                                onClick={toggleMemberDropdown}  
                                className="menu-items"
                            >
                                Member information <DownArrowIcon />
                            </div>
                            {showMemberDropdown && (
                                <div className="gliding-dropdown">
                                    <Link 
                                        to="/memberinformation/fleet-and-costs" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-items"
                                    >
                                        Fleet and costs
                                    </Link>
                                </div>
                            )}
                        </li>

                        <Link 
                            to="/gallery" 
                            onClick={handleMenuClick} 
                            className="menu-items"
                        >
                            Gallery
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}