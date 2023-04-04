import React, {useEffect, useState} from 'react'
import Block from './Components/Block'
import "./App.css"

const App = () => {

    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])
    
    const fetchApi = async () => {
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();
        setResult(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    const handleClick = (e) =>{
      e.preventDefault();
      fetchApi();
    }
    const handleChange= (e)=>{
      setQuery(e.target.value)
    }

  return (
    <>
    <div className='searchArea flex'>
      <h1>Github User Search</h1>
      <div className='inputArea flex'>
        <input className="inputBox" type='text' placeholder='' value={query} onChange={handleChange}></input>
        <div className='btn' onClick={handleClick}>Search</div>
      </div>
    </div>
    <div className='resultsArea flex'>
      <h2>Results</h2>
      {result.map((user) => {
        return <Block key={user.id} id={user.login} image={user.avatar_url} url={user.html_url}/>
      })}
    </div>
    </>
  )
}

export default App

