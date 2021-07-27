import React from "react";

import BreadCrumb from "../BreadCrumb";
import AddCardForm from "../Forms/AddCardForm";
/**
 * parent create card component
 */
export default function AddCard({
  decks,
  deck,
  setDeck,
  deckUrl,
  setDecks,
  cards,
  setCards,
}) {
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2>{deck.name}: Add Card</h2>
      <AddCardForm
        deck={deck}
        setDeck={setDeck}
        deckUrl={deckUrl}
        decks={decks}
        setDecks={setDecks}
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
}

// import React from 'react'


// import AddCardForm from "../Forms/CardForm"
// import Breadcrumbs from '../BreadCrumb'

// function AddCard({
//   decks,
//   deck,
//   setDeck,
//   deckUrl,
//   setDecks,
//   cards,
//   setCards}) 
// {
//   // console.log(deck.name)
//   return (
    
//     <div>
//       <Breadcrumbs decks={decks} />
      
//       <h2>{deck.name}: Add Card</h2>
    
     
//       <AddCardForm
//         deck={deck}
//         setDeck={setDeck}
//         deckUrl={deckUrl}
//         decks={decks}
//         setDecks={setDecks}
//         cards={cards}
//         setCards={setCards}
//       />
      
//     </div>
    
//   );
//     }
   
// export default AddCard;