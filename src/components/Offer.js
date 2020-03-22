import React from "react";
import {Zoom} from "react-slideshow-image";
import sch1 from "../img/schemat1.png"
import sch2 from "../img/schemat2.png"
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
import mainelew6 from "../img/elew6.jpg"


const images = [img1, img2, img3, img4, img5];
const photos = [photo1, photo2, photo3, photo4, photo5, photo6,  photo7, photo8, photo9];
const schems = [sch1, sch2];
const floor = [p2, p3, p4, p5, p6, p7, p8];
const Offer = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-12-12">
                    <div className="box">
                        <h5 className="box-title">Nasza aktualna oferta:<br />
                            1. Szeregowce w Tulcach na ulicy Krótkiej</h5>
                        <div className="box-content-offer">Widok lokalizacji z drona:<br />
                            <br />
                            <div className="video-wrapper">
                                <div className="video">
                                    <iframe className="iframe" title="video1" width="1280" height="675" src="https://www.youtube.com/embed/FdaJtkbCGtA?rel=0&amp;loop=1&amp;autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </div>
                            DOMY W CENIE MIESZKANIA<br />
                            Ceny domów obejmują całą nieruchomość (dom + działka).<br />
                            Po uzyskaniu pozwolenia na użytkowanie i podziale geodezyjnym <br />
                            dla przedmiotowych nieruchomości zostaną założone nowe odrębne księgi wieczyste.<br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6-12">
                    <div className="box">
                        <img src={mainelew6} alt="elew6" className="box-image"/>
                        <h6 className="box-title">Zamieszkaj w Tulcach przy ulicy Krótkiej!</h6>
                        <div className="box-content">
                            W M&R DEVELOPMENT szczególną uwagę przykuwamy do lokalizacji swoich domów na sprzedaż.<br />
                            <br />
                            Domy w stanie deweloperskim znajdują się na peryferiach miasta - okolice Poznania,
                            gminy Kleszczewo - w pięknej, zielonej okolicy, z dala od miejskiego zgiełku
                            i natłoku samochodów za oknem.<br />
                            <br />
                            Są to prestiżowe dzielnice, które jednocześnie zapewniają spokój i wygodną komunikację.<br />
                            <br />
                            Domy z rynku pierwotnego to również niższe koszty transakcji.
                        </div>
                    </div>
                </div>
                <div className="col-6-12">
                    <div className="box">
                        <Slideshow3 className="box-image"/>
                        <div className="list-style-title">DOMY WYBUDOWANE ZOSTAŁY WEDŁUG NASTĘPUJĄCYCH PARAMETRÓW:</div>
                            <ul className="list-style">
                                <li className="li">- budynek murowany, niepodpiwniczony, dwukondygnacyjny z dachem stromym,</li>
                                <li className="li">- miejsce postojowe na działce,</li>
                                <li className="li">- ściany budynku konstrukcyjne z cegły ceramicznej (25cm),</li>
                                <li className="li">- schody żelbetonowe,</li>
                                <li className="li">- konstrukcja dachu: wiązary drewniane, dachówka ceramiczna w kolorze grafitowym,</li>
                                <li className="li">- okna PCV z roletami, szklenie 2 szybowe, parapety zewnętrzne z blachy,</li>
                                <li className="li">- drzwi zewnętrzne w kolorze grafitowym,</li>
                                <li className="li">- elewacja zewnętrzna: ściany zewnętrzne ocieplone 20-centymetrową warstwą styropianu,</li>
                                <li className="li">- ściany działowe wewnętrzne gr. 11 cm murowane z cegły ceramicznej, tynk gipsowy,</li>
                                <li className="li">- sufit na piętrze, ocieplony wełną i zabudowany płytą G/K,</li>
                                <li className="li">- posadzki cementowe, izolowane przeciwwilgociowo i cieplnie,</li>
                                <li className="li">- instalacja elektryczna - okablowanie wraz z osprzętem w kolorze białym z wykonaną rozdzielnią,</li>
                                <li className="li">- instalacja RTV-SAT, alarmowa, IT - okablowanie bez osprzętu,</li>
                                <li className="li">- instalacja WOD-KAN-CO-GAZ, kompletny system grzewczy,</li>
                                <li className="li">- przyłącza: woda miejska, prąd, gaz płynny, sieć kanalizacji sanitarnej,</li>
                                <li className="li">- zagospodarowanie terenu: opłotowanie ogrodu siatką parkową z obrzeżami trawnikowymi,</li>
                                <li className="li">- front wyłożony kostką brukową, z miejscem postojowym dla samochodu i chodnikiem wejściowym,</li>
                                <li className="li">- ogród: niwelacja terenu.</li>
                            </ul>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6-12">
                    <div className="box">
                        <Slideshowmini2 className="box-image"/>
                    </div>
                </div>
                <div className="col-6-12">
                    <div className="box">
                        <Slideshowel className="box-image"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12-12">
                    <div className="box">
                        <Slideshowfloor className="box-image"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12-12">
                    <div className="box">
                        <h6 className="box-title">Zobacz lokalizację inwestycji na mapie</h6>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe title="frame" width="100%" height="600px" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=Tulce%2C%20Kr%C3%B3tka&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const zoomOutProperties3 = {
    duration: 4000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    scale: 0.4,
    arrows: true
};
const zoomOutProperties4 = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 1.4,
    arrows: true
};
const Slideshow3 = () => {
    return (
        <Zoom {...zoomOutProperties3}>
            {
                schems.map((each, index) => <img alt="slideshow3" key={index} className="horizontal-slides" style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
const Slideshowmini2 = () => {
    return (
        <Zoom {...zoomOutProperties4}>
            {
                photos.map((each, index) => <img alt="slideshow2" key={index} className="half-slides" style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
const Slideshowel = () => {
    return (
        <Zoom {...zoomOutProperties3}>
            {
                images.map((each, index) => <img alt="slideshow" key={index} className="half-slides" style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
const Slideshowfloor = () => {
    return (
        <Zoom {...zoomOutProperties4}>
            {
                floor.map((each, index) => <img alt="slideshow3" key={index} className="big-slides" style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
export default Offer