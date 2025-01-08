import style from './Tab.module.css';
const Tab = ({
  tabTopic,
  tabTitle,
  tabContent,
  githubTabLink,
  liveTabLink,
}) => {
  return (
    <section className={style[{ tabTopic }]}>
      <div className={style['tab-spin-title']}>
        <h3>{tabTitle}</h3>
      </div>
      <div className={style['tab-content']}>
        <p>{tabContent}</p>
        <button>
          <a href={githubTabLink}>See the code on github</a>
        </button>
        <button>
          <a href={liveTabLink}>See the hosted site</a>
        </button>
      </div>
    </section>
  );
};

export default Tab;
