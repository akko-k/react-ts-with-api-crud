import { TodoType } from '../interfaces/Todo';

/**
 * Todoリストの初期値
 */

export const INIT_TODO_LIST: Array<TodoType> = [
  {
    id: 1,
    title: 'ご飯を作る',
    content: '冷蔵庫にある食材で簡単なおかずを作る',
  },
  {
    id: 2,
    title: '洗濯する',
    content: '洗濯乾燥機に洗濯物を入れてスイッチを押す',
  },
];

/**
 * Todoリストの採番IDの初期値
 */
export const INIT_UNIQUE_ID = INIT_TODO_LIST.length;
