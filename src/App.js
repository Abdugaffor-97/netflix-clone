import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./components/Main";
import AccountPage from "./components/Account";
import PaymentPage from "./components/Payment";
import { Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={MainPage} exact />
        <Route path="/account" component={AccountPage} exact />
        <Route path="/payment" component={PaymentPage} exact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
