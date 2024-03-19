import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf8c817e16msh0ed12b14b5f6f75p196d73jsnce6c947bd5b0',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};


// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
// .then((response) => response.json())
// .then((response) => console.log(response))
// .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'cf8c817e16msh0ed12b14b5f6f75p196d73jsnce6c947bd5b0');
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
        getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `v2/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
      }),
    });
    
    export const {
      useGetTopChartsQuery,
      useGetSongsByGenreQuery,
      useGetSongsByCountryQuery,
      useGetSongsBySearchQuery,
      useGetArtistDetailsQuery,
      useGetSongDetailsQuery,
      useGetSongRelatedQuery,
    } = shazamCoreApi;