import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";
import Breadcrumbs from "../Breadcrumbs";
import DeckView from "./DeckView";
import CardList from "../Cards/CardList";

import { readDeck } from "../../utils/api";

function ViewDeck({ decks, setDecks }) {
 
  const { path, url, params } = useRouteMatch();
 
  const [deck, setDeck] = useState({})
  const [cards, setCards] = useState([]);

  let deckId;
  for (let param in params) {
    if (params === deckId) {
      deckId = params[param];
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal)
      .then(setDeck)
      .then(() => {
        if (deck.cards !== undefined) setCards([...deck.cards]);
      })
      .catch((error) => {
        console.log(error.message);
      });
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (deck.cards !== undefined) setCards([...deck.cards]);
  }, [deck]);

  return (
    <Fragment>
      <Switch />
      <Route path={`${path}/edit`}>
        <EditDeck   
            decks={decks}
            setDecks={setDecks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            setDecks={setDecks}
            cards={cards}
            setCards={setCards}/>
      </Route>

      <Route path={`${path}/cards/new`}>
        <AddCard 
            decks={decks}
            setDecks={setDecks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
          
            cards={cards}
            setCards={setCards} />
      </Route>

      <Route path={`${path}/cards/:cardId/edit`}>
        <EditCard  
            decks={decks}
            setDecks={setDecks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            />
      </Route>
      
      <Route path={`${path}/study`}>
        <StudyDeck decks={decks} deck={deck} cards={cards} />
      </Route>

      <Route path={`${path}`}>
        <Breadcrumbs decks={decks} />
        <DeckView deck={deck} url={url} decks={decks} setDecks={setDecks} />
        <CardList 
            decks={decks}
            setDecks={setDecks}
            deck={deck}
            setDeck={setDeck} 
            cards={cards}
            setCards={setCards}
            deckId={deckId}/>
      </Route>

      <Switch />
    </Fragment>
  );
}

export default ViewDeck;
