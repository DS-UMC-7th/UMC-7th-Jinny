import { useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { todos, text, setText, editingId, setEditingId, editText, setEditText, handleSubmit, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div id="root">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addTodo}>할 일 등록</Button>
      </form>
      <div className="todoDiv">
        {todos.map((todo, _) => (
          <div className="showDiv" key={todo.id} style={{ display: "flex", gap: "20px", flex: "1" }}>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "5px", flex: "1" }}>
                <p>{todo.id}번</p>
                <p>{todo.task}</p>
              </div>
            )}

            {/* 수정중 상태일 때 */}
            {editingId === todo.id && (
              <div className="editingDiv" key={todo.id} style={{ display: "flex", gap: "5px" }}>
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
    </div>
  );
}

export default App;
