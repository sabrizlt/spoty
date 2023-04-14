import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ArtistPage = () => {
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtist = async () => {
      const headers = {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
      };

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
          {
            method: "GET",
            headers,
          }
        );

        if (response.ok) {
          const artist = await response.json();
          setArtist(artist);

          const tracksResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist.name}`,
            {
              method: "GET",
              headers,
            }
          );

          if (tracksResponse.ok) {
            const tracklist = await tracksResponse.json();
            setTracks(tracklist.data);
          }
        }
      } catch (exception) {
        console.error(exception);
      }
    };

    fetchArtist();
  }, [id]);
  return (
      <div className="row">
      <div className="container-fluid">
        <div className="col-12 col-md-12 offset-md-3 mainPage mx-auto">
          <div className="row mb-3">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              {/* Aggiungi qui il codice JSX per i link principali */}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-10 col-lg-10 mt-5 mx-auto">
              {artist && (
                <>
                  <h2 className="titleMain">{artist.name}</h2>
                  <div id="followers">{artist.nb_fan} followers</div>
                  <div
                    className="d-flex justify-content-center"
                    id="button-container"
                  >
                    <button
                      className="btn btn-success btn-outline-light mr-2 mainButton"
                      id="playButton"
                    >
                      PLAY
                    </button>
                    <button
                      className="btn btn-outline-light mainButton"
                      id="followButton"
                    >
                      FOLLOW
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <div className="row">
                  {tracks.map((track) => (
                    <div
                      key={track.id}
                      className="col-sm-auto col-md-auto text-center mb-5"
                    >
                      <Link to={`/album/${track.album.id}`}>
                        <img
                          className="img-fluid"
                          src={track.album.cover_medium}
                          alt="1"
                        />
                      </Link>
                      <p>
                        <Link className="artistSpace"   to={`/artist/${track.artist.id}`}>
                          Track: "
                          {track.title.length < 16
                            ? track.title
                            : `${track.title.substring(0, 16)}...`}
                          "
                        </Link >
                        <br />
                        <Link className="artistSpace" to={`/album/${track.album.id}`}>
                          Album: "
                          {track.album.title.length < 16
                            ? track.album.title
                            : `${track.album.title.substring(0, 16)}...`}
                          "
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;