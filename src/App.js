import "./App.css";
import MainPage from "./components/MainPage";
import SavedCities from "./components/SavedCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/1024594853008506920/1048246568341479424/wallpaperflare.com_wallpaper.jpg")`,
        }}
      >
        <div className="spacer"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/saved" element={<SavedCities />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
