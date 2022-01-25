import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import SignInPage from './pages/authentication/signin';
import SignUpPage from './pages/authentication/signup';

function App() {
  return (
    <Router basename="/proid-tourism-marina-bay">
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignInPage} exact />
            <Route path="/signup" component={SignUpPage} exact />
        </Switch>
    </Router>
  );
}

export default App;
