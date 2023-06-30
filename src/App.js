
import './App.css';
import Juego from './componentes/Juego';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>ARKHAM FILES</h1>
        <Juego 
        nombre="Arkham Horror (Third Edition)"
        año="(2018)"
        descripcionCorta="Piece the clues together to stop the horrors before your sanity shatters." 
        descripcionLarga="Arkham Horror (Third Edition) is a cooperative board game for one to six players who take on the roles of investigators trying to rid the world of eldritch beings known as Ancient Ones. Based on the works of H.P. Lovecraft, players will have to gather clues, defeat terrifying monsters, and find tools and allies if they are to stand any chance of defeating the creatures that dwell just beyond the veil of our reality."
        imagen="arkham-horror-3-edicion"/>
        <Juego 
        nombre="Eldritch Horror"
        año="(2013)"
        descripcionCorta="An unknown Ancient One approaches the world—and you must solve mysteries to stop it" 
        descripcionLarga="Eldritch Horror is a co-operative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One – that is, an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature. Discover the true name of Azathoth or battle Cthulhu on the high seas."
        imagen="eldritch-horror" />
        <Juego 
        nombre="Mansions of Madness (Second Edition)"
        año="(2016)"
        descripcionCorta="Unravel mysteries in Arkham with your investigative team in this app-guided game. " 
        descripcionLarga="Mansions of Madness: Second Edition is a fully co-operative, app-driven board game of horror and mystery for one to five players that takes place in the same universe as Eldritch Horror and Elder Sign. Let the immersive app guide you through the veiled streets of Innsmouth and the haunted corridors of Arkham's cursed mansions as you search for answers and respite. Eight brave investigators stand ready to confront four scenarios of fear and mystery, collecting weapons, tools, and information, solving complex puzzles, and fighting monsters, insanity, and death. Open the door and step inside these hair-raising Mansions of Madness: Second Edition. It will take more than just survival to conquer the evils terrorizing this town."
        imagen="mansiones-de-la-locura"/>
          <Juego 
        nombre="Arkham Horror: The Card Game"
        año="(2016)"
        descripcionCorta="Investigate the horrors of Arkham while courting cosmic doom." 
        descripcionLarga="Something evil stirs in Arkham, and only you can stop it. Blurring the traditional lines between role-playing and card game experiences, Arkham Horror: The Card Game is a Living Card Game of Lovecraftian mystery, monsters, and madness!

        In the game, you and your friend (or up to three friends with two Core Sets) become characters within the quiet New England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult."
        imagen="arkham-horror-lcg"/>
      </div>
    </div>
  );
}

export default App;
