import { Header, Main } from './components';
import { Cases, Deaths, Vaccinations } from './pages';
import DataContextProvider from './context/DataContextProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <DataContextProvider>
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/cases" exact component={Cases} />
            <Route path="/vaccinations" exact component={Vaccinations} />
            <Route path="/deaths" exact component={Deaths} />
            <Route path="*" exact component={Main} />
          </Switch>

        </Router>       
               
      </DataContextProvider>
    </div>
  );
}

export default App;
