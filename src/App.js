import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import MainSection from "./components/Main";
import AccountPage from "./components/Account";
import PaymentPage from "./components/Payment";
import Details from "./components/Details";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import TvShows from "./components/TvShows";
import Registration from "./components/Registration";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const updateSearchQuery = (query) => setSearchQuery(query);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar handleSearchQuery={updateSearchQuery} />
        <Route
          path="/"
          exact
          render={() => <MainSection searchQuery={searchQuery} />}
        />
        <Route path="/account" component={AccountPage} exact />
        <Route path="/series" component={TvShows} exact />
        <Route path="/payment" component={PaymentPage} exact />
        <Route path="/register" component={Registration} exact />
        <Route path="/details/:id" component={Details} exact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
