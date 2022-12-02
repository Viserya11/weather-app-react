import './App.css';
import MainPage from './components/MainPage';
import SavedCities from './components/SavedCities';
import SearchCities from './components/SearchCities';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    
    
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/saved" element={<SavedCities />} />
          <Route path="/search" element={<SearchCities />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
