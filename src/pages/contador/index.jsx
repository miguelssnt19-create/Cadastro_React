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
    
    return(
        <div className='tudo'>
            <h1>Contador : {numero}</h1>
                <button className='botao1' onClick={contador}>Aumentar</button>
                <br/>
                <button className='botao2' onClick={subtracao}>diminuir</button>
        </div>

    );
}