import { Directive } from 'vue';

/**
 * Custom Directive Example 10
 */

export const vDirective10: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '10';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 10: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 10: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 10 unmounted');
  },
};
