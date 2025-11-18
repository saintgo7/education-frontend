import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 10
 */

export interface Plugin10Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin10: Plugin = {
  install(app: App, options: Plugin10Options = {}) {
    const { prefix = 'plugin10', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin10 = {
      version: '1.0.0',
      name: 'Plugin 10',
      sayHello() {
        return `Hello from Plugin 10!`;
      },
    };

    // Global method
    app.provide('plugin10', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 10:`, value);
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
      console.log(`Plugin 10 installed`);
    }
  },
};
