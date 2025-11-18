import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 3
 */

export interface Plugin3Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin3: Plugin = {
  install(app: App, options: Plugin3Options = {}) {
    const { prefix = 'plugin3', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin3 = {
      version: '1.0.0',
      name: 'Plugin 3',
      sayHello() {
        return `Hello from Plugin 3!`;
      },
    };

    // Global method
    app.provide('plugin3', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 3:`, value);
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
      console.log(`Plugin 3 installed`);
    }
  },
};
