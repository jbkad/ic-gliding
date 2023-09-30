import React, { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import TwoThousandsImages from "./gallery/TwoThousandsImages";
import ThousandsImages from "./gallery/ThousandsImages";
import NinetiesImages from "./gallery/NinetiesImages";
import EightiesImages from "./gallery/EightiesImages";
import SeventiesImages from "./gallery/SeventiesImages";
import SixtiesImages from "./gallery/SixtiesImages";
import FiftiesImages from "./gallery/FiftiesImages";
import FortiesImages from "./gallery/FortiesImages";
import ThirtiesImages from "./gallery/ThirtiesImages";

import '../styles/Gallery.css';

export default function Gallery() {
    // const [showNavbar, setShowNavbar] = useState(false);

    // const [showModal, setShowModal] = useState(false);
    // const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const dateItems = [
        // { label: "'90 - '99", offset: 80 },
        // { label: "'80 - '89", offset: 200 },
        // { label: "'70 - '79", offset: 200 },
        // { label: "'60 - '69", offset: 600 },
        // { label: "'50 - '59", offset: 800 },
        // { label: "'40 - '49", offset: 1000 },
        // { label: "'30 - '39", offset: 1200 },
    ];

    return (
        <div id="gliding-gallery" className="gliding-gallery">
            <h1>Gallery</h1>
            <TwoThousandsImages />
            <ThousandsImages />
            <NinetiesImages />
            <EightiesImages />
            <SeventiesImages />
            <SixtiesImages />
            <FiftiesImages />
            <FortiesImages />
            <ThirtiesImages />
        </div>
    );
}