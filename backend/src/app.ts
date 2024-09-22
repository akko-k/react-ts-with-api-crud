import express, {
  Request,
  Response,
} from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(cors());

app.get(
  '/',
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const todos =
        await prisma.todo.findMany();
      res.json(todos);
    } catch (error) {
      console.error(
        'Error fetching todos:',
        error
      );
      res.status(500).json({
        message:
          'Internal server error',
      });
    }
  }
);

export default app;
