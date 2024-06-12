import './App.css';
import { useReducer, useState } from "react";
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';

function App() {

//lista de frases (estado)
//o usuário podeadicionar novas frases, desde que:
//a frase possua mais do que 20 caracteres
//a frase seja única

const [frase, setFrase] = useState('')
const [frases, dispatch] = useReducer(reducer, [])

function salvarFrase(evento) {
  evento.preventDefault()
  dispatch({
    tipo: ADICIONAR_FRASE,
    frase
  })
}

function excluir(fraseExcluida){
  dispatch({
    tipo: EXCLUIR_FRASE,
    frase: fraseExcluida
  })
}

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea 
          value={frase}
          onChange={evento => setFrase(evento.target.value)}
          placeholder='Digite sua frase...'
          required
        />
        <br/>
        <button>Salvar Frase</button>
      </form>
      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => excluir(fraseAtual)}>Excluir</button></p>)}
    </div>
  );
}

export default App;
