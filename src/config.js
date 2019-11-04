const apiKey = '7bd61d5db2476d1307ff393ff142924b';
export const hostUrl = 'https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p/w1280';

export const endpoints = {
  mostPopularMovies: () => `${hostUrl}/movie/popular?api_key=${apiKey}`,
  genres: () => `${hostUrl}/genre/movie/list?api_key=${apiKey}`,
  genreMovies: (id) => `${hostUrl}/genre/${id}/movies?api_key=${apiKey}`,
};

export const getImageUrl = (path) => `${imageUrl}${path}`;
