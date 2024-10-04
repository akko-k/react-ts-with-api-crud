import { AxiosResponse } from 'axios';
import { globalAxios, isAxiosError } from './config';
import { TodoType } from '../interfaces/Todo';

/**
 * Todoリスト取得API
 * @returns
 */
export const fetchTodoListApi = async (): Promise<TodoType[]> => {
  try {
    const { data }: AxiosResponse<Array<TodoType>> = await globalAxios.get('/');
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error fetchTodoListApi: ${error.message}`);
    }
    console.error('Unknown error in fetchTodoListApi:', error);
    throw new Error('Error fetchTodoListApi');
  }
};
/**
 *idに紐づくTodo取得API
 * @param id
 * @returns
 */
export const fetchTodoDetailApi = async (id: number): Promise<TodoType> => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.get(`/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error fetchTodoDetailApi: ${error.message}`);
    }
    throw new Error('Error fetchTodoDetailApi');
  }
};

/**
 * 新規追加API
 * @param todo
 * @returns
 */

export const createTodoApi = async (
  title: string,
  content: string,
): Promise<TodoType> => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.post('/', {
      title,
      content,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error createTodoApi: ${error.message}`);
    }
    throw new Error('Error createTodoApi');
  }
};

/**
 * 更新API
 * @param todo
 * @returns
 */

export const updateTodoApi = async (
  id: number,
  title: string,
  content: string,
): Promise<TodoType> => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.put(`/${id}`, {
      title,
      content,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error updateTodoApi: ${error.message}`);
    }
    throw new Error('Error updateTodoApi');
  }
};

/**
 * 削除API
 * @param id
 * @returns
 */

export const deleteTodoApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.delete(
      `/${id}`,
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error deleteTodoApi: ${error.message}`);
    }
    throw new Error('Error deleteTodoApi');
  }
};
