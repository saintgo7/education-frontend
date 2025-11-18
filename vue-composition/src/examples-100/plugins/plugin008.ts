import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 8
 */

export interface Plugin8Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin8: Plugin = {
  install(app: App, options: Plugin8Options = {}) {
    const { prefix = 'plugin8', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin8 = {
      version: '1.0.0',
      name: 'Plugin 8',
      sayHello() {
        return `Hello from Plugin 8!`;
      },
    };

    // Global method
    app.provide('plugin8', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 8:`, value);
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
      console.log(`Plugin 8 installed`);
    }
  },
};
