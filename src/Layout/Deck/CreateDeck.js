import React from 'react'

import Breadcrumbs from '../Breadcrumbs'
import CreateDeckForm from '../Forms/CreateDeckForm'


function CreateDeck({ decks, setDecks }) {
    
  return (
    <div>
      <Breadcrumbs decks={decks} />
      <h2>Create Deck</h2>
      <CreateDeckForm decks={decks} setDecks={setDecks} />
    </div>
  );
    }

export default CreateDeck;



