import { useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import { TodoType } from '../../../interfaces/Todo';
import { EventType } from '../../../interfaces/Event';

type Param = {
  todoList: Array<TodoType>;
  updateTodo: (id: number, newTitle: string, newContent: string) => void;
};

type StatesType = {
  todo: TodoType | undefined;
  inputTitle: string;
  inputContent: string;
};

type ActionType = {
  handleChangeTitle: EventType['onChangeInput'];
  handleChangeContent: EventType['onChangeTextArea'];
  handleUpdateTodo: EventType['onSubmitForm'];
};

/**
 * useTodoEditTemplate
 */
export const useTodoEditTemplate = ({ todoList, updateTodo }: Param) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = useMemo(() => {
    return todoList.find((todo) => todo.id === Number(id));
  }, [todoList, id]);

  const [inputTitle, setInputTitle] = useState(todo?.title || '');
  const [inputContent, setInputContent] = useState(todo?.content || '');

  //title 更新
  const handleChangeTitle: EventType['onChangeInput'] = useCallback(
    (e) => setInputTitle(e.target.value),
    [],
  );

  //content 更新
  const handleChangeContent: EventType['onChangeTextArea'] = useCallback(
    (e) => setInputContent(e.target.value),
    [],
  );

  //Todo 更新
  const handleUpdateTodo: EventType['onSubmitForm'] = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle && inputContent) {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [todo?.id, inputTitle, inputContent, updateTodo, navigate],
  );

  const states: StatesType = {
    todo,
    inputTitle,
    inputContent,
  };

  const actions: ActionType = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [states, actions] as const;
};
