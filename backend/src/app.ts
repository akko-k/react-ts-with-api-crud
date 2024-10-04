import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(cors());

app.use(express.json());

/**
 * Todoリスト取得
 */
app.get('/', async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

/**
 * idに紐づくTodo取得
 */
app.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    });
    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
      });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error('Error fetching todo:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

/**
 * 新規追加
 */
app.post('/', async (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: 'Title and content are required',
    });
  }

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        content,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

/**
 * 更新
 */
app.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: 'Title and content are required',
    });
  }

  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

/**
 * 削除
 */
app.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const deletedTodo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletedTodo);
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

export default app;
