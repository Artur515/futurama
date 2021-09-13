import './App.css';
import Menu from "./components/menu/Menu";
import { Route, Switch} from "react-router-dom";
import Greeting from "./components/greeting/Greeting";
import Wrapper from "./components/wrapper/Wrapper";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <Greeting/>
                </Route>
                <Route  path='/futurama'>
                    <Menu/>
                </Route>
            </Switch>
            <Wrapper/>
        </div>
    );
}

export default App;
