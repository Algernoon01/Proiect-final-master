import React from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';

const Home = () => {
    return (
    <div className="home-container">
        <div className="home-text">
       <h5> POVESTEA BEBELUȘULUI TĂU ÎN IMAGINI:</h5>
<h6>Ca mamă și fotograf pentru nou născuţi, îmi propun să surprind cele mai importante momente din viața copilului tău și să creez amintiri memorabile care să-ți bucure sufletul peste ani.</h6>
    <h6>Așadar, te aștept în studioul meu pentru a transpune cea mai frumoasă perioadă a vieții tale în imagini artistice!</h6>

        </div>
        <Carusel />
    </div>
    )
}

export default Home;