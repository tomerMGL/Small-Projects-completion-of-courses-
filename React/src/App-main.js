import React from "react";
import './App-main.css'

function App_main() {

    let [state,setState] = React.useState({countries:[]}) 

    if(!state.countries.length){
    let contry = fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(body=>setState({...state , countries : body}));

    }

    let searchCountries = (search) =>{
                setState({...state , countries : state.countries.filter(c=> 
                    String(c.name).includes(search.target.value) ||String(c.capital).includes(search.target.value)
                    )})

       

    }
    return (
  <div className="App-main">
      <label for='search'>search : </label>
      <input onChange={searchCountries}  id='search' type='text'/>
      <table id='countries' border="1" width="100%">
          <tr>
              <th>Name</th>
              <th>nativeName</th>
              <th>capital</th>
              <th>population</th>
              <th>flag</th>
          </tr>
          {state.countries.map(country =><tr><td>{country.name}</td><td>{country.nativeName}</td><td>{country.capital}</td><td>{country.population}</td><td><img src={country.flag} width='80' height='50'/></td></tr>)}
      </table>
  

  
  
  </div>
    );
  }
  
  export default App_main;