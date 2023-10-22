import React from "react";

import YouTube from "react-youtube";

import BannerInfo from "./BannerInfo";

export default function MovieBanner({
  IMAGE_PATH,
  movie,
  playing,
  setPlaying,
  trailer,
}) {
  return (
    <div>
      <main>
        {movie ? (
          <div
            className="viewtrailer"
            style={{
              backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
            }}
          >
            {playing ? (
              <div className="container-info">
                <div className="container">
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <BannerInfo
                trailer={trailer}
                setPlaying={setPlaying}
                movie={movie}
              />
            )}
          </div>
        ) : null}
      </main>
    </div>
  );
}
