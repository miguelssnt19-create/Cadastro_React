import './index.css';
import { useState } from 'react';


export default function Descricao(){
    const [descricao, setDescricao] = useState('texto');
    
    function mensagem(e){
        let mensagen = e.target.value;
        setDescricao(mensagen)
    }


    return(
        <div className='tudo_desc'>
            <div className='titulo' >  
                <h1> {descricao}</h1>
            </div>
            <input type="text" placeholder="Digite a descrição..." value={descricao} onChange={mensagem} />
            
            <div>
                
                <a href="/">voltar</a>
            </div>
        </div>
    );
}