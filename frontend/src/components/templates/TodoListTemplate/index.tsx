import { FC } from 'react';
import { TodoList } from '../../organisms/TodoList';
import { SearchForm } from '../../atoms/SearchForm';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { useTodoTemplate } from './useTodoTemplate';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';

/**
 * TodoTemplate component.
 *
 * @component
 * @returns {JSX.Element} TodoListTemplate component.
 */
export const TodoListTemplate: FC = () => {
  const { todoList, deleteTodo } = useContext(TodoContext);

  const [
    { searchKeyword, filteredTodoList },
    { handleChangeSearchKeyword, handleDeleteTodo },
  ] = useTodoTemplate({ todoList, deleteTodo });

  return (
    <BaseLayout title="Todo List">
      <section className={styles.common}>
        {/* Todo検索 */}
        <SearchForm
          value={searchKeyword}
          placeholder={'Todoを検索'}
          onChange={handleChangeSearchKeyword}
        />
        {/* Todoリスト一覧 */}
        <section className={styles.common}></section>
        {filteredTodoList.length > 0 ? (
          <TodoList
            filteredTodoList={filteredTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        ) : (
          <p className={styles.noTodos}>Todoがありません</p>
        )}
      </section>
    </BaseLayout>
  );
};
