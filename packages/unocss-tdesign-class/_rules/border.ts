/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-22 09:27:13
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\border.ts
 */
import type { Rule } from '@unocss/core';

import { handlerColorOrSize } from '../_utils';

export const handlerBorderSize = (d: string, prefix: string | Array<string>, a: string = '') => {
  const num = d;

  if (Number.isNaN(d)) {
    return {};
  }
  if (Number(num) < 17 && Number(num) > 0) {
    if (prefix === 'border-xy') {
      if (a.toLowerCase() === 'x') {
        return {
          'border-left-width': `var(--td-size-${num})`,
          'border-right-width': `var(--td-size-${num})`,
        };
      }
      return {
        'border-top-width': `var(--td-size-${num})`,
        'border-bottom-width': `var(--td-size-${num})`,
      };
    }

    if (Array.isArray(prefix)) {
      return Object.fromEntries(prefix.map((key) => [key, `--td-size-${num})`]));
    }
    return {
      [prefix]: `var(--td-size-${num})`,
    };
  }
  return {};
};

export const borders: Rule[] = [
  // ------------------------------------------------ colors ------------------------------------------------
  /**
   * @description: 颜色
   * @return border-color
   * @class ('border' | 'b')-color?-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)?
   * 例如  border-color-success  |  b-color-success |  border-brand  |  b-color-brand |  b-color-gray-10
   */
  [
    /^(?:border|b)-()(?:color-)?(.+)$/,
    ([, , b]: string[]) => handlerColorOrSize(b, 'border-color'),
    { autocomplete: 'bg-$colors' },
  ],
  /**
   * @description: 上 | 下 | 左 | 右 颜色
   * @return border-left-color | border-right-color | border-top-color | border-bottom-color
   * @class ('border' | 'b')-(('top' | 't') | ('right' | 'r') | ('bottom' | 'b') | ('left' | 'l'))?-color?-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)?
   * 例如  border-r-color-success  |  b-top-color-blue |  border-t-brand  |  b-b-color-gray
   */
  [/^(?:border|b)-([rltbse])-(?:color-)?(.+)$/, ([, a = '', b]: string[]) => handlerColorOrSize(b, 'border-TRBL', a)],
  /**
   * @description: 上下 | 左右 颜色
   * @return border-left-color && border-right-color | border-top-color && border-bottom-color
   * @class ('border' | 'b')-('x' | 'y')-color?-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)?
   * 例如  border-x-color-success  |  b-y-color-blue |  border-x-brand  |  b-y-color-gray-10
   */
  [/^(?:border|b)-([xy])-(?:color-)?(.+)$/, ([, a = '', b]: string[]) => handlerColorOrSize(b, 'border-xy', a)],
  /**
   * @description: 边框内联颜色
   * @return border-block-start-color |  border-block-end-color &&  border-inline-start-color |  border-inline-end-color
   * @class ('border' | 'b')-('block' | 'inline')-color?-('brand' | 'gray' | 'success' | 'error' | 'warning')-(10以内数字)?
   * 例如  border-inline-color-success  |  border-block-color-success |  border-block-color-gray-10
   */
  [/^(?:border|b)-(block|inline)-(?:color-)?(.+)$/, ([, , b]: string[]) => handlerColorOrSize(b, 'border-startEnd')],

  // ------------------------------------------------ size ------------------------------------------------
  /**
   * @description: 边框宽
   * @return border-width
   * @class ('border' | 'b')-(16以内数字)?
   * 例如  border-0  |  border-2 |  border-9  |  border-4
   */
  [/^(?:border|b)()(?:-(.+))?$/, ([, , b]: string[]) => handlerBorderSize(b, 'border-width')],
  /**
   * @description: 边框宽
   * @return border-width
   * @class ('border' | 'b')-(width | size)?-(16以内数字)?
   * 例如  border-width-0  |  border-size-2 |  border-width-9  |  border-size-4
   */
  [/^(?:border|b)-()(?:width|size)-(.+)$/, ([, , b]: string[]) => handlerBorderSize(b, 'border-width')],
  /**
   * @description: 上下 | 左右 边框宽
   * @return border-width
   * @class ('border' | 'b')-('x' | 'y')-(width | size)?-(16以内数字)?
   * 例如  border-x-0  |  border-y-2 |  b-y-9  |  b-x-4
   */
  [/^(?:border|b)-([xy])(?:-(.+))?$/, ([, , b]: string[]) => handlerBorderSize(b, 'border-width')],
];
