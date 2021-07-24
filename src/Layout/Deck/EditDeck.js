import React from 'react'

import Breadcrumbs from '../Breadcrumbs'
import EditDeckForm from '../Forms/EditDeckForm'

function EditDeck({ decks, setDecks, deck, setDeck, deckUrl}) {

  return (
    <div>
      <Breadcrumbs decks={decks} />
      <h2>Edit Deck</h2>
      <EditDeckForm
        deck={deck}
        decks={decks}
        setDeck={setDeck}
        setDecks={setDecks}
        deckUrl={deckUrl}
      />
    </div>
  );
}



export default EditDeck;