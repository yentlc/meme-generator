import { useState } from 'react';
import DataMeme from '../DataMeme';

export default function Form() {
  function getImage() {
    let memeArr = DataMeme.data.memes;
    let url = memeArr[Math.floor(Math.random() * (memeArr.length - 1))].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/9ehk.jpg',
  });

  return (
    <main>
      <form className='form'>
        <input type='text' className='text-input-up' placeholder='Up text' />
        <input
          type='text'
          className='text-input-down'
          placeholder='Bottom text'
        />
        <button type='button' onClick={getImage}>
          Get a new meme image <i className='fa-solid fa-image'></i>
        </button>
        <img src={meme.randomImage} className='meme-image' />
      </form>
    </main>
  );
}
