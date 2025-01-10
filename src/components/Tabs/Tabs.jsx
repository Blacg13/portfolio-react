import style from './Tabs.module.css';

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      tabTopic: 'about',
      tabTitle: 'about me',
      tabContent: [
        "I'm passionate about programming and designing intuitive website interfaces",
        "Currently training to become a frontenddeveloper, I'm diving deep into JavaScript and React with a relentless curiosity to master and optimize every line of code.",
      ],
    },
    {
      id: 2,
      tabTopic: 'project',
      tabTitle: 'rock paper scissors',
      projectDate: new Date(2024, 2),
      projectLanguages: ['HTML', 'CSS', 'JavaScript'],
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: 'https://github.com/Blacg13/IF3_PierrePapierCiseaux',
      liveProjectLink: 'https://www.whatbeatsrock.com/',
    },
    {
      id: 3,
      tabTopic: 'project',
      tabTitle: 'Integrity Project',
      projectDate: new Date(2025, 1),
      projectLanguages: ['WordPress', 'React', 'Scss'],
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: null,
      liveProjectLink: 'https://www.integrityproject.be/',
    },
    {
      id: 4,
      tabTopic: 'project',
      tabTitle: 'FestivalFlow',
      projectDate: new Date(2024, 10),
      projectLanguages: ['nodeJS', 'React', 'MongoDB', 'CSS'],
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: 'https://github.com/Blacg13/FestivalFlow',
      liveProjectLink: null,
    },
    {
      id: 5,
      tabTopic: 'about',
      tabTitle: 'gitignore',
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: null,
      liveProjectLink: null,
    },
  ];

  return (
    <ul>
      {tabs.map((tab) => {
        return (
          <li>
            <Tab
              tabId={tab.tabTitle + tab.id}
              topic={tab.tabTopic}
              title={tab.tabTitle}
              date={tab.projectDate}
              language={tab.projectLanguages}
              content={tab.tabContent}
              githubLink={tab.githubProjectLink}
              liveLink={tab.liveProjectLink}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default Tabs;

const Tab = ({
  tabId,
  topic,
  title,
  date,
  language,
  content,
  githubLink,
  liveLink,
}) => {
  return (
    <section id={tabId} className={style[`${topic}`]}>
      <div className={style['tab-spin-title']}>
        <h3>{title}</h3>
      </div>
      <div className={style['tab-content']}>
        <p>{content}</p>
        <div className={style['tab-links']}>
          <a href={githubLink}>See the code on github</a>
          <a href={liveLink}>See the hosted site</a>
        </div>
      </div>
    </section>
  );
};
