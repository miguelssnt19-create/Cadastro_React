import './index.css';
import { useState } from 'react';


export default function Contador(){

    const [numero, setNumero] = useState(0);
    
    function contador(){

        setNumero(numero + 1);
    }

    function subtracao(){
        setNumero(numero - 1);
    }
    
    function dobro(){
        setNumero(numero * 2)
    }

    function zerar(){
        setNumero(0)
    }

    return(
        <div className='tudo'>
            <h1>Contador : {numero}</h1>
                <button className='botao1' onClick={contador}>Aumentar</button>
                <br/>
                <button className='botao2' onClick={subtracao}>diminuir</button>
                <br/>
                <button className='botao3' onClick={dobro}>dobrar</button>
                <br/>
                <button className='botao4' onClick={zerar}>zerar</button>

    
            <br />

            <div>
                <a href="/"> voltar ao inicio</a>
            </div>

        </div>


    );
}