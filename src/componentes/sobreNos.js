import './sobreNos.css'

export default function SobreNos(){
    return(
        <>
            <article id="artigo2">
            <div className="culado1">
            
            <div className="branco1">
            <div>
                <img className="gatoTop1" src={require('../imagens/gatoTop.png')}/> 
            </div>
            <div>
                <h1 className="adotar1">
                Mia Khats
                </h1>
          <p id="texto1"> Nosso projeto consiste em ajudar gatos a encontrarem um humano e deixarem os abrigos e lares temporários por lares saudáveis e amorosos.
Nós publicamos as fotos dos animais e nos comprometemos em entregá-los saudáveis e vacinados para os adotantes que devem se comprometer com as próximas vacinas se houver e com o bem estar do animal.
</p>
            </div>
            <div>
            <h1 className="doe">
                Doe!!
                </h1>
          <p id="texto2"> Se não puder adotar nenhum gato, mas quiser nos ajudar com a causa, aceitamos doaçoes para a compra de rações, pagamentos de vacinas e outros custos para o funcionamento do projeto.
Aceitamos pix: 99966699966

</p>
            </div>
            </div>
            
            </div>

            

            </article>


        </>
    )
}