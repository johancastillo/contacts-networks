import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import ContactProfile from './pages/contact-profile/ContactProfile';
import Home from './pages/home/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-profile" component={ContactProfile} />
        <Route exact path="/create-contact" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
