import React from "react";
import {Zoom} from "react-slideshow-image";

import img1 from "../img/elewacja1.jpg"
import img2 from "../img/elewacja2.jpg"
import img3 from "../img/elewacja3.jpg"
import img4 from "../img/elewacja4.jpg"
import img5 from "../img/elewacja5.jpg"
import photo1 from "../img/Widok 1.jpeg"
import photo2 from "../img/Widok 2.jpeg"
import photo3 from "../img/Widok 3.jpeg"
import photo4 from "../img/Widok 4.jpeg"
import photo5 from "../img/Widok 5.jpeg"
import photo6 from "../img/Widok 6.jpeg"
import photo7 from "../img/Widok 7.jpeg"
import photo8 from "../img/Widok 8.jpeg"
import photo9 from "../img/Widok 9.jpeg"
import p2 from "../img/2.jpg"
import p3 from "../img/3.jpg"
import p4 from "../img/4.jpg"
import p5 from "../img/5.jpg"
import p6 from "../img/6.jpg"
import p7 from "../img/7.jpg"
import p8 from "../img/8.jpg"
const gal = [photo1, photo2, photo3, photo4, photo5, photo6,  photo7, photo8, photo9, img1, img2, img3, img4, img5, p2, p3, p4, p5, p6, p7, p8];

const Gallery = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-12-12">
                    <div className="box">
                        <h6 className="box-title">Galeria:</h6>
                        <Slideshowg className="box-image"/>
                    </div>
                </div>
            </div>
        </div>

    )
};
const zoomOutProperties4 = {
    duration: 4000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    scale: 1.4,
    arrows: true
};
const Slideshowg = () => {
    return (
    <Zoom {...zoomOutProperties4}>
    {
        gal.map((each, index) => <img alt="slideshow3a" key={index} className="big-slides" style={{width: "100%"}} src={each} />)
    }
    </Zoom>
    )
};
export default Gallery