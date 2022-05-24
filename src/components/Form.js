import { useState } from 'react';
import DataMeme from '../DataMeme';

export default function Form() {
  function getImage() {
    let memeArr = DataMeme.data.memes;
    let url = memeArr[Math.floor(Math.random() * (memeArr.length - 1))].url;
    memeState(url);
  }
  const [memeImage, memeState] = useState('');

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
        <img src={memeImage} className='meme-image' />
      </form>
    </main>
  );
}
