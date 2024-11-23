

const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=385fb5fb9f8cebd4e1924b27b84ba8a3';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("result",result);
        
        const movieList = document.getElementById('movie-list');
        result.results.forEach((movie) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
              
             
            `;
            movieList.appendChild(movieElement);
        });
    } catch (error) {
        console.error(error);
    }
};

fetchMovies();

