import MoviesPage from "../components/MoviesPage";

const Popular = () => {
  const popularMoviesUrl = `/movie/popular?language=ko&page=1&region=KR`;

  return (
    <div>
      <h3 style={{ color: "white" }}>인기있는🍿</h3>
      <MoviesPage url={popularMoviesUrl} />
    </div>
  );
};

export default Popular;
