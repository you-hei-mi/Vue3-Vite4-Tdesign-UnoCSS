/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-26 17:25:00
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\typography.ts
 */
/*
 * @Description:
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-02-26 14:28:09
 * @FilePath: \ruoyi-ui\packages\unocss-tdesign-class\_rules\typography.ts
 */
import type { Rule } from '@unocss/core';

export const handlerLineHeightSize = (d: string, prefix: string | Array<string>) => {
  const num = d;

  if (Number.isNaN(d)) {
    return {};
  }
  if (Number(num) < 17 && Number(num) > 0) {
    if (Array.isArray(prefix)) {
      return Object.fromEntries(prefix.map((key) => [key, `--td-size-${num})`]));
    }
    return {
      [prefix]: `var(--td-size-${num})`,
    };
  }
  return {};
};

export const typography: Rule[] = [
  // ------------------------------------------------ leadings ------------------------------------------------
  /**
   * @description: 行高
   * @return line-height
   * @class ('font')?-line-height-(10以内数字)?
   * 例如  font-line-height-4  |  line-height-4
   */
  [
    /^(?:font-)?(?:leading|lh|line-height)-(.+)$/,
    ([, b]: string[]) => handlerLineHeightSize(b, 'line-height'),
    { autocomplete: '(leading|lh|line-height)-$lineHeight' },
  ],
];
