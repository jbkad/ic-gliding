import React, { useState, useEffect, useRef } from "react";
import { scrollToTop, navigateTo } from "../components/utils/Constants";
import { ReactComponent as HomeIcon } from '../assets/svgs/HomeIcon.svg';
import { ReactComponent as MenuIcon } from '../assets/svgs/MenuIcon.svg';
import { ReactComponent as ExitIcon } from '../assets/svgs/ExitIcon.svg';
import { ReactComponent as DownArrowIcon } from '../assets/svgs/DownArrowIcon.svg';
import { ReactComponent as FacebookIcon } from "../assets/svgs/FacebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/InstagramIcon.svg";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
import { Link } from "react-router-dom";
import '../styles/components/Navbar.scss';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showWhatIsGlidingItems, setShowWhatIsGlidingItems] = useState(false);
    const [showLearningToGlideItems, setShowLearningToGlideItems] = useState(false);
    const [showMemberInformationItems, setShowMemberInformationItems] = useState(false);
    const navbarRef = useRef(null);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        setShowWhatIsGlidingItems(false);
        setShowLearningToGlideItems(false);
        setShowMemberInformationItems(false);
    };

    const handleMenuClick = () => {
        setShowNavbar(false);
        navigateTo();
        setShowWhatIsGlidingItems(false);
        setShowLearningToGlideItems(false);
        setShowMemberInformationItems(false);
    };

    // Prevents all dropdown elements from being opened at once when a user clicks a menu item. 
    const toggleGlidingDropdown = () => {
        setShowWhatIsGlidingItems(!showWhatIsGlidingItems);
        setShowLearningToGlideItems(false);
        setShowMemberInformationItems(false);        
    }
    
    const toggleLearningDropdown = () => {
        setShowLearningToGlideItems(!showLearningToGlideItems);
        setShowWhatIsGlidingItems(false);
        setShowMemberInformationItems(false);        
    }
    
    const toggleMemberDropdown = () => {
        setShowMemberInformationItems(!showMemberInformationItems);
        setShowWhatIsGlidingItems(false);
        setShowLearningToGlideItems(false);
    }

    // Ensures dropdown elements are automatically closed when user clicks away.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current && !
                navbarRef.current.contains(event.target) &&
                !event.target.classList.contains("nav-items")
            ) {
                setShowNavbar(false);

                setShowWhatIsGlidingItems(false);
                setShowLearningToGlideItems(false);
                setShowMemberInformationItems(false);
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
                    className="brand"
                    onClick={scrollToTop}
                >
                    <div className="content">
                        <img
                            src="/assets/gliding-logo.png" 
                            alt="ICGC Logo"
                            className="logo"
                        />
                        <h1 className="header">Imperial College Gliding Club</h1>
                    </div>
                </Link>

                <div className="menu-btn" onClick={handleShowNavbar}>
                    <MenuIcon />
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div className="exit-btn" onClick={handleShowNavbar}>
                        <ExitIcon />
                    </div>
                    <ul className="nav-items">
                        <button>
                            <Link 
                                to="/" 
                                onClick={handleMenuClick}
                                className="nav-item"
                            >
                                <HomeIcon />
                            </Link>
                        </button>
                        <button>
                            <Link 
                                to="/faqs" 
                                onClick={handleMenuClick}
                                className="nav-item"
                            >
                                FAQs
                            </Link>
                        </button>
                        <li>
                            <button 
                                onClick={toggleGlidingDropdown}  
                                className="nav-item"
                            >
                                What is gliding? <DownArrowIcon />
                            </button>
                            {showWhatIsGlidingItems && (
                                <div className="dropdown">
                                    <Link
                                        to="/whatisgliding/introduction"
                                        onClick={handleMenuClick}
                                        className="dropdown-item"
                                    >
                                        What's gliding?
                                    </Link>
                                    <Link
                                        to="/whatisgliding/soaring"
                                        onClick={handleMenuClick}
                                        className="dropdown-item"
                                    >
                                        Soaring
                                    </Link>
                                    <Link
                                        to="/whatisgliding/cross-country"
                                        onClick={handleMenuClick}
                                        className="dropdown-item"
                                    >
                                        Cross-country gliding and comps
                                    </Link>
                                    <Link
                                        to="/whatisgliding/aerobatics"
                                        onClick={handleMenuClick}
                                        className="dropdown-item"
                                    >
                                        Aerobatics
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <button 
                                onClick={toggleLearningDropdown}  
                                className="nav-item"
                            >
                                Learning to glide <DownArrowIcon />
                            </button>
                            {showLearningToGlideItems && (
                                <div className="dropdown">
                                    <Link 
                                        to="/learningtoglide/join" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-item"
                                    >
                                        Learn how to glide
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/location" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-item"
                                    >
                                        Where do we fly?
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/first-trip" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-item"
                                    >
                                        First trip
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/pre-solo-training" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-item"
                                    >
                                        Pre solo training
                                    </Link>
                                    <Link 
                                        to="/learningtoglide/post-solo-progression" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-item"
                                    >
                                        Post solo progression
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <button 
                                onClick={toggleMemberDropdown}  
                                className="nav-item"
                            >
                                Member information <DownArrowIcon />
                            </button>
                            {showMemberInformationItems && (
                                <div className="dropdown">
                                    <Link 
                                        to="/memberinformation/fleet-and-costs" 
                                        onClick={handleMenuClick} 
                                        className="dropdown-item"
                                    >
                                        Fleet and costs
                                    </Link>
                                </div>
                            )}
                        </li>
                        <button>
                            <Link 
                                to="/gallery" 
                                onClick={handleMenuClick} 
                                className="nav-item"
                            >
                                Gallery
                            </Link>
                        </button>
                    </ul>
                    <div className="social-btns">
                        <a href="https://www.instagram.com/icgliding/" 
                            target="blank"
                            className="spacing"
                        >
                            <InstagramIcon />                   
                        </a>  
                        <a href="https://www.facebook.com/ImperialCollegeGlidingClub/"
                            target="blank"
                            className="spacing"
                        >
                            <FacebookIcon />
                        </a>
                        <a href="mailto:gliding@imperial.ac.uk" 
                            target="blank"
                        >
                            <MailIcon />
                        </a> 
                    </div>
                </div>
            </div>
        </nav>
    );
}