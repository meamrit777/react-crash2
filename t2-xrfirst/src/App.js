// // import useFetchData from "./useFetchdata";
import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import Test from "./Test";

function Products() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="container">
      <h2>Products page</h2>
      <p>Pathname: {location.pathname}</p>
      <p>
        Search Parameter:{" "}
        {new URLSearchParams(location.search).get("name")}
      </p>
    </div>
  );
}

export default function App() {
  //    const { data } = useFetchData("https://api.github.com/users");

  return (
    <Router>
      <div className="container">
        <h2>Testing the useLocation hook in React</h2>

        <button>
          <Link to="/products/school?name=amrit">Click Me</Link>
        </button>
        <Products />
      </div>
      <Test />
    </Router>
  );
}
