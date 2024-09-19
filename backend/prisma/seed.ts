import {
  PrismaClient,
  Todo,
} from '@prisma/client';

const prisma = new PrismaClient();

const todoData: Array<Todo> = [
  {
    id: 1,
    title: 'ご飯を作る',
    content:
      '冷蔵庫にあるもので簡単なおかずを作る',
  },
  {
    id: 2,
    title: '洗濯する',
    content:
      '洗濯機に洗濯物を入れてスイッチを入れる',
  },
];

const dbSeed = async () => {
  const todos: Promise<Todo>[] = [];
  todoData.forEach((todo) => {
    const createTodos =
      prisma.todo.create({
        data: todo,
      });
    todos.push(createTodos);
  });
  return await prisma.$transaction(
    todos as any
  );
};

const main = async () => {
  console.log('Start seeding ...');

  await dbSeed();

  console.log('Seeding finished.');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
