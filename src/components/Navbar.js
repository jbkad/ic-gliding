import React, { useState, useEffect, useRef } from "react";
import { scrollToTop, navigateTo } from "../components/utils/Constants";
import { ReactComponent as HomeIcon } from '../assets/svgs/HomeIcon.svg';
import { ReactComponent as MenuIcon } from '../assets/svgs/MenuIcon.svg';
import { ReactComponent as ArrowIcon } from '../assets/svgs/chevron-down.svg';
import { ReactComponent as MetaIcon } from "../assets/svgs/MetaIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/InstagramIcon.svg";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
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
                    <MenuIcon />
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div className="br">
                        <div className="nav-items">
                            <button>
                                <Link 
                                    to="/" 
                                    onClick={handleMenuClick}
                                    className="nav-item"
                                    aria-label="Home"
                                >
                                    <HomeIcon />
                                </Link>
                            </button>
                            <button>
                                <Link 
                                    to="/faqs" 
                                    onClick={handleMenuClick}
                                    className="nav-item"
                                    aria-label="Frequently asked questions"
                                >
                                    FAQs
                                </Link>
                            </button>
                            <li>
                                <button 
                                    onClick={toggleGlidingDropdown}  
                                    className="nav-item"
                                    aria-label="What is gliding?"
                                >
                                    What is gliding? <ArrowIcon />
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
                            </li>
                            <li>
                                <button 
                                    onClick={toggleLearningDropdown}  
                                    className="nav-item"
                                    aria-label="Learning to glide"

                                >
                                    Learning to glide <ArrowIcon />
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
                            </li>
                            <li>
                                <button 
                                    onClick={toggleMemberDropdown}  
                                    className="nav-item"
                                    aria-label="Member information"
                                >
                                    Member information <ArrowIcon />
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
                            </li>
                            <button>
                                <Link 
                                    to="/gallery" 
                                    onClick={handleMenuClick} 
                                    className="nav-item"
                                    aria-label="Gallery"
                                >
                                    Gallery
                                </Link>
                            </button>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/icgliding/" 
                                target="blank"
                                className="link"
                                aria-label="Instagram"
                            >
                                <InstagramIcon />                   
                                <span>Instagram</span>
                            </a>  
                            <a href="https://www.facebook.com/ImperialCollegeGlidingClub/"
                                target="blank"
                                className="link"
                                aria-label="Meta"
                            >
                                <MetaIcon />
                                <span>Meta</span>

                            </a>
                            <a href="mailto:gliding@imperial.ac.uk" 
                                target="blank"
                                className="link"
                                aria-label="Email"
                            >
                                <MailIcon />
                                <span>E-mail</span>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}