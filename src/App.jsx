// Importation des styles et des hooks nécessaires
import './App.css';
import './style.scss';
import { useState, useEffect } from 'react';

function App() {
  // Hooks pour gérer l'état de la recherche, les résultats de la recherche, le chargement, les données de Star Wars, l'état de recherche, et la pagination
  const [search, setSearch] = useState(''); // État pour la recherche
  const [resultSearch, setResultSearch] = useState([]); // État pour les résultats de la recherche
  const [loading, setLoading] = useState(true); // État pour le chargement des données
  const [dataStarsWars, setDataStarsWars] = useState([]); // État pour stocker les données de Star Wars
  const [isSearching, setIsSearching] = useState(false); // État pour indiquer si une recherche est en cours
  const [nextPage, setNextPage] = useState(null); // État pour la pagination suivante
  const [previousPage, setPreviousPage] = useState(null); // État pour la pagination précédente

  // Effect pour récupérer les données de Star Wars au montage du composant
  useEffect(() => {
    fetchDonne('https://swapi.dev/api/people/');
  }, []);

  // Fonction pour récupérer les données de Star Wars
  const fetchDonne = async (url) => {
    try {
      setLoading(true); // Mettre à jour l'état de chargement
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDataStarsWars(data.results); // Mettre à jour les données de Star Wars
        setNextPage(data.next); // Mettre à jour l'URL de la page suivante
        setPreviousPage(data.previous); // Mettre à jour l'URL de la page précédente
        setLoading(false); // Mettre à jour l'état de chargement
      }
    } catch (error) {
      console.error(error); // Afficher l'erreur en cas de problème
    }
  };

  // Fonction pour gérer la soumission du formulaire de recherche
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault(); // Empêcher le rechargement de la page
      setLoading(true); // Mettre à jour l'état de chargement
      const reponse = await fetch(`https://swapi.dev/api/people/?search=${search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (reponse.ok) {
        const data = await reponse.json()
        setResultSearch(data.results) // Mettre à jour les résultats de la recherche
        setIsSearching(true) // Indiquer qu'une recherche est en cours
        setLoading(false) // Mettre à jour l'état de chargement
        setNextPage(data.next); // Mettre à jour l'URL de la page suivante
        setPreviousPage(data.previous); // Mettre à jour l'URL de la page précédente
        setSearch('')
      }
    } catch (error) {
      console.error(error) // Afficher l'erreur en cas de problème
    }
  }

  // Fonctions pour gérer la pagination
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

  // JSX pour le rendu du composant
  return (
    <div className="container">
      {/* En-tête avec logo et titre */}
      <header>
        <div className="svg-stars-wars">
          <img src="/svg/Star_Wars.svg" alt="Star Wars" />
        </div>
        <div className="svg-stars-wars-title">
          <p>Vous pouvez consulter  ici l'ensemble des personnages de l'univers Stars Wars</p>
        </div>
      </header>

      {/* Zone de recherche */}
      <div className="content-stars-wars">
        <div className="content-stars-wars-input">

          <div className="content-stars-wars-item">
            <span>Recherche un personnage :</span>
          </div>


        <div className='content-stars-wars-search'>

          <div className="content-stars-wars-item">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="content-stars-wars-item" onClick={handleOnSubmit}>
            <img src="/svg/magnifying-glass.svg" alt="recherche" />
          </div>
        </div>

      </div>
        {/* Affichage des données ou du chargement */}
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
                resultSearch.length ===  0 ? (
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
        {/* Pagination */}
        <div className={`footer-button${loading ? ' hide':''}`}>
          <PaginationButton
            buttonText="Précédent"
            onClickHandler={handlePreviousPage}
            condition={previousPage}
          />
          <PaginationButton
            buttonText="Suivant"
            onClickHandler={handleNextPage}
            condition={nextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// Composant pour afficher les détails d'un personnage
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

// Composant pour les boutons de pagination
const PaginationButton = ({ buttonText, onClickHandler, condition }) => {
  return (
    condition && (
      <div className="button" onClick={onClickHandler}>
        <span>{buttonText}</span>
      </div>
    )
  );
};
