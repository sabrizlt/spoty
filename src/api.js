const headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  
  export const search = async (searchQuery) => {
    let results = [];
    if (searchQuery.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
          {
            method: "GET",
            headers,
          }
        );
  
        if (response.ok) {
          let data = await response.json();
          results = data.data;
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    }
    return results;
  };
  
  export const handleArtist = async (artistName) => {
    let songInfo = {};
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      );
  
      if (response.ok) {
        let result = await response.json();
        songInfo = result.data[0];
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
    return songInfo;
  };
  
  export const fetchArtists = async (randomArtistCount) => {
    const rockArtists = [
      "Queen",
      "The Rolling Stones",
      "Bob Dylan",
      "AC/DC",
      "Jimi Hendrix",
      "John Lennon"
    ];
  
    const popArtists = [
      "Dua Lipa",
      "Ariana Grande",
      "Katy Perry",
      "Michael Jackson",
      "Miley Cyrus",
      "Lady Gaga",
      "Rihanna"
    ];
  
    const hipHopArtists = [
      "Eminem",
      "Future",
      "Drake",
      "Tupac",
      "50 Cent",
      "Migos",
      "Travis Scott"
    ];
  
    const fetchRandomArtistSongs = async (artists) => {
      const songs = [];
      for (let i = 0; i < randomArtistCount; i++) {
        const randomIndex = Math.floor(Math.random() * artists.length);
        const randomArtist = artists[randomIndex];
        const songInfo = await handleArtist(randomArtist);
        songs.push(songInfo);
      }
      return songs;
    };
  
    const rockSongs = await fetchRandomArtistSongs(rockArtists);
    const popSongs = await fetchRandomArtistSongs(popArtists);
    const hipHopSongs = await fetchRandomArtistSongs(hipHopArtists);
  
    return {
      rockSongs,
      popSongs,
      hipHopSongs,
    };
  };