import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";
import Content from "./containers/Content/Content";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="Header">
      <Sidebar />
      <Header />
      <Switch>
        <Route path="/services" component={Content} />
        <Route path="/" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
