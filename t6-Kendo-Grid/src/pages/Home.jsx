import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    <navigate to="/grid" />;
  };
  return <Button onClick={handleClick} label="GridPage" />;
};

export default Home;
