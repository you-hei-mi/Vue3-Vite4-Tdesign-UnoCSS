/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-22 09:27:13
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\color.ts
 */
import type { Rule } from '@unocss/core';

import { handlerColorOrSize } from '../_utils';

export const colors: Rule[] = [
  /**
   * @description: bg 背景颜色
   * @return background-color
   * @class bg-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)
   * 例如  bg-brand  |  bg-gray |  bg-success-8  |  bg-error-10  |  bg-warning-2  | ...
   */
  [/^bg-(.+)$/, (...args) => handlerColorOrSize(args[0][1], 'background-color'), { autocomplete: 'bg-$colors' }],
  /**
   * @description: 不允许修改背景颜色透明度
   * @return {}
   */
  [/^bg-op(?:acity)?-?(.+)$/, () => ({})],
  /**
   * @description: color 字体颜色
   * @class color-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)
   * 例如  color-brand  |  color-gray |  color-success-8  |  color-error-10  |  color-warning-2  | ...
   */
  [/^(?:color|c)-(.+)$/, (...args) => handlerColorOrSize(args[0][1], 'color'), { autocomplete: '(color|c)-$colors' }],
  /**
   * @description: text-color 字体颜色
   * @class text-color-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)
   * 例如  text-color-brand  |  text-color-gray |  text-color-success-8  |  text-color-error-10  |  text-color-warning-2  | ...
   */
  [/^text-(?:color-)?(.+)$/, (...args) => handlerColorOrSize(args[0][1], 'color'), { autocomplete: 'text-$colors' }],
];
