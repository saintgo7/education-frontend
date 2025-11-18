import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 6
 */

export interface Plugin6Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin6: Plugin = {
  install(app: App, options: Plugin6Options = {}) {
    const { prefix = 'plugin6', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin6 = {
      version: '1.0.0',
      name: 'Plugin 6',
      sayHello() {
        return `Hello from Plugin 6!`;
      },
    };

    // Global method
    app.provide('plugin6', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 6:`, value);
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
      console.log(`Plugin 6 installed`);
    }
  },
};
