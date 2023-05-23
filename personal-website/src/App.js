import './App.css';
import './assests/css/fonts.css';
import NavBar from './components/NavBar/NavBar';
import Education from './components/Education/Education';
import ExperienceSection from './components/Experience/ExperienceSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Education/>
      <ExperienceSection/>
      <ProjectsSection/>
      <Footer/>
    </div>
  );
}

export default App;
