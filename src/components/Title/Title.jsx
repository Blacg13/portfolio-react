import style from './Title.module.css';
const Title = () => {
  return (
    <section className={style['title-all']}>
      <div className={style['title-me']}>
        <img
          src='/src/assets/img/resume_pic.jpg'
          alt='photo corporate of Bénédicte Lagasse'
        />
        <div className={style['title-title']}>
          <h1>Bénédicte Lagasse</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div className={style['title-links']}>
        <a href='/src/assets/files/CV_Lagasse_frontendDev.pdf'>
          <img
            src='/src/assets/icons/file-icon.html'
            alt='file icon'
            id='file-icon'
          />
          <p>resume</p>
        </a>
        <a href='https://github.com/Blacg13'>
          <img src='/src/assets/icons' alt='github logo' id='logo-github' />
          <p>github</p>
        </a>
        <a href='https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lagasse/'>
          <img src='' alt='linkedin logo' id='logo-linkedin' />
          <p>linkedin</p>
        </a>
      </div>
    </section>
  );
};
export default Title;
