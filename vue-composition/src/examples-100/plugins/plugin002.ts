import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 2
 */

export interface Plugin2Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin2: Plugin = {
  install(app: App, options: Plugin2Options = {}) {
    const { prefix = 'plugin2', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin2 = {
      version: '1.0.0',
      name: 'Plugin 2',
      sayHello() {
        return `Hello from Plugin 2!`;
      },
    };

    // Global method
    app.provide('plugin2', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 2:`, value);
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
      console.log(`Plugin 2 installed`);
    }
  },
};
