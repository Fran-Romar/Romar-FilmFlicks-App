import React from "react";

export default function BannerInfo({ trailer, setPlaying, movie }) {
  const movieAverage = (average) => {
    const vote = Math.round((average * 5) / 10);
    return "⭐".repeat(vote);
  };

  return (
    <div className="container-info">
      <div className="container">
        <div className="">
          {trailer ? (
            <button
              className="boton"
              onClick={() => setPlaying(true)}
              type="button"
            >
              Play Trailer
            </button>
          ) : (
            "Sorry, no trailer available"
          )}
          <div className="banner-info">
            <h1 className="text-white">{movie.title}</h1>
            <p style={{ fontStyle: "italic" }}>
              Movie rating: {movieAverage(movie.vote_average)}
            </p>
            <p className="text-white w-50">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
