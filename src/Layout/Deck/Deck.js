import React from "react";
import { Link, useHistory } from "react-router-dom";


import { deleteDeck } from "../../utils/api/index";
import DeckList from "./DeckList";


function Deck({ deck, decks, setDecks }) {
  let length = 0;
  
  const history = useHistory();
  
  if (deck.cards !== undefined) {
    length = deck.cards.length;
  }

  if (deck.name !== undefined) {
    console.log(deck.name)
  }
  
  const cardCount = length;
  
  function handleOnClick(event) {
    const abortController = new AbortController();
    event.preventDefault();
    if (window.confirm("You sure you want to delete Deck?")) {
      deleteDeck(deck.id, abortController.signal)
        .then((response) => {
          const tempDecks = decks.filter((theDeck) => theDeck.id !== deck.id);
          setDecks(() => tempDecks);
          history.push(`/`);
        })
        .catch(error => {
          console.log(error.message)
        });
    }

    return () => abortController.abort();
  }
  

  return (
    
     <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{deck.name}</h5>
          <small>{cardCount} cards</small>
        </div>
      
       
         <Link
          to={`/decks/${deck.id}`}
          className="btn btn-secondary mr-1 oi oi-eye"
        >
          View
        </Link>
        <Link
          to={`/decks/${deck.id}/study`}
          className="btn btn-primary ml-1 oi oi-book"
        >
          Study
        </Link>
        <button
          className="btn btn-danger float-right oi oi-trash"
          onClick={handleOnClick}
        >
          Delete
        </button>
     </div>
    </div>
  );
}

export default Deck;
