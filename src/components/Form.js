import { useState, useEffect } from 'react';

export default function Form() {
  //state meme object
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/9ehk.jpg',
  });

  //SAVE DATA FROM API IN A STATE VAR
  const [allMemes, setAllMemes] = useState({});

  //CALL TO API :
  // solo se corre una vez para descargar los memes y guardar los datos en "allMemes"
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((rsp) => rsp.json())
      .then((data) => setAllMemes(data));
    console.log('got the data');
  }, []);

  //MEME IMAGE
  function getImage() {
    let memeArr = allMemes.data.memes; // cambie "dataMeme" por "allMemes" - para usar la data llamada directamente dsd la API
    let url = memeArr[Math.floor(Math.random() * (memeArr.length - 1))].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  //MEME TEXT
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }
  return (
    <main>
      <form className='form'>
        <input
          type='text'
          className='text-input-up'
          placeholder='Up text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          className='text-input-down'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button type='button' onClick={getImage}>
          Get a new meme image <i className='fa-solid fa-image'></i>
        </button>
        <div className='meme'>
          <img src={meme.randomImage} className='meme-image' alt='meme' />
          <h2 className='topText'>{meme.topText}</h2>
          <h2 className='bottomText'>{meme.bottomText}</h2>
        </div>
      </form>
    </main>
  );
}
