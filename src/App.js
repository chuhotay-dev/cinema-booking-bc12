import About from 'containers/client/About/About';
import Home from 'containers/client/Home/Home';
import Review from 'containers/client/Review/Review';
import Theater from 'containers/client/Theater/Theater';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
