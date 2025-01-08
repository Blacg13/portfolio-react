import './App.css';
import Title from './components/Title/Title';
import ModeSwitcher from './components/ModeSwitcher/ModeSwitcher';
import Tab from './components/Tab/Tab';

function App() {
  return (
    <>
      <header>
        <Title /> <ModeSwitcher />
      </header>
      <main>
        <Tab />
      </main>
    </>
  );
}

export default App;
