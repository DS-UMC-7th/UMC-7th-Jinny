import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  // 투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([{ id: 1, task: "투두 만들어보기" }]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("입력해주세요");
      return;
    }
    setTodos((prev) => [...prev, { id: Math.floor(Math.random() * 100) + 2, task: text }]);
    setText("");
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? { ...item, task: text } : item)));
    setEditingId("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addTodo}>할 일 등록</Button>
      </form>
      <div>
        {todos.map((todo, _) => (
          <div key={todo.id} style={{ display: "flex", gap: "20px" }}>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}번</p>
                <p>{todo.task}</p>
              </div>
            )}

            {/* 수정중 상태일 때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}번</p>
                <Input defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
            {/* editingId !== todo.id 수정이 아닌상태 */}
            {/* editingId === todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>수정 완료</Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)}>수정 진행</Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
