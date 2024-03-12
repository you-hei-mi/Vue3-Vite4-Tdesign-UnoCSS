export const handlerColorOrSize = (d: string, prefix: string | Array<string>, a: string = '') => {
  const defaultCode = 7;
  const colorArr = ['brand', 'gray', 'success', 'error', 'warning'];
  const color = d.match(/([^-]+)/)[1];
  let num = defaultCode;
  const regularNum = d.match(/-(\d+)/);

  if (regularNum) {
    num = Math.floor(Number(regularNum[1]));
  }
  if (Number(num) < 11 && Number(num) > 0 && colorArr.includes(color)) {
    if (prefix === 'border-xy') {
      if (a.toLowerCase() === 'x') {
        return {
          'border-left-color': `var(--td-${color}-color-${num})`,
          'border-right-color': `var(--td-${color}-color-${num})`,
        };
      }
      return {
        'border-top-color': `var(--td-${color}-color-${num})`,
        'border-bottom-color': `var(--td-${color}-color-${num})`,
      };
    }
    if (prefix === 'border-startEnd') {
      if (a.toLowerCase() === 'block') {
        return {
          'border-block-start-color': `var(--td-${color}-color-${num})`,
          'border-block-end-color': `var(--td-${color}-color-${num})`,
        };
      }
      return {
        'border-inline-start-color': `var(--td-${color}-color-${num})`,
        'border-inline-end-color': `var(--td-${color}-color-${num})`,
      };
    }
    if (prefix === 'border-TRBL') {
      if (a.toLowerCase() === 'top' || a.toLowerCase() === 't') {
        return {
          'border-top-color': `var(--td-${color}-color-${num})`,
        };
      }
      if (a.toLowerCase() === 'right' || a.toLowerCase() === 'r') {
        return {
          'border-right-color': `var(--td-${color}-color-${num})`,
        };
      }
      if (a.toLowerCase() === 'bottom' || a.toLowerCase() === 'b') {
        return {
          'border-bottom-color': `var(--td-${color}-color-${num})`,
        };
      }
      if (a.toLowerCase() === 'left' || a.toLowerCase() === 'l') {
        return {
          'border-left-color': `var(--td-${color}-color-${num})`,
        };
      }
      return {};
    }
    if (Array.isArray(prefix)) {
      return Object.fromEntries(prefix.map((key) => [key, `var(--td-${color}-color-${num})`]));
    }
    return {
      [prefix]: `var(--td-${color}-color-${num})`,
    };
  }
  return {};
};
