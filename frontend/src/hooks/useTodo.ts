import { useState, useCallback } from 'react';
import {
  fetchTodoListApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from '../apis/todoApi';
import { TodoType } from '../interfaces/Todo';
import { useEffect } from 'react';

/**
 * use Todo
 */
export const useTodo = () => {
  //todoリスト
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);

  const fetchTodoList = useCallback(async (): Promise<void> => {
    try {
      const data = await fetchTodoListApi();
      setTodoList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching todo list:', error);
      setTodoList([]);
    }
  }, []);

  //Todoリストに新規Todoリストを追加
  const addTodo = useCallback(
    async (inputTitle: string, inputContent: string) => {
      try {
        const newTodo = await createTodoApi(inputTitle, inputContent);
        if (typeof newTodo !== 'object') return;
        setTodoList([
          ...todoList,
          {
            id: newTodo.id,
            title: newTodo.title,
            content: newTodo.content,
          },
        ]);
      } catch (error: any) {
        console.log(error.message);
      }
    },
    [todoList],
  );

  //Todoリストを更新
  const updateTodo = useCallback(
    async (id: number, newTitle: string, newContent: string) => {
      try {
        const updatedTodo = await updateTodoApi(id, newTitle, newContent);
        setTodoList((prevTodoList) =>
          prevTodoList.map((todo) => (todo.id === id ? updatedTodo : todo)),
        );
      } catch (error: any) {
        console.log(error.message);
      }
    },
    [todoList],
  );

  //Todoリストを削除
  const deleteTodo = useCallback(
    async (id: number) => {
      try {
        const deletedTodo = await deleteTodoApi(id);
        if (typeof deletedTodo !== 'object') return;

        setTodoList((prevTodoList) =>
          prevTodoList.filter((todo) => todo.id !== deletedTodo.id),
        );
      } catch (error: any) {
        console.log(error.message);
      }
    },
    [todoList],
  );

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return {
    fetchTodoList,
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
