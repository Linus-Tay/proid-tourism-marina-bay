import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import SignInPage from './pages/authentication/signin';

function App() {
  return (
    <Router basename="/proid-tourism-marina-bay">
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignInPage} exact />
        </Switch>
    </Router>
  );
}

export default App;
