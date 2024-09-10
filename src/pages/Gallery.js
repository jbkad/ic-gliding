import { images as img20s } from "../website-data/gallery/2020s";
import { images as img10s } from "../website-data/gallery/2010s";
import { images as img00s } from "../website-data/gallery/2000s";
import { images as img90s } from "../website-data/gallery/1990s";
import { images as img80s } from "../website-data/gallery/1980s";
import { images as img70s } from "../website-data/gallery/1970s";
import { images as img60s } from "../website-data/gallery/1960s";
import { images as img50s } from "../website-data/gallery/1950s";
import { images as img40s } from "../website-data/gallery/1940s";
import { images as img30s } from "../website-data/gallery/1930s";
import Decade from "../components/Decade";
import '../styles/components/gallery.scss';

export default function Gallery() {

    return (
        <div className="decades">
            <h1 className="header">Gallery</h1>
            <Decade images={img20s} decade="2020" />
            <Decade images={img10s} decade="2010" />
            <Decade images={img00s} decade="2000" />
            <div className="caption">New images coming soon!</div>
            <Decade images={img90s} decade="1990" />
            <Decade images={img80s} decade="1980" />
            <div className="caption">New images coming soon!</div>
            <Decade images={img70s} decade="1970" />
            <Decade images={img60s} decade="1960" />
            <Decade images={img50s} decade="1950" />
            <Decade images={img40s} decade="1940" />
            <Decade images={img30s} decade="1930" />
            <div className="caption">
                To view more images and discover further about our clubs history, check out {" "} <a href="https://www.icgcarchive.co.uk/index.php" target="blank">icGC Archive</a>.
            </div>
        </div>
    );
}