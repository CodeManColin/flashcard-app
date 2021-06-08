import React from "react";
import { useHistory } from "react-router-dom";

function NextCardButton({
  flip,
  setFlip,
  length,
  cardNum,
  setCardNum,
  setIsVisible,
}) {
  const history = useHistory();

  function handleOnClick() {
    if (cardNum < length - 1) {
      setCardNum(cardNum + 1);
      setFlip(false);
      setIsVisible(false);
    } else {
      if (window.confirm("Restart cards?")) {
        setCardNum(0);
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