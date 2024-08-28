import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import trackService from "../services/trackService";


const TrackForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const { trackId } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setArtist(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const track = { title, artist };
      if (trackId) {
        track._id = trackId;
        await trackService.updateTrack(track);

      } else {
        await trackService.createTrack(track);
      }
      navigate("/");
    } catch (error) {
      console.error("Error adding track:", error);
    }
  };

  return (
    <div>
      <h2>{trackId ? "Edit Track " : "Add Track"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>

        <br />
        
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={artist}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">{trackId ? "Update Track" : "Add Track"}</button>
      </form>
    </div>
  );
};

export default TrackForm;