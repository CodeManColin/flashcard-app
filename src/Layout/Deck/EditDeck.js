import React from "react";

import BreadCrumb from "../BreadCrumb";
import EditDeckForm from "../Forms/EditDeckForm";

function EditDeck({ decks, deck, setDeck, deckUrl, setDecks }) {
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2>Edit Deck</h2>
      <EditDeckForm
        deck={deck}
        setDeck={setDeck}
        deckUrl={deckUrl}
        decks={decks}
        setDecks={setDecks}
      />
    </div>
  );
}

export default EditDeck;

// import React from 'react'

// import Breadcrumbs from '../BreadCrumb'
// import EditDeckForm from '../Forms/EditDeckForm'

// function EditDeck({ decks, setDecks, deck, setDeck, deckUrl}) {

//   return (
//     <div>
//       <Breadcrumbs decks={decks} />
//       <h2>Edit Deck</h2>
//       <EditDeckForm
//         deck={deck}
//         decks={decks}
//         setDeck={setDeck}
//         setDecks={setDecks}
//         deckUrl={deckUrl}
//       />
//     </div>
//   );
// }



// export default EditDeck;