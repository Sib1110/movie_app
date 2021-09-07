import React from "react";
import propTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/10</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    rating: 2,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://images.unsplash.com/photo-1550388342-b3fd986e4e67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtZ3l1cHNhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmliaW1iYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    id: 4,
    name: "ramen",
    image:
      "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 1,
  },
  {
    id: 5,
    name: "kimbap",
    image:
      "https://images.unsplash.com/photo-1608731001805-187e9c904388?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2ltYmFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 7,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number,
};
export default App;
