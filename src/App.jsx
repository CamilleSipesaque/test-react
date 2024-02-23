import './App.css';
import './style.scss';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataStarsWars, setDataStarsWars] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    fetchDonne('https://swapi.dev/api/people/');
  }, []);

  const fetchDonne = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDataStarsWars(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault(); // Pour éviter le rechargement de la page
      setLoading(true);
      const reponse = await fetch(`https://swapi.dev/api/people/?search=${search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (reponse.ok) {
        const data = await reponse.json()
        setResultSearch(data.results)
        setIsSearching(true)
        setLoading(false)
        setNextPage(data.next);
        setPreviousPage(data.previous);

      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleNextPage = () => {
    if (nextPage) {
      fetchDonne(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      fetchDonne(previousPage);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="svg-stars-wars">
          <img src="/svg/Star_Wars.svg" alt="Star Wars" />
        </div>
        <div className="svg-stars-wars-title">
          <p>Vous pouvez consulter ici l'ensemble des personnages de l'univers Stars Wars</p>
        </div>
      </header>
      <div className="content-stars-wars">
        <div className="content-stars-wars-input">
          <div className="content-stars-wars-item">
            <span>Recherche un personnage :</span>
          </div>
          <div className="content-stars-wars-item">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="content-stars-wars-item" onClick={handleOnSubmit}>
            <img src="/svg/magnifying-glass.svg" alt="recherche" />
          </div>
        </div>
        {loading ? (
          <div className="loading">
            <img src="/svg/ball-triangle.svg" alt="recherche" />
          </div>
        ) : (
          <div className='content-stars-wars-gride'>
            {
              isSearching === false ? (
                dataStarsWars.map((result, i) => (
                  <Item data={result} key={i} />
                ))
              ) : (
                resultSearch.length === 0 ? (
                  <div className=''>
                    <p>Aucune personnage</p>
                  </div>
                ) : (
                  resultSearch.map((result, i) => (
                    <Item data={result} key={i} />)
                  ))
              )
            }
          </div>
        )}
        <div className="footer-button">
          {previousPage && (
            <div className="button" onClick={handlePreviousPage}>
              <span>Précédent</span>
            </div>
          )}
          {nextPage && (
            <div className="button" onClick={handleNextPage}>
              <span>Suivant</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

const Item = ({ data }) => {
  return (
    <div className="content-stars-wars-gird-item">
      <div className="title">
        <p>{data.name}</p>
      </div>
      <div className="text">
        <p>Taille : {data.height}</p>
        <p>Poid : {data.mass}</p>
        <p>Cheveux : {data.hair_color}</p>
        <p>Yeux : {data.eye_color}</p>
        <p>Genre : {data.gender}</p>
      </div>
    </div>
  );
};
