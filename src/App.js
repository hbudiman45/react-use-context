import React from "react";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MovieContex";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <h1>React State Management</h1>
        <hr />
        <div className="row justify-content-center">
          <div className="col-4">
            <MovieList />
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
