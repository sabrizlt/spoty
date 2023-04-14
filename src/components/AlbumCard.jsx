import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ songInfo }) => {
  return (
    <div className="col text-center " id={songInfo}>
      {songInfo.album ? (
        <Link to={`/album/${songInfo.album.id}`}>
          <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
        </Link>
      ) : null}
      <p>
        {songInfo.album ? (
          <Link className="text-light nav-link artistSpace" to={`/album/${songInfo.album.id}`}>
            Album: "
            {songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`}
            "<br />
          </Link>
        ) : null}
        {songInfo.artist ? (
          <Link className="text-light nav-link artistSpace" to={`/artist/${songInfo.artist.id}`}>
            Artist: {songInfo.artist.name}
          </Link>
        ) : null}
      </p>
    </div>
  );
};


export default AlbumCard;

