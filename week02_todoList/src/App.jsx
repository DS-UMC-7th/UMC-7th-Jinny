import "./App.css";

function App() {
  const nickname = "jinny";
  const pink = "핑크";
  const array = ["REACT", "NEXT", "VUE", "SVELTE", "ANGULAR", "REACT-NATIVE"];
  return (
    <>
      <strong className="school">덕성여대</strong>
      <p style={{ color: "pink", fontWeight: "bold", fontSize: "3rem" }}>{nickname}/ㅈㅎ</p>
      <h1>{`${nickname}는 ${pink} 색을 좋아합니다.`}</h1>
      <ul>
        {array.map((yaho, idx) => (
          <li key={idx}>{yaho}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
