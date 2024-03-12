// uno.config.ts
import { defineConfig, presetUno } from 'unocss';

import unocssTdesignClass from './packages/unocss-tdesign-class/index';

export default defineConfig({
  presets: [
    presetUno(), // 添加 UnoCSS 的默认样式预设
    unocssTdesignClass(),
  ],
});
