import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './views/home';
import Error404 from './views/error404';
import Navbar from './components/navbar';
import  Footer  from './components/footer';

const App= ()=>{
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;