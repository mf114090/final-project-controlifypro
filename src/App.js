import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './views/home'
import Error404 from './views/error404'

const App= ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;