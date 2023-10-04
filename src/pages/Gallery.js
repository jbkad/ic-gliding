import TwoThousandsImages from "../components/gallery/ThousandsTenImages";
import ThousandsImages from "../components/gallery/ThousandsImages";
import NinetiesImages from "../components/gallery/NinetiesImages";
import EightiesImages from "../components/gallery/EightiesImages";
import SeventiesImages from "../components/gallery/SeventiesImages";
import SixtiesImages from "../components/gallery/SixtiesImages";
import FiftiesImages from "../components/gallery/FiftiesImages";
import FortiesImages from "../components/gallery/FortiesImages";
import ThirtiesImages from "../components/gallery/ThirtiesImages";
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
            
            <div className="archive-caption">To view more images and discover further about our clubs history, check out {" "}
                <a
                    href="https://www.icgcarchive.co.uk/index.php"
                    target="blank"
                >
                    icGC Archive
                </a>.
            </div>

        </div>
    );
}