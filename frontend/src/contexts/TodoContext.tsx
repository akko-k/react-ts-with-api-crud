import { FC } from 'react';
import { createContext, ReactNode } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoType } from '../interfaces/Todo';

interface ContextInterface {
  todoList: Array<TodoType>;
  addTodo: (inputTitle: string, inputContent: string) => Promise<void>;
  updateTodo: (
    id: number,
    newTitle: string,
    newContent: string,
  ) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

interface Props {
  children: ReactNode;
}

export const TodoContext = createContext<ContextInterface>(
  {} as ContextInterface,
);

/**
 * TodoProvider component.
 *
 * @component
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
