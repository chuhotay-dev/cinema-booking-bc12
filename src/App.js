import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
import ClientLayout from 'layouts/ClientLayout';

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map(route => {
      const { path, component, exact } = route;
      return (
        <Layout 
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
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          {/* {renderLayout(adminRoutes, AdminLayour)} */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
