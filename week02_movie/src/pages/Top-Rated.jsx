import MoviesPage from "../components/MoviesPage";

const TopRated = () => {
  return (
    <div>
      <h3 style={{ color: "white" }}>높은 평가를 받은🍿</h3>
      <MoviesPage category={"top_rated"} page={1} />
    </div>
  );
};

export default TopRated;
