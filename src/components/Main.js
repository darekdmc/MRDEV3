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
import mainphoto1 from"../img/photo1.jpeg"
import mainphoto3 from"../img/photo3.jpeg"

const images = [img1, img2, img3, img4, img5];
const photos = [photo1, photo2, photo3, photo4, photo5, photo6,  photo7, photo8, photo9];
const Main = ()=>{
    return (
        <main className="page-main">
            <div className="container">
                <div className="row">
                    <div className="col-12-12">
                        <div className="box1">
                            <div className="wrapper">
                                <div className="loading">
                                    <div className="blobBody"/>
                                </div>
                            </div>
                            <div className="wrapper2">
                            <img src={mainphoto1} alt="home1" className="box-image"/>
                            <div className="box-title1">Twój nowy dom od 360.000 zł</div>
                            </div>
                            <h2 className="box-title">Nowe mieszkania w stanie deweloperskim</h2>
                            <div className="box-content1">
                                W M&R DEVELOPMENT otrzymasz nowoczesne domy w stanie deweloperskim niedaleko Poznania wybudowane w najwyższym standardzie.<br />
                                Nasze domy to kwintesencja piękna, funkcjonalności i wygody. Domy typu szeregowce to obecnie jedne z lepszych rozwiązań architektonicznych.<br />
                                Są idealne dla osób ceniących sobie spokój życia we własnych czterech ścianach, niekoniecznie rezygnując z tworzenia sąsiedzkich więzi i poczucia bezpieczeństwa.<br />
                                Szeregowce zapewniają przyjemność z życia w domu jednorodzinnym, jednocześnie będąc blisko centrum miasta, do którego z łatwością można się dostać.<br />
                                Chcesz podarować swojej rodzinie BEZPIECZEŃSTWO oraz tradycyjność połączoną z nowoczesnością?<br />
                                M&R DEVELOPMENT może Ci w tym pomóc – nowe domy na sprzedaż naszego autorstwa z pewnością zaspokoją wszystkie potrzeby Twoje i Twojej rodziny!<br />
                                Nie czekaj – sprawdź naszą ofertę i wybierz swój wymarzony dom! Domy szeregowe znajdują w atrakcyjnej lokalizacji - Tulce – gmina Kleszczewo okolice Poznania!<br />
                                Taka szansa zdarza się raz, dlatego zobacz nasze mieszkania w szeregowcu już dziś! Zanim inni zrobią to przed Tobą!
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
                                Domy z rynku pierwotnego to inwestycja, która się zwróci przede wszystkim wysokim komfortem życia.
                                Wiele firm podobnie jak nasza oferuje za dopłatą gotowe do mieszkania domy „pod klucz”, które już są w pełni wyposażone w meble i sprzęt.
                                Jest to ogromna oszczędność czasu i pieniędzy, dlatego tak często poleca się je młodym rodzinom,
                                które dopiero będą sobie układały wspólne, stabilne życie.
                            </div>
                        </div>
                    </div>
                    <div className="col-6-12">
                        <div className="box">
                            <img src={mainphoto3} alt="home3" className="box-image"/>
                            <h4 className="box-title">Zamieszkaj w Tulcach przy ulicy Krótkiej!</h4>
                            <div className="box-content">
                                W M&R DEVELOPMENT szczególną uwagę przykuwamy do lokalizacji swoich domów na sprzedaż.
                                Domy w stanie deweloperskim znajdują się na peryferiach miasta - okolice Poznania,
                                gminy Kleszczewo - w pięknej, zielonej okolicy, z dala od miejskiego zgiełku
                                i natłoku samochodów za oknem.
                                Są to prestiżowe dzielnice, które jednocześnie zapewniają spokój i wygodną komunikację.
                                Domy z rynku pierwotnego to również niższe koszty transakcji.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12-12">
                        <div className="box1">
                            <Slideshow className="box-image"/>
                            <h5 className="box-title">Twój nowy dom u nas już od 360.000 zł</h5>
                            <div className="box-content">
                                W M&R DEVELOPMENT oddajemy domy w stanie deweloperskim.
                                Postawione przez nas osiedla mają podłączone wszystkie wymagane instalacje (elektryczna, grzewcza, wodno-sanitarna)
                                oraz wykonane tynki wraz z wylewkami. To korzystna inwestycja ze względu na niższe ceny zakupu mieszkania.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

const zoomOutProperties2 = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 1.4,
    arrows: false
};
const Slideshow = () => {
    return (
        <Zoom {...zoomOutProperties2}>
            {
                images.map((each, index) => <img alt="slideshow" key={index} className="big-slides" style={{width: "100%"}} src={each} />)
            }
        </Zoom>
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
const Slideshowmini = () => {
    return (
        <Zoom {...zoomOutProperties}>
            {
                photos.map((each, index) => <img alt="slideshow2" key={index} className="half-slides" style={{width: "100%"}} src={each} />)
            }
        </Zoom>
    )
};
export default Main