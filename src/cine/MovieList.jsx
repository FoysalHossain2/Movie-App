import { data } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* <!-- Begin Card --> */}

        {data.map((movie, id) => (
          <MovieCard key={id} movie={movie} />
        ))}

        {/* <!-- End Card --> */}
      </div>
    </div>
  );
};

export default MovieList;
