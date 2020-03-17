import React from "react";

const Contact = ()=>{
        return (
            <div>
                <h2>Kontakt</h2>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title="frame" width="100%" height="600px" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Tulce%2C%20Kr%C3%B3tka&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        )
};
export default Contact