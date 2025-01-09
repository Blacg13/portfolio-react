import './App.css';
import Title from '/src/components/Title/Title';
import ModeSwitcher from '/src/components/ModeSwitcher/ModeSwitcher';
import Tabs from '/src/components/Tabs/Tabs';

function App() {
  return (
    <>
      <header>
        <Title /> <ModeSwitcher />
      </header>
      <main>
        <h2>Portfolio</h2>
        <Tabs />
      </main>
    </>
  );
}

export default App;
