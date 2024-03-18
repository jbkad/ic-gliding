import Decade2020s from "../components/gallery/Decade2020s";
import Decade2010s from "../components/gallery/Decade2010s";
import Decade2000s from "../components/gallery/Decade2000s";
import Decade1990s from "../components/gallery/Decade1990s";
import Decade1980s from "../components/gallery/Decade1980s";
import Decade1970s from "../components/gallery/Decade1970s";
import Decade1960s from "../components/gallery/Decade1960s";
import Decade1950s from "../components/gallery/Decade1950s";
import Decade1940s from "../components/gallery/Decade1940s";
import Decade1930s from "../components/gallery/Decade1930s";
import '../styles/components/Gallery.scss';

export default function Gallery() {

    return (
        <div id="gliding-gallery" className="gliding-gallery">
            <h1>Gallery</h1>
            <Decade2020s />
            <Decade2010s />
            <Decade2000s />
            <Decade1990s />
            <Decade1980s />
            <Decade1970s />
            <Decade1960s />
            <Decade1950s />
            <Decade1940s />
            <Decade1930s />
            
            <div 
                className="archive-caption"
            >
                To view more images and discover further about our clubs history, check out {" "}
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