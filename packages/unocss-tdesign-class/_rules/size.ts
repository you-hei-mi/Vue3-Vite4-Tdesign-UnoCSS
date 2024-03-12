/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-26 14:28:09
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\size.ts
 */
import type { Rule } from '@unocss/core';

export const handlerSize = (d: string, prefix: string | Array<string>, a: string = '', c: string = '') => {
  const num = d;

  if (Number.isNaN(d)) {
    return {};
  }
  if (Number(num) < 17 && Number(num) > 0) {
    if (prefix === 'size-MaxMin') {
      if (a.toLowerCase() === 'min-') {
        return {
          'min-width': `var(--td-size-${num})`,
        };
      }
      if (a.toLowerCase() === 'max-') {
        return {
          'max-width': `var(--td-size-${num})`,
        };
      }
      return {
        width: `var(--td-size-${num})`,
      };
    }
    if (prefix === 'wh-MaxMin') {
      if (c.toLowerCase() === 'h') {
        if (a.toLowerCase() === 'min-') {
          return {
            'min-height': `var(--td-size-${num})`,
          };
        }
        if (a.toLowerCase() === 'max-') {
          return {
            'max-height': `var(--td-size-${num})`,
          };
        }
        return {
          height: `var(--td-size-${num})`,
        };
      }
      if (a.toLowerCase() === 'min-') {
        return {
          'min-width': `var(--td-size-${num})`,
        };
      }
      if (a.toLowerCase() === 'max-') {
        return {
          'max-width': `var(--td-size-${num})`,
        };
      }
      return {
        width: `var(--td-size-${num})`,
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

export const size: Rule[] = [
  // ------------------------------------------------ size ------------------------------------------------
  /**
   * @description: 宽度
   * @return width
   * @class size-('min' | 'max')?-(16以内数字)?
   * 例如  size-1  | size-min-2 | | size-max-2 | size-1px
   */
  [/^size-(min-|max-)?(.+)$/, ([, a, b]: string[]) => handlerSize(b, 'size-MaxMin', a)],
  /**
   * @description: 宽度 | 高度
   * @return width
   * @class size-('min' | 'max')?-('w' | 'h')-(10以内数字)?
   * 例如  size-min-w-1  | size-w-2 | | size-max-w-2 | size-h-1
   */
  [/^(?:size-)?(min-|max-)?([wh])-?(.+)$/, ([, a, c, b]: string[]) => handlerSize(b, 'wh-MaxMin', a, c)],
];
