import React, {Fragment} from "react";

import StudyCard from '../Cards/StudyCard'
import Breadcrumbs from "../Breadcrumbs"


function StudyDeck({ cards }) {

  const cardTotal = cards.length;

  return (
    <Fragment>
     
      <Breadcrumbs />
   
      {cardTotal > 2 ? (
        <StudyCard cards={cards}/>
      ) : (
        <div> 
         <h2>Not Enough Cards.</h2>
          <h6>
            You need at least 3 cards to study. There are {cardTotal} cards in
            this deck
          </h6> 
          </div>
          )} 
       
    </Fragment>
  )
}


export default StudyDeck;
