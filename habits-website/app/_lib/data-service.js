import { notFound } from "next/navigation";

export const getGames = async function () {
  const url = `${process.env.HABITS_API}/Games`;
  const data = await fetch(url);
  const games = await data.json();

  return games;
};

export const getGame = async function (id) {
  const url = `${process.env.HABITS_API}/Games/${id}`;
  const data = await fetch(url);
  const game = await data.json();

  if (!game) notFound();

  return game;
};

export const postGame = async function (gameFormData) {
  const url = `http://localhost:5211/Games`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameFormData),
  });

  const data = await response.json();
};

export const getBooks = async function () {
  const url = `${process.env.HABITS_API}/Books`;
  const data = await fetch(url);
  const books = await data.json();

  return books;
};

export const getBook = async function (id) {
  const url = `${process.env.HABITS_API}/Books/${id}`;
  const data = await fetch(url);
  const book = await data.json();

  if (!book) notFound();

  return book;
};

export const postBook = async function (bookFormData) {
  console.log(bookFormData);
  const url = `http://localhost:5211/Books`;
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookFormData),
  });
  console.log(response);

  const data = await response.json();
};

export const getMovies = async function () {
  const url = `${process.env.HABITS_API}/Movies`;
  const data = await fetch(url);
  console.log(data);
  const movies = await data.json();
  console.log(movies);

  return movies;
};

export const getMovie = async function (id) {
  const url = `${process.env.HABITS_API}/Movies/${id}`;
  const data = await fetch(url);
  const movie = await data.json();

  if (!movie) notFound();

  return movie;
};

export const postMovie = async function (movieFormData) {
  const url = `http://localhost:5211/Movies`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieFormData),
  });

  const data = await response.json();
};

export const getSeries = async function () {
  const url = `${process.env.HABITS_API}/Series`;
  const data = await fetch(url);
  const series = await data.json();

  console.log(series);

  return series;
};

export const getSerie = async function (id) {
  const url = `${process.env.HABITS_API}/Series/${id}`;
  const data = await fetch(url);
  const serie = await data.json();

  if (!serie) notFound();

  return serie;
};

export const postSeries = async function (seriesFormData) {
  const url = `http://localhost:5211/Series`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(seriesFormData),
  });

  const data = await response.json();
};

export const getMusicAlbuns = async function () {
  const url = `${process.env.HABITS_API}/MusicAlbuns`;
  const data = await fetch(url);
  const musicAlbuns = await data.json();

  return musicAlbuns;
};

export const getMusicAlbum = async function (id) {
  const url = `${process.env.HABITS_API}/MusicAlbuns/${id}`;
  const data = await fetch(url);
  const musicAlbum = await data.json();

  if (!musicAlbum) notFound();

  return musicAlbum;
};

export const postMusicAlbum = async function (musicAlbumFormData) {
  const url = `http://localhost:5211/MusicAlbuns`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(musicAlbumFormData),
  });

  const data = await response.json();
};

export const getHistory = async function (id) {
  const url = `${process.env.HABITS_API}/UserHabits/${id}`;
  console.log(url);
  const data = await fetch(url);
  const history = await data.json();

  if (!history) notFound();

  return history;
};

export const postHabit = async function (historicFormData) {
  console.log(historicFormData);
  const url = `http://localhost:5211/UserHabits`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(historicFormData),
  });

  const data = await response.json();
};

export const getHabits = async function (habitId) {
  const url = `http://localhost:5211/Habits/${habitId}`;
  console.log(url);
  const data = await fetch(url);
  console.log(data);
  const history = await data.json();

  console.log(history);

  if (!history) notFound();

  return history;
};

export const updateHistory = async function (habitId, data) {
  const url = `http://localhost:5211/Habits/${habitId}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update history");
  }

  return response.json();
};
