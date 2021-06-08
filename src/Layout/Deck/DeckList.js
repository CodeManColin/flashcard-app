
import React, { useEffect, useState } from "react";

import Deck from "./Deck";
import CreateDeckButton from "./CreateDeckButton";

import { listDecks } from "../../utils/api/index";

function DeckList({ decks, setDecks }) {
    
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal)
    .then(setDecks)
    .catch(setError);

    return () => abortController.abort();
  }, [setDecks]);

  if (error) {
    console.log("setDeck error");
  }
  const deckList = decks.map((deck) => (
    <Deck key={deck.id} deck={deck} decks={decks} setDecks={setDecks} />
  ));

  return (
    <div>
      <CreateDeckButton />
      {deckList}
    </div>
  )
}
export default DeckList;