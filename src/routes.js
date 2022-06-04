import { BrowserRouter, Route, Routes as Rotas } from "react-router-dom"
import Sobre from './Sobre'
import App from "./App"
import Animals from './componentes/Animals'
import Header from "./Header"
import Footer from "./componentes/Footer"
import './header.css'

export const Routes = () => {
    return(
        <>
        
        <BrowserRouter>
        <Header/>
            <Rotas>
            <Route path = "/sobre" element = {<Sobre/>}/>
            <Route path = "/" element = {<App/>}/>
            <Route path = "/animais" element = {<Animals/>}/>
            </Rotas>
            <Footer/>
        </BrowserRouter>
        
        </>
)} 