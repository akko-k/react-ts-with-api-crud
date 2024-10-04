import { createBrowserRouter } from 'react-router-dom';
import { TodoPage } from '../pages/todo';
import { TodoCraetePage } from '../pages/create';
import { TodoDetailPage } from '../pages/detail';
import { TodoEditPage } from '../pages/edit';
import { NAVIGATION_LIST } from '../constants/navigations';

export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCraetePage />,
  },
  {
    path: NAVIGATION_LIST.DETAIL,
    element: <TodoDetailPage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <TodoEditPage />,
  },
]);
