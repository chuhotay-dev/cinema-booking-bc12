import About from 'containers/client/About/About';
import Home from 'containers/client/Home/Home';
import Review from 'containers/client/Review/Review';
import Theater from 'containers/client/Theater/Theater';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
          <Route path='/movie-detail/:movieId' component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
