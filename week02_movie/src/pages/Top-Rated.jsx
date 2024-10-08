import MoviesPage from "../components/MoviesPage";

const TopRated = () => {
  const TopRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1&region=KR`;

  return (
    <div>
      <h3 style={{ color: "white" }}>높은 평가를 받은🍿</h3>
      <MoviesPage url={TopRatedMoviesUrl} />
    </div>
  );
};

export default TopRated;
