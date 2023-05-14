import './App.css';
import './assests/css/fonts.css';
import NavBar from './components/NavBar/NavBar';
import Education from './components/Education/Education';
import ExperienceSection from './components/Experience/ExperienceSection';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Education/>
      <ExperienceSection/>
    </div>
  );
}

export default App;
