const url = 'https://any-anime.p.rapidapi.com/anime/img';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a82818ff9msh4a4c19df9c680eep141ff7jsne0d1e9fa6889',
		'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
	}
};

try {
	fetch(url, options).then((response)=>{
        console.log(response.json())
    })
} catch (error) {
	console.error(error);
}