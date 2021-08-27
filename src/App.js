import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';

function App() {
  const renderRoutes = routes => {
    return routes.map(route => {
      const { path, component, exact } = route;
      return (
        <Route 
          path={path} 
          component={component} 
          exact={exact} 
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {renderRoutes(clientRoutes)}
          {/* {renderRoutes(adminRoutes)} */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
