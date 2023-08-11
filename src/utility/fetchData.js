export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "2b6cdeffecmshbe6034aff26cbe5p1c3eacjsndaef8f060d2c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd0c468ac95mshc9b838f0e719828p19bd31jsnb6de68efcf15',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchDataN = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
