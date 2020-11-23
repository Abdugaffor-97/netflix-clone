import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./components/Main";
import AccountPage from "./components/Account";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/account" component={AccountPage} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
