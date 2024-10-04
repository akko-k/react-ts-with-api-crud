import { FC } from 'react';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { BaseLayout } from '../../organisms/BaseLayout';
import { useTodoDetailTemplate } from './useTodoDetailTemplate';
import styles from './styles.module.css';

export const TodoDetailTemplate: FC = () => {
  const [{ todo }] = useTodoDetailTemplate();

  if (!todo) {
    return (
      <div className={styles.container}>
        <div>Todoが見つかりませんでした</div>
      </div>
    );
  }
  return (
    <BaseLayout title="Todo Detail">
      <div className={styles.container}>
        <section className={styles.common}>
          <InputForm value={todo.title} disabled placeholder={'タイトル'} />
        </section>
        <section className={styles.common}>
          <TextArea value={todo.content} disabled placeholder={'内容'} />
        </section>
      </div>
    </BaseLayout>
  );
};
