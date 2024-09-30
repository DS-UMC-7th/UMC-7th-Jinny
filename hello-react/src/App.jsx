import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    name: "jinhyo",
    age: 22,
    nickname: "jinny",
  });

  const updateCity = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      city: "서울",
    }));
  };

  const increaseAge = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      age: prevPerson.age + 1,
    }));
  };

  return (
    <>
      <h1>이름: {person.name}</h1>
      <h2>나이: {person.age}</h2>
      <h3>닉네임: {person.nickname}</h3>
      {person.city && <h4>도시: {person.city}</h4>}
      <button onClick={updateCity}>도시 추가</button>
      <button onClick={increaseAge}>나이 증가</button>
    </>
  );
}

export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncreaseNumber = () => {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleIncreaseNumber}>숫자 증가</button>
//     </>
//   );
// }
// export default App;

// import List from "./components/List";

// function App() {
//   const nickname = "jinny";
//   const pink = "핑크";
//   const array = ["REACT", "NEXT", "VUE", "SVELTE", "ANGULAR", "REACT-NATIVE"];
//   return (
//     <>
//       <strong className="school">덕성여대</strong>
//       <p style={{ color: "pink", fontWeight: "bold", fontSize: "3rem" }}>{nickname}/ㅈㅎ</p>
//       <h1>{`${nickname}는 ${pink} 색을 좋아합니다.`}</h1>
//       <ul>
//         {array.map((yaho, idx) => (
//           <List key={idx} tech={yaho} />
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;
