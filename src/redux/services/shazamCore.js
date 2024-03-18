import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf8c817e16msh0ed12b14b5f6f75p196d73jsnce6c947bd5b0',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};


fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
.then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'cf8c817e16msh0ed12b14b5f6f75p196d73jsnce6c947bd5b0');
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world',
        }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi


