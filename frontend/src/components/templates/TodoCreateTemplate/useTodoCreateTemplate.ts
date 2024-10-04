import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import { EventType } from '../../../interfaces/Event';

/**
 * useTodoCreateTemplate
 */
type Param = {
  addTodo: (inputTitle: string, inputContent: string) => void;
};

type StatesType = {
  inputTitle: string;
  inputContent: string;
};

type ActionType = {
  handleCreateTitle: EventType['onChangeInput'];
  handleCreateContent: EventType['onChangeTextArea'];
  handleCreateTodo: EventType['onSubmitForm'];
};

export const useTodoCreateTemplate = ({ addTodo }: Param) => {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');

  //title 追加
  const handleCreateTitle: EventType['onChangeInput'] = useCallback(
    (e) => setInputTitle(e.target.value),
    [],
  );

  //content 追加
  const handleCreateContent: EventType['onChangeTextArea'] = useCallback(
    (e) => setInputContent(e.target.value),
    [],
  );

  const handleCreateTodo: EventType['onSubmitForm'] = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle && inputContent) {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate],
  );
  const states: StatesType = {
    inputTitle,
    inputContent,
  };

  const actions: ActionType = {
    handleCreateTitle,
    handleCreateContent,
    handleCreateTodo,
  };

  return [states, actions] as const;
};
