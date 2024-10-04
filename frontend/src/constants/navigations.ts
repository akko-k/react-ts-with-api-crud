// 定数の型定義
export const BASE_PATH: string = '/';

/**
 * ベースPATH
 */
export const NAVIGATION_LIST: Record<string, string> = {
  TOP: `${BASE_PATH}/`,
  DETAIL: `${BASE_PATH}/detail/:id`,
  CREATE: `${BASE_PATH}/create`,
  EDIT: `${BASE_PATH}/edit/:id`,
};
/**
 * リンク先
 */
export const NAVIGATION_PATH: Record<string, string> = {
  TOP: '/',
  DETAIL: '/detail',
  CREATE: '/create',
  EDIT: '/edit',
};

export type NavigationList = typeof NAVIGATION_LIST;
export type NavigationPath = typeof NAVIGATION_PATH;
