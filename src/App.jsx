import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Layout from './components/Layout';
import Favorites from './components/Favorites';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchBar />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
