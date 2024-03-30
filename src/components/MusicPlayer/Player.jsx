import React, { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && activeSong?.hub?.actions?.[1]?.uri) {
      audioRef.current.src = activeSong.hub.actions[1].uri;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [activeSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  }, [seekTime]);

  return (
    <audio
      ref={audioRef}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    >
      <track kind="captions" src="" />
    </audio>
  );
};

export default Player;
