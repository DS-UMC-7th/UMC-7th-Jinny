import MoviesPage from "../components/MoviesPage";

const UpComing = () => {
  return (
    <div>
      <h3 style={{ color: "white" }}>개봉 예정중인🍿</h3>
      <MoviesPage category={"upcoming"} page={1} />
    </div>
  );
};

export default UpComing;
