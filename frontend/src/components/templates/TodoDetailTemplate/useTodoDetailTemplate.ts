import { useCallback, useEffect, useState } from 'react';
import { fetchTodoDetailApi } from '../../../apis/todoApi';
import { TodoType } from '../../../interfaces/Todo';
import { useParams } from 'react-router-dom';

type StatesType = {
  todo: TodoType | undefined;
};
/**
 * useTodoDetailTemplate
 */

export const useTodoDetailTemplate = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<TodoType | undefined>(undefined);

  const fetchTodoDetail = useCallback(async () => {
    if (id && !isNaN(Number(id))) {
      const data = await fetchTodoDetailApi(Number(id));
      setTodo(data);
    }
  }, [id]);

  useEffect(() => {
    fetchTodoDetail();
  }, [fetchTodoDetail]);

  const states: StatesType = { todo };

  return [states] as const;
};
