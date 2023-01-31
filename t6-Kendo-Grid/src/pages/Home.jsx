import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";

const Home = () => {
  return (
    <Link
      to="/grid"
      style={{ border: "1px solid", padding: "4px", textDecoration: "none",background:"skyblue",borderRadius:'4px' }}
    >
      Grid Page ?
    </Link>
  );
};

export default Home;
