import { BrowserRouter, Route, Routes as Rotas } from "react-router-dom"
import Sobre from './Sobre'
import App from "./App"
import Animals from './componentes/Animals'

export const Routes = () => {
    return(
        <BrowserRouter>
            <Rotas>
            <Route path = "/sobre" element = {<Sobre/>}/>
            <Route path = "/" element = {<App/>}/>
            <Route path = "/animais" element = {<Animals/>}/>
            </Rotas>
        </BrowserRouter>
)} 