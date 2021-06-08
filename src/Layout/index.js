import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";

import DeckList from "./Deck/DeckList";
import ViewDeck from "./Deck/ViewDeck";
import CreateDeck from "./Deck/CreateDeck";

function Layout() {
  const [decks, setDecks] = useState([]);
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
         
          <Route exact={true} path="/">
            <DeckList decks={decks} setDecks={setDecks} />
          </Route>

          <Route path="/decks/new">
            <CreateDeck decks={decks} setDecks={setDecks} />
          </Route>

          <Route path="/decks/:deckId">
            <ViewDeck decks={decks} setDecks={setDecks} />
          </Route>

          <Route>
            <NotFound path="*" />
          </Route>
        
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
