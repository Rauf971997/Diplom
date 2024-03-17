const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf8c817e16msh0ed12b14b5f6f75p196d73jsnce6c947bd5b0',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};


fetch(url,options)
.then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));