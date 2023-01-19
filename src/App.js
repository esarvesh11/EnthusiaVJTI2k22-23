import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Team_MNC from "./pages/Team_MNC";
import Marathon from "./pages/Marathon";
import Valorant from "./pages/Valorant";
import BGMI from "./pages/BGMI";
import Chess_online from "./pages/Chess_online";
import Football from "./pages/Football";
import Basketball from "./pages/Basketball";
import Athletics from "./pages/Athletics";
import Cricket from "./pages/Cricket";
import Throwball from "./pages/Throwball";
import Volleyball from "./pages/Volleyball";
import Khokho from "./pages/Khokho";
import Kabadi from "./pages/Kabadi";
import Swmming from "./pages/Swmming";
import Tabletennis from "./pages/Tabletennis";
import Chess from "./pages/Chess";
import Carrom from "./pages/Carrom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/team" component={Team} />
          <Route path="/team_mnc" component={Team_MNC} />
          <Route path="/marathon" component={Marathon} />
          <Route path="/valorant" component={Valorant} />
          <Route path="/bgmi" component={BGMI} />
          <Route path="/online-chess" component={Chess_online} />
          <Route path="/football" component={Football} />
          <Route path="/basketball" component={Basketball} />
          <Route path="/cricket" component={Cricket} />
          <Route path="/throwball" component={Throwball} />
          <Route path="/volleyball" component={Volleyball} />
          <Route path="/khokho" component={Khokho} />
          <Route path="/kabadi" component={Kabadi} />
          <Route path="/swmming" component={Swmming} />
          <Route path="/tabletennis" component={Tabletennis} />
          <Route path="/chess" component={Chess} />
          <Route path="/carrom" component={Carrom} />
          <Route path="/athletics" component={Athletics} />
          <Route path="/Gallery" component={Gallery} />

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
