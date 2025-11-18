import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 9
 */

export interface Plugin9Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin9: Plugin = {
  install(app: App, options: Plugin9Options = {}) {
    const { prefix = 'plugin9', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin9 = {
      version: '1.0.0',
      name: 'Plugin 9',
      sayHello() {
        return `Hello from Plugin 9!`;
      },
    };

    // Global method
    app.provide('plugin9', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 9:`, value);
        return value;
      },
    });

    // Global directive
    app.directive(`${prefix}-custom`, {
      mounted(el, binding) {
        el.textContent = `${prefix}: ${binding.value}`;
      },
    });

    if (debug) {
      console.log(`Plugin 9 installed`);
    }
  },
};
