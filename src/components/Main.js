import React from "react";
import { Zoom } from 'react-slideshow-image';
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

const images = [img1, img2, img3, img4, img5];
const photos = [photo1, photo2, photo3, photo4, photo5, photo6,  photo7, photo8, photo9];
const Main = ()=>{
    return (
        <main className="page-main">
            <div className="container">
                <div className="row">
                    <div className="col-12-12">
                        <div className="box1">
                            <img src="images/photo1.jpeg" alt="home1" className="box-image"/>
                            <div className="box-title1">Twój nowy dom od 360.000 zł</div>
                            <h2 className="box-title">Twój nowy dom od 360.000 zł</h2>
                            <div className="box-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores ipsum
                                laboriosam mollitia nihil omnis possimus repellendus. Ab aut consequatur dignissimos
                                dolores dolorum, expedita illo incidunt natus nulla officiis perferendis quae
                                quibusdam, repellendus similique temporibus totam voluptate voluptatem? Aliquam
                                dicta exercitationem fugit illo iure labore laboriosam nostrum qui sunt
                                voluptatibus.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6-12">
                        <div className="box">
                            <Slideshowmini className="box-image"/>
                            <h3 className="box-title">Przykładowa aranżacja wnętrza</h3>
                            <div className="box-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores ipsum
                                laboriosam mollitia nihil omnis possimus repellendus. Ab aut consequatur dignissimos
                                dolores dolorum, expedita illo incidunt natus nulla officiis perferendis quae
                                quibusdam, repellendus similique temporibus totam voluptate voluptatem? Aliquam
                                dicta exercitationem fugit illo iure labore laboriosam nostrum qui sunt
                                voluptatibus.
                            </div>
                        </div>
                    </div>
                    <div className="col-6-12">
                        <div className="box">
                            <img src="images/photo3.jpeg" alt="home3" className="box-image"/>
                            <h4 className="box-title">Zamieszkaj w Tulcach przy ulicy Krótkiej!</h4>
                            <div className="box-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores ipsum
                                laboriosam mollitia nihil omnis possimus repellendus. Ab aut consequatur dignissimos
                                dolores dolorum, expedita illo incidunt natus nulla officiis perferendis quae
                                quibusdam, repellendus similique temporibus totam voluptate voluptatem? Aliquam
                                dicta exercitationem fugit illo iure labore laboriosam nostrum qui sunt
                                voluptatibus.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12-12">
                        <div className="box1">
                            <Slideshow className="box-image"/>
                            <h5 className="box-title">Twój nowy dom od 360.000 zł</h5>
                            <div className="box-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores ipsum
                                laboriosam mollitia nihil omnis possimus repellendus. Ab aut consequatur dignissimos
                                dolores dolorum, expedita illo incidunt natus nulla officiis perferendis quae
                                quibusdam, repellendus similique temporibus totam voluptate voluptatem? Aliquam
                                dicta exercitationem fugit illo iure labore laboriosam nostrum qui sunt
                                voluptatibus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};
const Slideshow = () => {
    return (
        <Zoom {...zoomOutProperties}>
            {
                images.map((each, index) => <img alt="slideshow" key={index} style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
const Slideshowmini = () => {
    return (
        <Zoom {...zoomOutProperties}>
            {
                photos.map((each, index) => <img alt="slideshow2" key={index} style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
export default Main