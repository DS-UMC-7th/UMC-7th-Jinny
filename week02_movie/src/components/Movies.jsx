import { MOVIES } from "../../public/mocks/movies";
import Card from "./Card";

const Movies = () => {
  console.log(MOVIES.results); // 배열
  console.log(MOVIES); // 객체

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", rowGap: "15px" }}>
        {MOVIES.results.map((item) => {
          {
            return <Card key={item.id} id={item.id} poster_path={item.poster_path} />;
          }
        })}
      </div>
    </>
  );
};

export default Movies;
