import './App.css';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () =>{
    let obj = JSON.stringify( {
      login,
      password
    },null,2 )

    alert(obj) // вот эту хуйню на бек кидаешь
  }
  return (
    <div className="App">
      <input type="email" placeholder='login' value={login} onChange={(e)=>{setLogin(e.currentTarget.value)}} />
      <input type='password' placeholder='pass' value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
