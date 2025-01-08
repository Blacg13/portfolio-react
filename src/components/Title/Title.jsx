import style from './Title.module.css';
const Title = () => {
  return (
    <section className={style['title-all']}>
      <div className={style['title-me']}>
        <img src='' alt='photo corporate of Bénédicte Lagasse' />
        <h1>Bénédicte Lagasse</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className={style['title-links']}>
        <button>
          <a href=''>
            <img src='' alt='file icon' />
            <p>resume</p>
          </a>
        </button>
        <button>
          <a href='https://github.com/Blacg13'>
            <img src='' alt='github logo' />
            <p>github</p>
          </a>
        </button>
        <button>
          <img src='' alt='linkedin logo' />
          <p>linkedin</p>
        </button>
      </div>
    </section>
  );
};
export default Title;
