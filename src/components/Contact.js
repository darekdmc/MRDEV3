import React from "react";

const Contact = ()=>{
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12-12">
                        <div className="box">
                            <h2 className="box-title">Kontakt z nami:</h2>
                            <div className="box-content1">
                                Adres siedziby / biura sprzedaży:<br />
                                M&R DEVELOPMENT SP. Z O. O.<br />
                                NIP: 7773349949<br />
                                ul. Kasztanowa 7<br />
                                63-004 Tulce<br />
                                <br />
                                Osoby do kontaktu: <br />
                                Rafał Matyjaszczyk tel. 607 065 112<br />
                                Mirosław Biernacki tel. 609 800 993<br />
                                Adres e-mail: <br />
                                <a className="link" href="mailto:kontakt.rmdevelopment@gmail.com">kontakt.rmdevelopment@gmail.com</a>
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
export default Contact