import React, { useEffect, useState } from "react";
import { fetchArtists, search } from "../api";
import AlbumCard from "./AlbumCard";
import MySidebar from "./MySidebar";

const Home = () => {
  const [songs, setSongs] = useState({
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.length > 2) {
      const results = await search(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchArtists(4);
      setSongs(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <MySidebar
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
      

      {searchResults.length > 0 && (
        <>
          <h2 >Search Results</h2>
          <div className="row">
            {searchResults.slice(0, 4).map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>
          <div className="row">
            {searchResults.slice(4, 8).map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>
        </>
      )}

      <h2 className="text-light mt-5 mb-3 category">#Rock</h2>
      <div className="row homeCard">
        {songs.rockSongs.map((song, index) => (
          <AlbumCard key={index} songInfo={song} />
        ))}
      </div>

      <h2 className="text-light mb-3 category">#Pop</h2>
      <div className="row homeCard">
        {songs.popSongs.map((song, index) => (
          <AlbumCard key={index} songInfo={song} />
        ))}
      </div>

      <h2 className="text-light mb-3 category">#Hip-Hop</h2>
      <div className="row homeCard">
        {songs.hipHopSongs.map((song, index) => (
          <AlbumCard key={index} songInfo={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;