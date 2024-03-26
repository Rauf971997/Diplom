import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ArtistCard, Error, Loader } from '../../components';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

const TrendingArtist = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
  <FaStar className="inline-block mr-2" /> Trending artists
</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default TrendingArtist;

