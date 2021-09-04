import React from 'react'
import FilmText from "./FilmInfo/FilmText";

const data = {
	name: 'Черный ястреб (2001)',
	img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/59a72eaa-3bf3-448b-8da4-5d5ed7375df8/300x450',
	actors: [{id:1, name:'Джош Хартнетт'},{id:2, name:'Юэн Макгрегор'},{id:3, name:'Эрик Бана'}],
	rating: '7.816',
	url: 'https://www.kinopoisk.ru/film/612/'
}


function App() {
  return (
  <div className='wrapper'>
		<h1 className="filmTitle">{data.name}</h1>
		<img src={data.img} alt="#" />

		<FilmText data={data.actors}/>
		<div className="rating">Рейтинг IMDB: <strong>{data.rating}</strong></div>
		<div className="linkFilm">{data.url}</div>

	</div>
  );
}

export default App;
