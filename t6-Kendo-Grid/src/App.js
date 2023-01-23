import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridPage from "./pages/GridPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<GridPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const routes = [
//   {
//     path: "/",
//     component: <Home />,
//     exact: true,
//   },
//   {
//     path: "/grid",
//     component: <GridPage />,
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <ToastContainer />
//       <BrowserRouter>
//         <Routes>
//           {routes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               component={route.component}
//               exact={route.exact}
//             />
//           ))}
//         </Routes>
//       </BrowserRouter>
//       ;
//     </div>
//   );
// }
