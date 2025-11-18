import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 5
 */

export interface Plugin5Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin5: Plugin = {
  install(app: App, options: Plugin5Options = {}) {
    const { prefix = 'plugin5', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin5 = {
      version: '1.0.0',
      name: 'Plugin 5',
      sayHello() {
        return `Hello from Plugin 5!`;
      },
    };

    // Global method
    app.provide('plugin5', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 5:`, value);
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
      console.log(`Plugin 5 installed`);
    }
  },
};
