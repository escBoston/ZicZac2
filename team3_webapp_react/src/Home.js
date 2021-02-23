import { Transition } from 'react-transition-group';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route , HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Account from './Account';
import Products from './Products';
import Deals from './Deals';

function Home() {
  return (
    <div className="App">
    <Header />

    <Section1 />
    <Section2 />
    <Section3 />

    <Footer />

<BrowserRouter>
    <Switch>
    <Route path="/Deals" component={Deals} />
    <Route path="/Products" component={Products} />
    <Route path="/Account" component={Account} />
    </Switch>
</BrowserRouter>
    </div>


  );
}

export default Home;
