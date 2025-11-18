import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 1
 */

export interface Plugin1Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin1: Plugin = {
  install(app: App, options: Plugin1Options = {}) {
    const { prefix = 'plugin1', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin1 = {
      version: '1.0.0',
      name: 'Plugin 1',
      sayHello() {
        return `Hello from Plugin 1!`;
      },
    };

    // Global method
    app.provide('plugin1', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 1:`, value);
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
      console.log(`Plugin 1 installed`);
    }
  },
};
