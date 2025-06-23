function getImgUrl(name) {
   return new URL(`../assets/movie-covers/${name}`, import.meta.url).href; 
}

export { getImgUrl };

// This utility function constructs the URL for movie cover images