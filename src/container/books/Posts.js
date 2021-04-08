import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "../../components/card/Card";
import { CartContext } from "../cart/CartContext";
import { NotificationContext } from "../../components/notification/NotificationContext";
import "../../styles/Animations.scss";
import "./Books.scss";

const Posts = props => {
  const { posts } = props;
  const [, addItemToCart] = useContext(CartContext);
  const [, , , , notify] = useContext(NotificationContext);
  // puts items into cards
  const postsToShow = posts.map(post => (
    <Card
      key={post.id}
      image={post.image}
      title={post.title}
      author={post.author}
      genre={post.genre}
      price={post.price}
      onclick={() => {
        addItemToCart(post);
        notify(` "${post.title}" has been adeed to the cart`);
      }}
    />
  ));

  return <div className="posts-container animated appear ">{postsToShow}</div>;
};

export default Posts;

Posts.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired
};
