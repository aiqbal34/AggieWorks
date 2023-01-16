import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("") 
  const [gender, setGender] = useState("")
  const [nationality, setNationality] = useState("")
  function get_Name(){
    let name = window.prompt("Enter in your name");
    setName(name);
    Get_Gender(name)
    Get_nationality(name);
  }
  const Get_Gender = (name) => {
    if(name){
      Axios.get("https://api.genderize.io/?name=" + name)
      .then(response => {
        setGender(response.data.gender)
        console.log(response.data.gender)
      })
    }
  }
  const Get_nationality = (name) => {
    Axios.get("https://api.nationalize.io/?name=" + name).then(response =>
    {
      setNationality(response.data.country_id)
      console.log(response.data.country_id)
    })
  }
  return (
    <div>
      <button className="button" onClick={get_Name}><b>Get Name</b></button>
      <h1> Gender: {gender}      </h1> 
      <h1> Possible Nationality: {nationality}</h1>
    </div>
  );
}

export default App;
