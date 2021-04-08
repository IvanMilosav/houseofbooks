import React from "react";
import {
  GiDramaMasks,
  GiPointyHat,
  GiPerspectiveDiceSixFacesRandom
} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Genres.scss";
import "../../../styles/Animations.scss";
// hardcoded part with most popular genres

const Genres = () => {
  return (
    <div className="genres">
      {/* <div className="genres-title">TRENDING GENRES</div> */}
      <div className="genres-container">
        <div className="genre-section">
          <div className="genre-title ">DRAMA</div>
          <GiDramaMasks className="genre-icon " />
          <div className="genre-description ">
            Drama books are full of riveting conflict and dialogue. This is one
            of the oldest forms of storytelling from the ancient world.
          </div>
          <NavLink to="/books/drama" className="genre-link">
            <button type="button" className="genre-button  ">
              All dramas&nbsp;&nbsp; <FaArrowRight className="arrow" />
            </button>
          </NavLink>
        </div>
        <div className="genre-section ">
          <div className="genre-title ">FANTASY</div>
          <GiPointyHat className="genre-icon " />
          <div className="genre-description ">
            Fantasy is a genre of speculative fiction set in a fictional
            universe, often inspired by real world myth and folklore.
          </div>
          <NavLink to="/books/fantasy" className="genre-link ">
            <button type="button" className="genre-button ">
              All fantasies&nbsp;&nbsp; <FaArrowRight className="arrow" />
            </button>
          </NavLink>
        </div>
        <div className="genre-section ">
          <div className="genre-title ">MYSTERY</div>
          <GiPerspectiveDiceSixFacesRandom className="genre-icon " />
          <div className="genre-description ">
            Mysteries are book whose stories focus on a puzzling crime,
            situation, or circumstance that needs to be solved.
          </div>
          <NavLink to="/books/mystery" className="genre-link">
            <button type="button" className="genre-button ">
              All mysteries&nbsp;&nbsp; <FaArrowRight className="arrow" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Genres;
