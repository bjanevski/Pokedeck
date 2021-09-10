import "./App.css";
import FetchPoke from "./components/FetchPoke";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePoke from "./components/SinglePoke";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={FetchPoke}></Route>
        <Route exact path="/poke/:slug" component={SinglePoke}></Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
