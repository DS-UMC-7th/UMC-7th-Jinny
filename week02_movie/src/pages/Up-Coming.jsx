import MoviesPage from "../components/MoviesPage";

const UpComing = () => {
  const UpComingMoviesUrl = `  https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1&region=KR`;

  return (
    <div>
      <h3 style={{ color: "white" }}>개봉 예정중인🍿</h3>
      <MoviesPage url={UpComingMoviesUrl} />
    </div>
  );
};

export default UpComing;
