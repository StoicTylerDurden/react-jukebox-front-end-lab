import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TrackForm from "./components/TrackForm";

const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-track" element={<TrackForm />} />
        <Route path="/edit-track/:trackId" element={<TrackForm />} />
      </Routes>
    </>
  );
};

export default App;