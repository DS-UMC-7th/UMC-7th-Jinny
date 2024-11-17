import MoviesPage from "../components/MoviesPage";

const Popular = () => {
  return (
    <div>
      <h3 style={{ color: "white" }}>인기있는🍿</h3>
      <MoviesPage category={"popular"} page={1} />
    </div>
  );
};

export default Popular;
