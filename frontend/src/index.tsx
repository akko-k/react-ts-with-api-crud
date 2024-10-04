import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { TodoProvider } from './contexts/TodoContext';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
