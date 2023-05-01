import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { ContactPlus } from "./components/ContactPlus";

import { Route, Redirect, Switch, useLocation } from "react-router-dom";

/* Navbar or First Switch as default value */

const App = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query.get(""));
  return (
    <div>
      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>
      {/* <Navbar /> */}
      <Switch>
        <Route path={"/"} exact component={Navbar} />
        <Route path={"/Home"} component={Navbar} />
        <Route path={"/Home/:id"} component={Navbar} />
        <Route path={"/Contact"} component={Navbar} />
        <Route path={"/About"} component={Navbar} />
        <Route path={"/Info"} component={Navbar} />
        {/* <Route path={"*"} component={Navbar} /> */}
      </Switch>

      <Switch>
        {/* Second Switch */}
        <Route path={"/"} exact component={Home} />
        <Route exact path={"/Home"} component={Home} />
        <Route exact path={"/Home/:id"} component={Home} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/Contact/plus"} component={ContactPlus} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Info"} component={Info} />
        {/* "Not Found page" shows in every link without Switch */}
        <Route path={"*"}>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
