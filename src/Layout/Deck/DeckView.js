import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { deleteDeck } from "../../utils/api/index";



function DeckView({ deck, url, decks, setDecks }) {

  const history = useHistory();
  
  function HandleOnClick(event) {
    const abortController = new AbortController();
    event.preventDefault();
    if (window.confirm("You sure you want to delete Deck?")) {
      deleteDeck(deck.id, abortController.signal)
        .then(response => {
          const tempDecks = decks.filter((theDeck) => theDeck.id !== deck.id);
          setDecks(() => tempDecks);
          history.push(`/`);
        })
        .catch(console.log("Error occurred"));
    }
    

    return () => abortController.abort();
  }
  // console.log("deck.name3", deck.name3); 
    return (
        <div className="card border-0">
          <div className="card-body px-0">
            <div className="d-flex justify-content-between ">
              <h5 className="card-title">{deck.name3}</h5>
            </div>
            <div className="card-text"> 
        </div>
            <p>{deck.name3}</p>
          
            <Link
              to={`${url}/edit`}
              className="btn btn-secondary mr-1 oi oi-pencil"
            >
              Edit
            </Link>
          
            <Link 
              to={`${url}/study`} 
              className="btn btn-primary ml-1 oi oi-book"
              >
              Study
            </Link>
          
            <Link
              to={`${url}/cards/new`}
              className="btn btn-primary ml-2 oi oi-plus"
            >
              Add Cards
            </Link>
          
            <button
              className="btn btn-danger float-right oi oi-trash"
              onClick={HandleOnClick}
            >
            </button>
          </div>
        </div>
      );
}
export default DeckView;