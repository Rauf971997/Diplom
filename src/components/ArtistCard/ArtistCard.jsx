import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ArtistCard.css";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="artist-card"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track?.images?.coverart} className="artist-card__image" />
      <p className="artist-card__title">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
