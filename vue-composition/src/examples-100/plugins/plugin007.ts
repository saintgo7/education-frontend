import { App, Plugin } from 'vue';

/**
 * Vue Plugin Example 7
 */

export interface Plugin7Options {
  prefix?: string;
  debug?: boolean;
}

export const plugin7: Plugin = {
  install(app: App, options: Plugin7Options = {}) {
    const { prefix = 'plugin7', debug = false } = options;

    // Global property
    app.config.globalProperties.$plugin7 = {
      version: '1.0.0',
      name: 'Plugin 7',
      sayHello() {
        return `Hello from Plugin 7!`;
      },
    };

    // Global method
    app.provide('plugin7', {
      doSomething(value: any) {
        if (debug) console.log(`Plugin 7:`, value);
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
      console.log(`Plugin 7 installed`);
    }
  },
};
