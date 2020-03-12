import React from 'react';
import {Route,HashRouter as Router,Switch,NavLink} from "react-router-dom"
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
                            <img src="images/photo2.jpeg" alt="home2" className="box-image"/>
                                <h2 className="box-title">Przykładowa aranżacja wnętrza</h2>
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
                                <h2 className="box-title">Zamieszkaj w Tulcach przy ulicy Krótkiej</h2>
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
const Offer = ()=>{
    return (
        <p>Oferta wkrótce </p>
    )
};
const AboutUs = ()=>{
    return (
        <p>Informacje na temat firmy </p>
    )
};
const Gallery = ()=>{
    return (
        <div>
            <h3>Galeria</h3>
        </div>
    )
};
const Contact = ()=>{
    return (
        <div>
            <h2>Kontakt</h2>
        </div>
    )
};
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
const NotFound = ()=>{
    return <h1>Błąd 404 - Nie znaleziono takiej strony</h1>
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
        
            </footer>
        </Router>
    </div>
);
export default App;