import {FiSearch} from 'react-icons/fi'

function App() {
  return (
    <div className="container">
      <h1 className="title">Teste Projeto</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu Cep.."
        />
        <button className="buttonSearch">
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

        <main className='main'>
          <h2> CEP: 79003222</h2>
          <span>
            </span>>
        </main>
     
    </div>
  );
}

export default App;
