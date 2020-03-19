import React from "react";
const Offer = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-12-12">
                    <div className="box">
                        <h2 className="box-title">Nasza aktualna oferta:<br />
                            1. Szeregowce w Tulcach na ulicy Krótkiej</h2>
                        <div className="box-content1">
                            <div className="video-wrapper">
                                <div className="video">
                                    <iframe className="iframe" title="video1" width="1280" height="675" src="https://www.youtube.com/embed/FdaJtkbCGtA?rel=0&amp;loop=1&amp;autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </div>
                            Skontaktuj się z nami<br />
                            Rafał Matyjaszczyk tel. 607 065 112<br />
                            Mirosław Biernacki tel. 609 800 993<br />
                            Adres e-mail: <br />
                            <a className="link" href="mailto:kontakt.rmdevelopment@gmail.com">kontakt.rmdevelopment@gmail.com</a><br />
                            <br />
                            ZOBACZ LOKALIZACJĘ INWESTYCJI NA MAPIE:<br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12-12">
                    <div className="box">
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
export default Offer