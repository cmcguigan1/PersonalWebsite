import './App.css';
import './assests/css/fonts.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Description from './components/Description/Description';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' exact element ={<MainPage/>}/>
        <Route path = '/Description' exact element ={<Description/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
