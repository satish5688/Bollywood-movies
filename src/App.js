import React, { useState } from "react";
import "./styles.css";

var Movies = {
  Romantic: [
    { movie: " Shuddh Desi Romance ", rating: " rating: MIDb 6" },
    { movie: " Raanjhanaa", rating: "rating: 7.6" },
    { movie: " Yeh Jawaani Hai Deewani ", rating: "rating: MIDb 7.2" },
    { movie: "Jab Tak Hai Jaan", rating: "rating: MIDb 6.7" },
    { movie: "Jannat 2", rating: "rating: MIDb 6.3" },
    { movie: " Kal Ho Naa Ho", rating: "rating: MIDb 7.9" }
  ],
  Comedy: [
    { movie: "Munna Bhai movies", rating: "rating: MIDb 7.9" },
    { movie: "Hera Pheri ", rating: "rating: MIDb 7.93" },
    { movie: "Golmal Returns", rating: "rating: MIDb 7.9 " },
    { movie: "Chachi 420", rating: "rating: MIDb 7.95" }
  ],
  Hororr: [
    { movie: "Raaz", rating: "rating: MIDb 7.9 " },
    { movie: "1920 London", rating: "rating: MIDb 7.9 " },
    { movie: " Ghost", rating: "rating: MIDb 7.9 " },
    { movie: "Lupt", rating: "rating: MIDb 7.9  " }
  ],
  Thriller: [
    { movie: "Kahani", rating: " rating: MIDb 7.9 " },
    { movie: "Drishyam", rating: " rating: MIDb 7.95" },
    { movie: "Race", rating: "rating: MIDb 7.94" },
    { movie: "Badla", rating: "3/5" },
    { movie: "A wednesday", rating: "rating: MIDb 7.94/5" }
  ]
};

var movieknow = Object.keys(Movies);

export default function App() {
  const [movie, setmovie] = useState("Romantic");
  function genreClickHandler(genre) {
    setmovie(genre);
  }
  return (
    <div className="App">
      <h1>Bollywood-movies</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Movies. Select a Actor to get started...{" "}
      </p>

      <div>
        {movieknow.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingBlock: "0" }}>
          {Movies[movie].map((bollywood) => (
            <li
              key={bollywood}
              style={{
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {bollywood.movie} </div>
              <div style={{ fontSize: "smallj" }}> {bollywood.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
