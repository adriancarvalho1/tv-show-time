import './App.css'
import Show from './Show'
import { useEffect, useState } from 'react'


const App = () => {

  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("")

  useEffect( () => {
    getShows(); 
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const getShows = async () => {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    setShows(data);     }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }
  
  return (
    <div className="App">
      <h1>Tv Show Time</h1>
      <p className="about">The TV show database. Search. Track. Discover.</p>
      <form onSubmit={getSearch} className="search-form "action="">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search for a TV show"/>
        <button className="search-button">Search</button>
      </form>
      <div className="shows">
      {shows.map(show => (
        <Show 
        title={show.show.name}
        image={(show.show.image) ? show.show.image.medium : null}
        summary={show.show.summary}
        genre={show.show.genres[0]}
        rating={(show.show.rating.average) ? show.show.rating.average : '-'}
        network={(show.show.network) ? show.show.network.name : '-'}
        status={show.show.status}
        id={show.show.id}
       /> 
      ))}
      </div>
    </div>
  );
}

export default App;
