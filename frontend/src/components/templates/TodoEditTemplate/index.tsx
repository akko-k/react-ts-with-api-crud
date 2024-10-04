import { FC } from 'react';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import styles from './styles.module.css';

export const TodoEditTemplate: FC = () => {
  const { todoList, updateTodo } = useContext(TodoContext);
  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ todoList, updateTodo });

  if (!todo) {
    return (
      <div className={styles.container}>
        <div>Todoが見つかりませんでした</div>
      </div>
    );
  }
  return (
    <BaseLayout title="Todo Edit">
      <form className={styles.container} onSubmit={handleUpdateTodo}>
        <section className={styles.common}>
          <InputForm
            value={inputTitle}
            placeholder={'タイトル'}
            onChange={handleChangeTitle}
          />
        </section>
        <section className={styles.common}>
          <TextArea
            value={inputContent}
            placeholder={'内容'}
            onChange={handleChangeContent}
          />
        </section>
        <section className={styles.common}>
          <CommonButton label="更新" type="submit" />
        </section>
      </form>
    </BaseLayout>
  );
};
