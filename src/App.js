import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import './style.css';
import api from './services/api'
function App() {

  const [input, setInput] = useState ('')
  const [cep, setCep] = useState({});
  async function handleSearch(){
   //    01310930/json/
    if(input === ''){
      alert("digite algo")
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)
      setCep(response.data)
      setInput("");



    }catch{
      alert("OPS, CEP não encontrado!")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP :D </h1>
      
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu Cep.."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>
        {Object.keys(cep).length > 0 && (
          <main className='main'>
          <h2> CEP: {cep.cep}</h2>
          <span> {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}-{cep.uf}</span>
        </main>
        )}

     
    </div>
  );
}

export default App;
