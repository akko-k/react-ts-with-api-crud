import React, {
  useEffect,
  useState,
} from 'react';
import './App.css';

interface TodoType {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [todoList, setTodoList] =
    useState<Array<TodoType>>([]);

  useEffect(() => {
    // APIからデータを取得する
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/'
        );
        const data =
          await response.json();
        setTodoList(data);
      } catch (error) {
        console.error(
          'Error fetching data:',
          error
        );
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODOリスト</h1>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
