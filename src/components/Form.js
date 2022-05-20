export default function Form() {
  return (
    <main>
      <form className='form'>
        <input type='text' className='text-input-up' placeholder='Up text' />
        <input
          type='text'
          className='text-input-down'
          placeholder='Bottom text'
        />
        <button>
          Get a new meme image <i class='fa-solid fa-image'></i>
        </button>
      </form>
    </main>
  );
}
