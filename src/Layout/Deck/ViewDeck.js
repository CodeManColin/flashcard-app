import React, { useEffect, useState } from "react";
// import CreateDeckButton from "./CreateDeckButton";
import DeckView from "./DeckView";
//import Header from "../Header";
//import NotFound from "../NotFound";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// import Deck from "./Deck";
// import { listDecks} from "../../utils/api/index"

import { readDeck } from "../../utils/api";
import CardList from "../Card/CardList";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import AddCard from "../Card/AddCard";
import EditCard from "../Card/EditCard";
import BreadCrumb from "../BreadCrumb";

function ViewDeck({ decks, setDecks }) {
  const [deck, setDeck] = useState({});
  const { path, url, params } = useRouteMatch();

  const [cards, setCards] = useState([]);

  let deckId;
  for (let param in params) {
    if (param === "deckId") {
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
      .catch(console.log("bad"));

    return () => abortController.abort();
  }, []);
  useEffect(() => {
    if (deck.cards !== undefined) setCards([...deck.cards]);
  }, [deck]);

  return (
    <div>
      <Switch>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard
            decks={decks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            setDecks={setDecks}
          />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard
            decks={decks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            setDecks={setDecks}
            cards={cards}
            setCards={setCards}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck
            decks={decks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            setDecks={setDecks}
            cards={cards}
            setCards={setCards}
          />
        </Route>
        <Route path={`${path}/study`}>
          <StudyDeck decks={decks} deck={deck} cards={cards} />
        </Route>
        <Route path={`${path}`}>
          <BreadCrumb decks={decks} />
          <DeckView deck={deck} url={url} decks={decks} setDecks={setDecks} />
          <CardList
            deck={deck}
            deckId={deckId}
            setDeck={setDeck}
            decks={decks}
            setDecks={setDecks}
            cards={cards}
            setCards={setCards}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default ViewDeck;

// import React, { useState, useEffect, Fragment } from "react";
// import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";

// import StudyDeck from "./StudyDeck";
// import EditDeck from "./EditDeck";
// import AddCard from "../Cards/AddCard";
// import EditCard from "../Cards/EditCard";
// // import Breadcrumbs from "../Breadcrumbs";
// import DeckView from "./DeckView";
// import CardList from "../Cards/CardList";

// import { readDeck } from "../../utils/api";

// function ViewDeck({ decks, setDecks }) {
 
//   const { path, url, params } = useRouteMatch();
 
//   const [deck, setDeck] = useState({})
//   const [cards, setCards] = useState([]);

//   let deckId = useParams();
//   for (let param in params) {
//     if (param === "deckId") {
//       console.log(deckId);
//       deckId = params[param];
//       // let deckIdStringified = params[param];
      
//       // deckId = parseInt(deckIdStringified);
//       // console.log(deckId, typeof(deckId));
//     }
//   }
//   // console.log("in viewDeck", decks);


//   useEffect(() => {
//     const abortController = new AbortController();
//     //  console.log(deckId);
//     readDeck(parseInt(deckId), abortController.signal)
//       .then(setDeck)
//       .then(() => {
//         if (deck.cards !== undefined) setCards([...deck.cards]);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//     return () => abortController.abort();
//   }, []);

//   useEffect(() => {
//     if (deck.cards !== undefined) setCards([...deck.cards]);
//   }, [deck]);

//   return (
//     <Fragment>
//       <Switch />
//       <Route path={`${path}/edit`}>
//         <EditDeck   
//             decks={decks}
//             setDecks={setDecks}
//             deck={deck}
//             setDeck={setDeck}
//             deckUrl={url}
//             cards={cards}
//             setCards={setCards}/>
//       </Route>

//       <Route path={`${path}/cards/new`}>
//         <AddCard 
//             decks={decks}
//             setDecks={setDecks}
//             deck={deck}
//             setDeck={setDeck}
//             deckUrl={url}
//             cards={cards}
//             setCards={setCards} />
//       </Route>

//       <Route path={`${path}/cards/:cardId/edit`}>
//         <EditCard  
//             decks={decks}
//             setDecks={setDecks}
//             deck={deck}
//             setDeck={setDeck}
//             deckUrl={url}
//             />
//       </Route>
      
//       <Route path={`${path}/study`}>
//         <StudyDeck decks={decks} deck={deck} cards={cards} />
//       </Route>

//       <Route path={`${path}`}>
//         {/* <Breadcrumbs decks={decks} /> */}
//         <DeckView deck={deck} url={url} decks={decks} setDecks={setDecks} />
//         <CardList 
//             decks={decks}
//             setDecks={setDecks}
//             deck={deck}
//             setDeck={setDeck} 
//             cards={cards}
//             setCards={setCards}
//             deckId={parseInt(deckId.deckId)}/>
//       </Route>

//       <Switch />
//     </Fragment>
//   );
// }

// export default ViewDeck;
