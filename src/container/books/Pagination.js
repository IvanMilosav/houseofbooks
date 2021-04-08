import React from "react";
import "./Books.scss";
import PropTypes from "prop-types";

const Pagination = props => {
  const { postsPerPage, totalPosts, changeToPage, selectedPage } = props;

  const pageNumbers = [];
  // counts number of pages and puts them it an array
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  // makes button with page numbers and sets selected one to have different color
  const pageNumberToShow = pageNumbers.map(number => {
    let styleOption = "";
    if (number === selectedPage) styleOption = "pagination-button_selected";
    else styleOption = "pagination-button";
    return (
      <button
        type="button"
        className={styleOption}
        key={number}
        onClick={() => changeToPage(number)}
      >
        {number}
      </button>
    );
  });

  return <div className="pagination">{pageNumberToShow}</div>;
};

export default Pagination;

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
  changeToPage: PropTypes.func.isRequired
};
