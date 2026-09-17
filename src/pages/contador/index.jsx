import './index.css';


export default function Contador(){
    
    let numero = 0;
    
    function contador(){

        numero = numero + + 1 ;
        alert(numero)
    }

    function subtracao(){
        numero = numero - 1;
        alert (numero)
    }
    
    return(
        <div>
            <h1>Contador : {numero}</h1>
                <button onClick={contador}>Aumentar</button>
                <br/>
                <button onClick={subtracao}>diminuir</button>
        </div>

    );
}