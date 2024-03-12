/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-26 14:28:09
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\radius.ts
 */
import type { Rule } from '@unocss/core';

export const radius: Rule[] = [
  // ------------------------------------------------ radius ------------------------------------------------
  /**
   * @description: 圆角
   * @return border-radius
   * @class shadow-('small' | 'default' | 'medium' | 'large' | 'extraLarge' | 'circle')
   * 例如  radius-small  | radius-default | radius-medium | radius-large  | radius-extraLarge | radius-circle
   */
  ['radius-small', { 'border-radius': `var(--td-radius-small)` }],
  ['radius-default', { 'border-radius': `var(--td-radius-default)` }],
  ['radius-medium', { 'border-radius': `var(--td-radius-medium)` }],
  ['radius-large', { 'border-radius': `var(--td-radius-large)` }],
  ['radius-extraLarge', { 'border-radius': `var(--td-radius-extraLarge)` }],
  ['radius-circle', { 'border-radius': `var(--td-radius-circle)` }],
];
