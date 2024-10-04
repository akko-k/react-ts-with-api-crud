import { FC } from 'react';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import styles from './styles.module.css';

export const TodoCreateTemplate: FC = () => {
  const { addTodo } = useContext(TodoContext);
  const [
    { inputTitle, inputContent },
    {
      handleCreateTitle,
      handleCreateContent,
      handleCreateTodo,
    },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title="Create Todo">
      <form onSubmit={handleCreateTodo}>
        <section className={styles.common}>
          <InputForm
            value={inputTitle}
            placeholder={'タイトル'}
         onChange={handleCreateTitle}
          />
        </section>
        <section className={styles.common}>
          <TextArea
            value={inputContent}
            placeholder={'内容'}
            onChange={handleCreateContent}
          />
        </section>
        <section className={styles.common}>
          <CommonButton
            label="追加"
            type="submit"
          />
        </section>
      </form>
    </BaseLayout>
  );
};
