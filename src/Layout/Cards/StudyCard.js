import React, {useState} from 'react'

import NextCardButton from "./NextCardButton"

function StudyCard({ cards }) {
  const [cardCount, setCardCount] = useState(0);
  const [flip, setFlip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  let content = "";
  
  // console.log(cards)

  if (flip) {
      content = cards[cardCount].back;
  } else {
      content = cards[cardCount].front;
  }
  if (cards.length > 0) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex  justify-content-between ">
            <h5 className="card-title">{`Card ${cardCount + 1} of ${cards.length}`}</h5>
          </div>
          <p>{content}</p>
          <button
            className="btn btn-secondary ml-1 oi oi-arrow-thick-top"
            onClick={() => {
              setFlip(!flip);
              setIsVisible(!isVisible);
            }}
          >
            Flip
          </button>
          {isVisible ? (
            <NextCardButton
              flip={flip}
              setFlip={setFlip}
              length={cards.length}
              cardCount={cardCount}
              setCardCount={setCardCount}
              setIsVisible={setIsVisible}
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (   
        <div> 
          <h2>Not Enough Cards.</h2>
          <h6>You need at least 3 cards to study. There are {cardCount} cards in this deck</h6> 
       </div>
       );
  }
}


export default StudyCard;