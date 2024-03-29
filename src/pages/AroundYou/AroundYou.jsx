import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../../components";
import { useGetSongsByCountryQuery } from "../../redux/services/shazamCore";
import "./AroundYou.css";
const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const apiKey = "at_2voFuWgLq1ZzK6ZjDDwLz6Zxf0qhw";

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`)
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  });
  if (isFetching && loading)
    return <Loader title="Loading Songs around you..." />;

  if (error && country !== "") return <Error />;

  return (
    <div className="around-you-container">
      <h2 className="around-you-title">Music Around You</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
