import React from "react";
import "./App.css";
import Cards from "./Components/Cards";
import { connect } from "react-redux";
import MyModal from "./Components/MyModal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagedescp from "./Components/Pagedescp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/details/:id" component={Pagedescp} />
          {/* <Route exact path='/Home' component={Cards}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(App);
