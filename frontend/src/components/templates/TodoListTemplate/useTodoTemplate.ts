import { useState, useMemo, useCallback } from 'react';
import { TodoType } from '../../../interfaces/Todo';
import { EventType } from '../../../interfaces/Event';

type Param = {
  todoList: Array<TodoType>;
  deleteTodo: (id: number) => Promise<void>;
};

type StatesType = {
  searchKeyword: string;
  filteredTodoList: Array<TodoType>;
};

type ActionType = {
  handleChangeSearchKeyword: EventType['onChangeInput'];
  handleDeleteTodo: (id: number, title: string) => void;
};

/**
 * use Todo
 */
export const useTodoTemplate = ({ todoList, deleteTodo }: Param) => {
  //検索ワード
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // 検索ワードを更新
  const handleChangeSearchKeyword: EventType['onChangeInput'] = (e) =>
    setSearchKeyword(e.target.value);

  const handleDeleteTodo = useCallback(
    (id: number, title: string) => {
      const confirmed = window.confirm(`「${title}」を削除しますか？`);
      if (!confirmed) return;
      deleteTodo(id);
    },
    [deleteTodo],
  );

  //検索ワードに一致するTodoリストを取得
  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo) =>
      todo.title.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [todoList, searchKeyword]);

  const states: StatesType = {
    searchKeyword,
    filteredTodoList,
  };

  const actions: ActionType = {
    handleChangeSearchKeyword,
    handleDeleteTodo,
  };

  return [states, actions] as const;
};
