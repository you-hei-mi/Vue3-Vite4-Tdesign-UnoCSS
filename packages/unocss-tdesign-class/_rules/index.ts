/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-22 09:27:13
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\index.ts
 */
import type { Rule } from '@unocss/core';

import { borders } from './border'; // 边框
import { colors } from './color'; // 颜色
import { radius } from './radius'; // 其他
import { shadow } from './shadow'; // 阴影
import { size } from './size'; // 大小
import { spacing } from './spacing'; // 边距
import { typography } from './typography'; // 排版

export const rules: Rule[] = [colors, borders, size, spacing, shadow, radius, typography].flat(1);
