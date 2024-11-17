import MoviesPage from "../components/MoviesPage";

const NowPlaying = () => {
  return (
    <div>
      <h3 style={{ color: "white" }}>현재상영 중인🍿</h3>
      <MoviesPage category={"now_playing"} page={1} />
    </div>
  );
};

export default NowPlaying;
