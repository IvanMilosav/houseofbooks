import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import bookImage from "../../assets/readingBook.svg";
import allBooksData from "../../assets/tmpDataBooks.json";
import Pagination from "./Pagination";
import Posts from "./Posts";

import "./Books.scss";
// component that holds all the filters results derived from filtering
const Books = () => {
  // params are used to determine genre or author of a book
  const params = useParams();
  // initial filter values
  const [selectedGenre, setSelectedGenre] = useState(
    params.genre ? params.genre : "all"
  );
  const [authorValue, setAuthorValue] = useState(
    params.author ? params.author : ""
  );
  const [searchValue, setSearchValue] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [minPrice, setMinPrice] = useState(0);

  // pagination and items to be shown
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const changeToPage = pageNumber => setCurrentPage(pageNumber);
  // books to show after all the books have been filtered, initially all
  const [filteredBooks, setFilteredBooks] = useState(allBooksData);
  // text shown when there are no matches or user inputs letters in the price range
  const errorText = "No book matches your filters";
  //  error if user enters non number value in price values

  // if genre/author params change, filter changes
  useEffect(() => {
    if (params.genre) setSelectedGenre(params.genre);
  }, [params.genre]);
  useEffect(() => {
    if (params.author) setSelectedGenre("all");
  }, [params.author]);
  // set posts
  useEffect(() => {
    setPosts(filteredBooks);
  }, [filteredBooks]);
  // set page to 1 when a filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  // applying filters
  useEffect(() => {
    // by price and genre
    let byPriceGenre;
    if (selectedGenre === "all")
      byPriceGenre = allBooksData.filter(
        book => book.price < maxPrice && book.price > minPrice
      );
    else
      byPriceGenre = allBooksData.filter(
        book =>
          book.genre === selectedGenre &&
          book.price < maxPrice &&
          book.price > minPrice
      );
    // by title
    const byTitle = byPriceGenre.filter(book => {
      if (searchValue === "\\") return false; // fixes bug where \ makes regex crash
      if (book.title.toLowerCase().match(searchValue.toLowerCase()) !== null)
        return true;
      return false;
    });
    // by author
    const byAuthor = byTitle.filter(book => {
      if (authorValue === "\\") return false;
      if (book.author.toLowerCase().match(authorValue.toLowerCase()) !== null)
        return true;
      return false;
    });
    const afterAllFilters = byAuthor;
    setFilteredBooks(afterAllFilters);
  }, [selectedGenre, authorValue, maxPrice, minPrice, searchValue]);

  // scrolls to top of page for better UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="books">
      <img src={bookImage} alt="book" className="corner_img" />
      <div className="filters ">
        <label className="filter" htmlFor="genres">
          Select genre:
          <select
            id="genre"
            value={selectedGenre}
            name="genres"
            className="filter-input"
            onChange={e => setSelectedGenre(e.target.value)}
          >
            <option value="all">All</option>
            <option value="action">Action&amp;Adventure</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="filter" htmlFor="price">
          Price range:
          <div className="price-filter">
            <input
              id="price"
              className="filter-input-small"
              maxLength="4"
              type="number"
              placeholder="0"
              onChange={e => setMinPrice(e.target.value)}
            />
            <p className="price-range-text">to</p>
            <input
              id="price2"
              className="filter-input-small"
              maxLength="4"
              type="number"
              placeholder="100"
              onChange={e => setMaxPrice(e.target.value)}
            />
          </div>
        </label>

        <label className="filter" htmlFor="title">
          Search by title:
          <input
            id="title"
            className="filter-input"
            type="text"
            placeholder=" Title..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </label>
        <label className="filter" htmlFor="author">
          Search by author:
          <input
            id="author"
            className="filter-input"
            type="text"
            placeholder=" Author..."
            value={authorValue}
            onChange={e => setAuthorValue(e.target.value)}
          />
        </label>
      </div>
      {filteredBooks.length > 0 ? (
        <div>
          <Posts posts={currentPosts} className="posts-container " />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            changeToPage={changeToPage}
            selectedPage={currentPage}
          />
        </div>
      ) : (
        <div className="no-match">{errorText}</div>
      )}
    </div>
  );
};

export default Books;
