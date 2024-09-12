import express, {
  Request,
  Response,
} from 'express';

interface TodoType {
  id: number;
  title: string;
  content: string;
}

const INIT_TODO_LIST: Array<TodoType> =
  [
    {
      id: 1,
      title: 'ご飯を作る',
      content:
        '冷蔵庫にある食材で簡単なおかずを作る',
    },
    {
      id: 2,
      title: '洗濯する',
      content:
        '洗濯乾燥機に洗濯物を入れてスイッチを押す',
    },
  ];
const app = express();
app.get(
  '/',
  (req: Request, res: Response) => {
    res.send(INIT_TODO_LIST);
  }
);

export default app;
