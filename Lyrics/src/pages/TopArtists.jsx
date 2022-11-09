import React from "react";
import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => {
          return (
            <div className="flex gap-2">
              <span className="text-white font-bold"> {i + 1}</span>
              <ArtistCard key={track.key} track={track} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopArtists;
