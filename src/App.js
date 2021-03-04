import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";
import Content from "./containers/Content/Content";
import Navbar from "./components/NavBar/Navbar";
import UxComponent from "./components/NavBar/UxComponent/UxComponent";
import FrameworkElement from "./components/NavBar/FrameWorkElement/FrameworkElement";
import Library from "./components/NavBar/Librariess/Library";

function App() {
  return (
    <div className="Header">
      <Sidebar />
      <Header />
      <Switch>
        <Route path="/services" component={Content} />
        <Route path="/ux" component={UxComponent} />
        <Route path="/framework" component={FrameworkElement} />
        <Route path="/libraries" component={Library} />
        <Route path="/" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
