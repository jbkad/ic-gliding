import TwoThousandsImages from "./gallery/ThousandsTenImages";
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