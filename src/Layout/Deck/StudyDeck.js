import React from "react";

import StudyCard from "../Card/StudyCard";
import BreadCrumb from "../BreadCrumb";

function StudyDeck({ decks, deck, cards }) {
  let cardAmount = cards.length;
  
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2> {deck.name}: Study</h2>

      {cardAmount > 2 ? (
        <StudyCard cards={cards} />
      ) : (
        <div>
          <h3>Not Enough Cards.</h3>
          <p>
            You need at least 3 cards to study. There are {cardAmount} cards in
            this deck
          </p>
        </div>
      )}
    </div>
  );
}

export default StudyDeck;

