import SobreNos from "./componentes/sobreNos";
import Header from "./Header";
import Footer from "./componentes/Footer";




export default function Sobre(){

    return (
        <>
           <div className="App">
            <Header/>
            <div>
            <SobreNos/>
            </div>
            <div>
            <Footer/>
            </div>

             </div> 

        </>
    )
}