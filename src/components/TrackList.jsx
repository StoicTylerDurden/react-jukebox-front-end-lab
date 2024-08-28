import { Link } from "react-router-dom";
import trackService from "../services/trackService";

const TrackList = ({ tracks, setTracks, setCurrentTrack }) => {

  const handleDelete = async (trackId) => {
    try {
      await trackService.deleteTrack(trackId);
      const updatedTracks = tracks.filter((track) => track._id !== trackId);
      setTracks(updatedTracks);
    } catch (error) {
      console.error("Error deleting track:", error);
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <h2>Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            {track.title} by {track.artist}
            <Link to={`/edit-track/${track._id}`}>  Edit</Link>
            <button onClick={() => handleDelete(track._id)}> Delete</button>
            <button onClick={() => handlePlay(track)}> Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;