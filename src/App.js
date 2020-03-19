import React from 'react';
import Main from "./components/Main"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import NotFound from "./components/NotFound"
import Offer from "./components/Offer"
import {Route,HashRouter as Router,Switch,NavLink} from "react-router-dom"

const activeStyle = {
    fontWeight: "bold"
};
const Navigation = ()=>{
    return (
        <>
            <ul className="main-nav-list" id="menu">
                <li><NavLink activeStyle={activeStyle} exact to="/" >Strona główna</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/offer" >Oferta</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/about" >O nas</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/gallery" >Galeria</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/contact" >Kontakt</NavLink></li>
            </ul>
        </>
    )
};

class Button extends React.Component {

    handleClick(e){
        const menu = document.querySelector('.main-nav-list');
        menu.classList.toggle('show');
    }
    render() {
        return (
            <button onClick={e => this.handleClick(e)} className="main-nav-toggle" aria-label="Pokaż menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        )
    }
}
const App = () => (
    <div>
        <Router>
            <header className="page-header">
                <h1 className="main-logo">
                    <a href="http://www.m-rdevelopment.pl">
                        <img src="images/logo.png" width="248" height="68" alt="Logo"/>
                    </a>
                </h1>
                <div className="main-nav">
                    <Navigation/>
                    <Button />
                </div>
            </header>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/offer" component={Offer} />
                <Route path="/about" component={AboutUs} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />

                <Route component={NotFound} />
            </Switch>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-6-12">
                            <div className="box">
                                <div className="box-content">
                                    <div className="fb-logo">
                                        <a href="https://www.facebook.com/RM-Development-108325960601591/">
                                            <img src="images/facebook.png" width="38" height="38" alt="FBlogo"/>
                                        </a>
                                    </div>
                                    tel. 607 065 112 <br />tel. 609 800 993
                                </div>
                            </div>
                        </div>
                        <div className="col-6-12">
                            <div className="box">
                                <div className="footer-content">
                                    2020 M&R DEVELOPMENT &nbsp;&nbsp;&nbsp;&nbsp;DESIGN BY:&nbsp;&nbsp;
                                    <a href="https://github.com/darekdmc">
                                        <img src="images/git.png" width="18" height="18" alt="gitlogo"/>
                                    </a>
                                    <a className="link2" href="mailto:darekdmc@gmail.com">&nbsp;&nbsp;darekdmc@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Router>
    </div>
);
export default App;