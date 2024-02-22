import './App.css'
import './style.scss'
import { useState,useEffect } from 'react'
function App() {

const [test,setTest]=useState()
const handleOnSubmit =(e)=>{
  e.preventDefault()
alert('test')
}
  return (
    <div className="container">
      <header>
        <div className="svg-stars-wars">
          <img src='/svg/Star_Wars.svg' alt='Star Wars' />
        </div>
        <div className='svg-stars-wars-title'>
          <p>Vous pouvez consulter ici l'ensemble des personnages de l'univers Stars Wars</p>
        </div>
      </header>

      <div className="content-stars-wars">
      
        <div className="content-stars-wars-input">
          <div className="content-stars-wars-item">
            <span>
              Recherche un personnage :
            </span>
          </div>

          <div className="content-stars-wars-item">
            <input type='text' placeholder='search' id="test" value={test} onChange={(e)=>{setTest(e.target.value)}} />
          </div>
          <div className="content-stars-wars-item" onClick={handleOnSubmit}>
            <img src='/svg/magnifying-glass.svg' alt='recheche' />
          </div>
        </div>

        <div className='content-stars-wars-gride'>
          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>
          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>
          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>
          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>

          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>
          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>

          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>


          <div className="content-stars-wars-gird-item">
            <div className='title'><p>Lorem ipsum dolor sit amet.</p></div>
            <div className='text'>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
              <p>Taille : 1255</p>
            </div>
          </div>
        </div>
        <div className='footer-button'>
          <div className='button'>
            <span>suivant</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
