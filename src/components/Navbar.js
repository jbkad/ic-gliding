import React, { useState, useEffect, useRef } from "react";
import { scrollToTop, navigateTo } from "../components/utils/Constants";
import { home_svg, menu_svg, arrow_svg, instagram_svg, facebook_svg, mail_svg } from "../assets/svgs/navbar";
import { Link } from "react-router-dom";
import '../styles/components/navbar.scss';

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
    
    return (
        <nav className={`navbar ${showNavbar ? 'active' : ''}`} ref={navbarRef}>
            <div className="container">
                <Link 
                    to="/" 
                    className="brand"
                    onClick={scrollToTop}
                >
                    <div className="container">
                        <img
                            src={require("../assets/icgc.png")} 
                            alt="Gliding club logo"
                            className="logo"
                        />
                        <h3 className="heading">Imperial College Gliding Club</h3>
                    </div>
                </Link>
                <div className="menu-btn" onClick={handleShowNavbar}>
                    {menu_svg}
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div className="br">
                        <div className="nav-items">
                            <Link 
                                to="/" 
                                onClick={handleMenuClick}
                                className="nav-item"
                                aria-label="Home"
                            >
                                {home_svg}
                            </Link>
                            <Link 
                                to="/faqs" 
                                onClick={handleMenuClick}
                                className="nav-item"
                                aria-label="Frequently asked questions"
                            >
                                FAQs
                            </Link>
                            <div>
                                <button 
                                    onClick={toggleGlidingDropdown}  
                                    className="nav-item"
                                    aria-label="What is gliding?"
                                >
                                    What is gliding? {arrow_svg}
                                </button>
                                {showWhatIsGlidingItems && (
                                    <div className="dropdown">
                                        <Link
                                            to="/whatisgliding/introduction"
                                            onClick={handleMenuClick}
                                            className="item"
                                            aria-label="What is gliding?"
                                        >
                                            What is gliding?
                                        </Link>
                                        <Link
                                            to="/whatisgliding/soaring"
                                            onClick={handleMenuClick}
                                            className="item"
                                            aria-label="Soaring"
                                        >
                                            Soaring
                                        </Link>
                                        <Link
                                            to="/whatisgliding/cross-country"
                                            onClick={handleMenuClick}
                                            className="item"
                                            aria-label="Cross-country gliding and competitions"
                                        >
                                            Cross-country gliding and competitions
                                        </Link>
                                        <Link
                                            to="/whatisgliding/aerobatics"
                                            onClick={handleMenuClick}
                                            className="item"
                                            aria-label="Aerobatics"
                                        >
                                            Aerobatics
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button 
                                    onClick={toggleLearningDropdown}  
                                    className="nav-item"
                                    aria-label="Learning to glide"

                                >
                                    Learning to glide {arrow_svg}
                                </button>
                                {showLearningToGlideItems && (
                                    <div className="dropdown">
                                        <Link 
                                            to="/learningtoglide/join" 
                                            onClick={handleMenuClick} 
                                            className="item"
                                            aria-label="Learn how to glide"
                                        >
                                            Learn how to glide
                                        </Link>
                                        <Link 
                                            to="/learningtoglide/location" 
                                            onClick={handleMenuClick} 
                                            className="item"
                                            aria-label="Where do we fly?"
                                        >
                                            Where do we fly?
                                        </Link>
                                        <Link 
                                            to="/learningtoglide/first-trip" 
                                            onClick={handleMenuClick} 
                                            className="item"
                                            aria-label="First trip"
                                        >
                                            First trip
                                        </Link>
                                        <Link 
                                            to="/learningtoglide/pre-solo-training" 
                                            onClick={handleMenuClick} 
                                            className="item"
                                            aria-label="Pre solo training"
                                        >
                                            Pre solo training
                                        </Link>
                                        <Link 
                                            to="/learningtoglide/post-solo-progression" 
                                            onClick={handleMenuClick} 
                                            className="item"
                                            aria-label="Post solo progression"
                                        >
                                            Post solo progression
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button 
                                    onClick={toggleMemberDropdown}  
                                    className="nav-item"
                                    aria-label="Member information"
                                >
                                    Member information {arrow_svg}
                                </button>
                                {showMemberInformationItems && (
                                    <div className="dropdown">
                                        <Link 
                                            to="/memberinformation/fleet-and-costs" 
                                            onClick={handleMenuClick} 
                                            className="item"
                                            aria-label="Fleet and costs"
                                        >
                                            Fleet and costs
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link 
                                to="/gallery" 
                                onClick={handleMenuClick} 
                                className="nav-item"
                                aria-label="Gallery"
                            >
                                Gallery
                            </Link>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/icgliding/" 
                                target="blank"
                                className="link"
                                aria-label="Instagram"
                            >
                                {instagram_svg} <span>Instagram</span>
                            </a>  
                            <a href="https://www.facebook.com/ImperialCollegeGlidingClub/"
                                target="blank"
                                className="link"
                                aria-label="Meta"
                            >
                                {facebook_svg} <span>Facebook</span>

                            </a>
                            <a href="mailto:gliding@imperial.ac.uk" 
                                target="blank"
                                className="link"
                                aria-label="Email"
                            >
                                {mail_svg} <span>E-mail</span>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}