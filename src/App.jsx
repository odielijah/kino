import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import MovieDetails from "./Pages/MovieDetails";
import MyList from "./Pages/MyList";
import Profile from "./Pages/Profile";

// App.jsx
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen text-white">
        <Header />
        <Sidebar />

        <main className="md:ml-20 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/movie-detail" element={<MovieDetails />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
