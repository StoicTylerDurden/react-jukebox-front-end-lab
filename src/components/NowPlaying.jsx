const NowPlaying = ({ track }) => {
    if (!track) return null;
  
    return (
      <div>
        <h2>Now Playing</h2>

        <p>Title: {track.title}</p>

        <p> Artist: {track.artist}</p>
      </div>
    );
  };
  
  export default NowPlaying;