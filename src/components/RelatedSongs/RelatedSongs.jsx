import React from 'react';
import SongBar from '../SongBar/SongBar';
import "./RelatedSongs.css";
const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  return (
    <div className="related-songs-container">
      <h1 className="related-songs-title ">Related Songs:</h1>

      <div className="related-songs-list">
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
