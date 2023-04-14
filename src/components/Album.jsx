import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [selectedSongs, setSelectedSongs] = useState(() => {
    const savedSongs = JSON.parse(localStorage.getItem("selectedSongs"));
    return savedSongs ? savedSongs : [];
  });

  useEffect(() => {
    async function fetchAlbum() {
      let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
      });

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" + id,
          {
            method: "GET",
            headers,
          }
        );

        if (response.ok) {
          let album = await response.json();
          setAlbum(album);
        } else {
          console.error("Something went wrong:", await response.text());
        }
      } catch (exception) {
        console.error("Error:", exception);
      }
    }

    fetchAlbum();
  }, [id]);

  useEffect(() => {
    localStorage.setItem("selectedSongs", JSON.stringify(selectedSongs));
  }, [selectedSongs]);

  const toggleSelected = (id) => {
    const index = selectedSongs.indexOf(id);
    if (index === -1) {
      setSelectedSongs([...selectedSongs, id]);
    } else {
      setSelectedSongs([
        ...selectedSongs.slice(0, index),
        ...selectedSongs.slice(index + 1),
      ]);
    }
    console.log("Selected songs:", selectedSongs); // aggiunta della console.log
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row">
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={album.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">
                  {album.artist?.name || "Loading..."}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
            <div className="col-md-8 p-5">
              <div className="row">
                <div className="col-md-10 mb-5" id="trackList">
                  {album.tracks?.data.map((track) => (
                    <div key={track.id} className="py-3 trackHover">
                      <a
                        href="#"
                        className="card-title trackHover px-3"
                        style={{ color: "white" }}
                      >
                        {track.title}
                      </a>
                      <small className="duration" style={{ color: "white" }}>
                        {Math.floor(parseInt(track.duration) / 60)}:
                        {parseInt(track.duration) % 60 < 10
                          ? "0" + (parseInt(track.duration) % 60)
                          : parseInt(track.duration) % 60}
                      </small>
                      <div
                        className="heartIcon"
                        onClick={() => toggleSelected(track.id)}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          color={
                            selectedSongs.includes(track.id) ? "green" : "white"
                          }
                        />
                      </div>
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

export default AlbumPage;
