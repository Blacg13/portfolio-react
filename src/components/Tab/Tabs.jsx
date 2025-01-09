import Tab from './Tab/Tab';

const Tabs = () => {
  const tabs = [
    {
      tabTopic: 'about',
      tabTitle: 'about me',
      tabContent: [
        "I'm passionate about programming and designing intuitive website interfaces",
        "Currently training to become a frontenddeveloper, I'm diving deep into JavaScript and React with a relentless curiosity to master and optimize every line of code.",
      ],
    },
    {
      tabTopic: 'projects',
      tabTitle: 'rock paper scissors',
      date: Date(March, 2024),
      language: ['HTML', 'CSS', 'JavaScript'],
      tabContent: ['bloub', 'blabb'],
      githubTabLink: 'https://github.com/Blacg13/IF3_PierrePapierCiseaux',
      liveTabLink: 'https://www.whatbeatsrock.com/',
    },
    {
      tabTopic: 'projects',
      tabTitle: 'Integrity Project',
      date: Date(February, 2025),
      language: ['WordPress', 'React', 'Scss'],
      tabContent: ['bloub', 'blabb'],
      githubTabLink: null,
      liveTabLink: 'https://www.integrityproject.be/',
    },
    {
      tabTopic: 'projects',
      tabTitle: 'FestivalFlow',
      date: Date(November, 2024),
      language: ['nodeJS', 'React', 'MongoDB', 'CSS'],
      tabContent: ['bloub', 'blabb'],
      githubTabLink: 'https://github.com/Blacg13/FestivalFlow',
      liveTabLink: null,
    },
    {
      tabTopic: 'about',
      tabTitle: 'gitignore',
      tabContent: ['bloub', 'blabb'],
      githubTabLink: null,
      liveTabLink: null,
    },
  ];

  return (
    <div>
      <p>hello</p>
      <Tab />
    </div>
  );
};
export default Tabs;
