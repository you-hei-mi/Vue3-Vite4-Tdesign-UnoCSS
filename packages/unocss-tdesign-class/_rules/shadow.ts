/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-26 14:28:09
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\shadow.ts
 */
import type { Rule } from '@unocss/core';

export const shadow: Rule[] = [
  // ------------------------------------------------ shadow ------------------------------------------------
  /**
   * @description: 阴影
   * @return box-shadow
   * @class shadow-1-(3以内数字)
   * 例如  shadow-1  | shadow-2 | shadow-3
   */
  ['shadow-1', { 'box-shadow': `var(--td-shadow-1)` }],
  ['shadow-2', { 'box-shadow': `var(--td-shadow-2)` }],
  ['shadow-3', { 'box-shadow': `var(--td-shadow-3)` }],
];
