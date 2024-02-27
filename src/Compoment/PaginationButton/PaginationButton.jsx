import React from "react";
import './PaginationButton.scss';

const PaginationButton = ({ buttonText, onClickHandler }) => {
    return (
        <button className="button" onClick={onClickHandler}>
          <span>{buttonText}</span>
        </button>
      )
  };

  export default PaginationButton;