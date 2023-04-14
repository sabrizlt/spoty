const rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];
  
  const popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];
  
  const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
  
  const FETCH_ALBUMS = "FETCH_ALBUMS";
  
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  
  export const fetchAlbums = () => async (dispatch) => {
    try {
      let rockRandomArtists = [];
      let popRandomArtists = [];
      let hipHopRandomArtists = [];
  
      while (rockRandomArtists.length < 3) {
        let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
        if (!rockRandomArtists.includes(artist)) {
          rockRandomArtists.push(artist);
        }
      }
  
      while (popRandomArtists.length < 3) {
        let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
        if (!popRandomArtists.includes(artist)) {
          popRandomArtists.push(artist);
        }
      }
  
      while (hipHopRandomArtists.length < 3) {
        let artist =
          hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
        if (!hipHopRandomArtists.includes(artist)) {
          hipHopRandomArtists.push(artist);
        }
      }
  
      let fetchedAlbums = {
        popAlbums: [],
        rockAlbums: [],
        hiphopAlbums: [],
        allAlbums: [],
      };
  
      for (let j = 0; j < rockRandomArtists.length; j++) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            rockRandomArtists[j],
          {
            method: "GET",
            headers,
          }
        );
        let result = await response.json();
        fetchedAlbums.rockAlbums.push(result.data[0]);
      }
  
      for (let k = 0; k < popRandomArtists.length; k++) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            popRandomArtists[k],
          {
            method: "GET",
            headers,
          }
        );
        let result = await response.json();
        fetchedAlbums.popAlbums.push(result.data[0]);
      }
  
      for (let l = 0; l < hipHopRandomArtists.length; l++) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            hipHopRandomArtists[l],
          {
            method: "GET",
            headers,
          }
        );
        let result = await response.json();
        fetchedAlbums.hiphopAlbums.push(result.data[0]);
      }
  
      dispatch({
        type: FETCH_ALBUMS,
        payload: fetchedAlbums,
      });
    } catch (error) {
      console.log(error);
    }
  };