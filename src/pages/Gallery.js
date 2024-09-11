import { data } from "../website-data/gallery/images";
import Decade from "../components/Decade";
import '../styles/components/gallery.scss';

export default function Gallery() {
    return (
        <div className="decades">
            <h1 className="header">Gallery</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <Decade images={item.images} decade={item.decade} />
                    {item.caption && (
                        <div className="caption">{item.caption}</div>
                    )}
                </div>
            ))}
            <div className="caption">
                To view more images and discover further about our club’s history, check out <a href="google" target="blank">the Archive</a>.
            </div>
        </div>
    );
}
