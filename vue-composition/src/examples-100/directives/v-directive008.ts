import { Directive } from 'vue';

/**
 * Custom Directive Example 8
 */

export const vDirective8: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '8';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 8: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 8: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 8 unmounted');
  },
};
