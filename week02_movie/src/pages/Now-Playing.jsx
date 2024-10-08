import MoviesPage from "../components/MoviesPage";

const NowPlaying = () => {
  const NowPlayingMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR`;

  return (
    <div>
      <h3 style={{ color: "white" }}>현재상영 중인🍿</h3>
      <MoviesPage url={NowPlayingMoviesUrl} />
    </div>
  );
};

export default NowPlaying;
