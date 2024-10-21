import './App.css';
import { useState } from 'react';


function App() {
 //Aquí tu código
const [name, setName ] = useState('Sofía')


 const changeName = (newName) => {
     setName (newName)
 };

 return (
    <div>
    <h2>Teacher Name: {name}</h2>
    <ul>
        <li><button onClick = {() => changeName('Data')}>Data</button></li>
        <li><button onClick = {() => changeName('Reyes')}>Reyes</button></li>
        <li><button onClick = {() => changeName('Yolanda')}>Yolanda</button></li>
    </ul>
    </div>
 );
}

export default App;



