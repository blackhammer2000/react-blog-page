import Header from "./components/js/Header";
import NewsHeader from "./components/js/News-header";
import Blogs from "./components/js/Blogs";
import Footer from "./components/js/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Createblog from "./components/js/Createblog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NewsHeader />
        <div className="content container-fluid">
          <Switch>
            <Route exact path="/">
              <Blogs />
            </Route>
            <Route path="/create">
              <Createblog />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
