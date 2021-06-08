import React from 'react'


import AddCardForm from "../Forms/AddCardForm"
import Breadcrumbs from '../Breadcrumbs'

function AddCard({
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
      <Breadcrumbs decks={decks} />
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
  
export default AddCard;