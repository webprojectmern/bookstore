import Header from "./components/Header";
import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Addbook from "./components/Addbook";
import Books from "./components/book/Books";
import About from "./components/About";
import Bookdetails from "./components/book/Bookdetails";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/add" element={<Addbook/>}  />
          <Route exact path="/books" element={<Books/>}  />
          <Route exact path="/about" element={<About/>}  />
          <Route exact path="/books/:id" element={<Bookdetails/>}  />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
