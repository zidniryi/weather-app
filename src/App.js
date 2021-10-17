import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home.js/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </main>
  );
}

export default App;
