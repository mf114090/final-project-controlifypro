import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './views/home'
import ListadoActividades from './views/listado-actividades'
import Error404 from './views/error404'

const App= ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/listado-actividades">
                    <ListadoActividades />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;