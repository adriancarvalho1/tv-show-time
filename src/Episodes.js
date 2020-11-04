import {React, useState, useEffect} from 'react'

const Episodes = ({showId}) => {
  const [episodes, setEpisodes] = useState([]);
  const [showResults, setShowResults] = useState(false)
  const Toggle = (e) => {
    e.preventDefault();
    setShowResults(!showResults);
  }
  
  const Results = () => (
    <div>
      {episodes.map(episode => (
        (episode.season) ?
            <p>
              Season {episode.season},
              Episode {episode.number}:{' '}
               {episode.name}
            </p> : <p>No episodes to show</p>
          ))}
    </div>
  )

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${showId}/episodes`)
      .then(res => res.json())
      .then(
        (result) => {
          setEpisodes(result);
          console.log(result)
        },
      )
  }, [showId])

    return (
      <div className="episodes-list">
      <button className="episodes-button" onClick={Toggle}>
      SHOW/HIDE EPISODES
      </button>
      <div>{ showResults && (<Results />) }</div>
      </div>
    );
    }

export default Episodes