import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/CharacterList';
import { Route, Routes } from 'react-router-dom';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path='/search' element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
