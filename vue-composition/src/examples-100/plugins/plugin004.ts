import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 4
 */

export interface Plugin4Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin4: Plugin = {
  install(app: App, options: Plugin4Options = {}) {
    const { prefix = 'plugin4', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin4 = {
      version: '1.0.0',
      name: 'Plugin 4',
      sayHello() {
        return `Hello from Plugin 4!`;
      },
    };

    // Global method
    app.provide('plugin4', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 4:`, value);
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
      console.log(`Plugin 4 installed`);
    }
  },
};
