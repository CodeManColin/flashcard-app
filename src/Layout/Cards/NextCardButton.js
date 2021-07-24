import React from "react";
import { useHistory } from "react-router-dom";

function NextCardButton({
  flip,
  setFlip,
  length,
  cardCount,
  setCardCount,
  setIsVisible,
}) {
  const history = useHistory();

  function handleOnClick() {
    if (cardCount < length - 1) {
      setCardCount(cardCount + 1);
      setFlip(false);
      setIsVisible(false);
    } else {
      if (window.confirm("Restart cards?")) {
        setCardCount(0);
        setIsVisible(false);
      } else {
        history.push("/");
      }
    }
  }

  return (
    <button
      className="btn btn-primary ml-1 oi oi-arrow-thick-right"
      onClick={() => handleOnClick()}
    >
      Next
    </button>
  );
}

export default NextCardButton;