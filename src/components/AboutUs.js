import React from "react";
import mainphoto3 from "../img/photo3.jpeg";
const AboutUs = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-12-12">
                    <div className="about-us-cover">
                        <h5 className="box-title">O nas:</h5>
                        <div className="box-content-about">
                            W naszej działalności łączymy doświadczenie z praktycznym i estetycznym podejściem do procesu budowlanego,<br />
                            dzięki czemu oferujemy naszym klientom ładne, przemyślane pod względem projektowym, <br />
                            a przede wszystkim funkcjonalne nieruchomości o wysokiej jakości wykonania. <br />
                            Każdy z naszych projektów mieszkaniowych cechuje indywidualne podejście do realizacji.<br />
                            Z największą starannością nadzorujemy cały proces inwestycyjny: od zakupu gruntu, przez projektowanie,<br />
                            realizację, po zagospodarowanie terenu oraz obsługę procesu sprzedażowego.<br />
                            Podejmując kolejne wyzwania inwestycyjne bazujemy na wieloletnim doświadczeniu deweloperskim naszej kadry<br />
                            oraz dokładamy wszelkich starań by odpowiedzieć na oczekiwania naszych Klientów.
                        </div>
                        <div className="about-us-photo">
                            <img src={mainphoto3} alt="drawing" width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutUs